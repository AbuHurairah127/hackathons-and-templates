import Image from "next/image";
// import image5 from "@/assets/Image5.png";
const page = () => {
  return (
    <div className="">
      <div className="px-24 py-16 min-h-screen bg-[#F2F3F7]">
        <div className="w-2/3 flex">
          <div className="flex flex-col w-[150px]">
            {/* <Image src={image5} alt="" width={120} height={120} /> */}
          </div>
          <Image
            src={"/Image5.png"}
            alt=""
            className="w-[80%]"
            width={0}
            height={0}
          />
        </div>
        <div className="w-1/3"></div>
      </div>
    </div>
  );
};

export default page;
