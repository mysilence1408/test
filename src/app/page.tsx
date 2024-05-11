import Image from "next/image";
import ProductTopSection from "@/components/ProductTopSection";
import ProductCard from "@/components/ProductCard";
import OtherProducts from "@/components/OtherProducts";

export default function Home() {
  return (
    <div className=" bg-[#F5F5F5] rounded-2xl p-4 sm:p-8 md:p-16 lg:p-24">
      <ProductTopSection />
      <ProductCard />
      <OtherProducts />
    </div>
  );
}
