import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

export type ProductCardData = {
  name: string;
  category: string;
  price: number;
};

const ProductCard = (props: { product?: ProductCardData }) => {
  console.log("🚀 ~ file: ProductCard.tsx:18 ~ product:", props.product);
  return (
    <Card className="rounded-none  h-96 border-none">
      <CardContent className="h-64">
        {/* <Image src={""} alt="Product Image" /> */}
      </CardContent>
      <CardFooter className="flex flex-col items-start text-md font-semibold">
        <p className="text-[#212121]">{props?.product!.name}</p>
        <p className="text-[#888888]">{props?.product!.category}</p>
        <p className="text-[#212121] text-[20px]">$ {props?.product!.price}</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
