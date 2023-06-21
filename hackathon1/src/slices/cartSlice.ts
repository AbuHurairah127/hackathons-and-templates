import { fetchProductInCart } from "@/sanity/sanity-utils";
import { RootState } from "@/store/store";
import { errToast, successToast } from "@/utils/toasts";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { error } from "console";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
export interface ProductInCart {
  _id: string;
  quantity: number;
  size: string;
  name: string;
  price: number;
  category: string;
  images: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
}

interface InitialState {
  pending: boolean;
  error: string | null;
  product: ProductInCart[] | [];
  subTotal: number;
  totalQuantity: number;
}
const initialState: InitialState = {
  pending: false,
  error: null,
  product: [],
  subTotal: 0,
  totalQuantity: 0,
};
export const addToCart = createAsyncThunk(
  "api/cart/POST",
  async (
    data: {
      _id: string;
      quantity: number;
      size: string;
      router: AppRouterInstance;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post("/api/cart", {
        product_id: data._id,
        quantity: data.quantity,
        size: data.size,
      });
      if (response.data.status === 401) {
        errToast(response.data.msg);
        return rejectWithValue(response.data.msg);
      }
      if (response.data.status === 400) {
        errToast(response.data.msg);
        return rejectWithValue(response.data.msg);
      }
      if (response.data.status === 200) {
        successToast("Successfully added product to your cart.");
        const productData: ProductInCart[] | undefined =
          await fetchProductInCart([data._id]);
        if (productData === undefined || productData.length === 0) {
          errToast("Some error occurred while fetching product.");
          return rejectWithValue("Some error occurred while fetching product.");
        }
        return {
          data: { ...productData[0], size: data.size, quantity: data.quantity },
        };
      }
    } catch (error: any) {
      console.log("🚀 ~ file: cartSlice.ts:74 ~ error:", error);
      if (error.response.status === 401) {
        errToast("You are not logged in.!");
        data.router.push("/signin");
      }
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCartData = createAsyncThunk(
  "api/cart/GET",
  async (nothing = undefined, { rejectWithValue }) => {
    try {
      const data = await axios.get("/api/cart");
      return data.data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(addToCart.fulfilled, (state, { payload }) => {
      state.pending = false;
      if (!payload) {
        return;
      }
      state.product = [...state.product, payload.data];
      state.totalQuantity = state.totalQuantity + payload.data.quantity;
      state.subTotal =
        state.subTotal + payload.data.quantity * payload.data.price;
    });
    builder.addCase(addToCart.rejected, (state) => {
      state.pending = false;
    });
    builder.addCase(fetchCartData.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(fetchCartData.fulfilled, (state, { payload }) => {
      state.product = payload;
      state.pending = false;
      payload.forEach((product: ProductInCart) => {
        state.totalQuantity += product.quantity;
        state.subTotal += product.price;
      });
    });
    builder.addCase(fetchCartData.rejected, (state) => {
      state.pending = false;
    });
  },
});
export const selectCount = (state: RootState) => state.cart;

export default cartSlice;
