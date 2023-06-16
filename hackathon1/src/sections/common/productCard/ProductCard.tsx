import { urlFor } from "@/sanity/sanity-utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import Image from "next/image";
export type ProductCardData = {
  name: string;
  category: string;
  price: number;
  images: any;
};

const ProductCard = (props: { product?: ProductCardData }) => {
  return (
    <Card className="rounded-none w-fit  h-96 border-none group hover:scale-110 transition-all duration-1000  cursor-pointer">
      <CardContent className="h-72 overflow-hidden">
        <Image
          src={urlFor(props.product?.images!).url()}
          width={250}
          height={250}
          alt="Product Image"
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start text-md font-semibold py-0 mt-3">
        <p className="text-[#212121]">{props?.product!.name}</p>
        <p className="text-[#888888]">{props?.product!.category}</p>
        <p className="text-[#212121] text-[20px]">$ {props?.product!.price}</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
