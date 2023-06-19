import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductInCart {
  _id: string;
  price: number;
  quantity: number;
  name: string;
  size: string;
  image: {
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

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInCart>) => {
      state.product = [...state.product, action.payload];
      state.totalQuantity = state.totalQuantity + action.payload.quantity;
    },
  },
});
export const selectCount = (state: RootState) => state.cart;
export const { addToCart } = cartSlice.actions;

export default cartSlice;
