import Image from "next/image";
import React from "react";

const Products = [
  {
    id: 1,
    imgLeaf: "/leaf.png",
    imgCard: "/cardImg.png",
    text: "عنوان محصول عنوان محصول عنوان محصول عنوان محصول",
    star: "/logandstar.png",
    oldPrice: "460",
    newPrice: "460",
    addBtn: "/addbtn.png",
  },
  {
    id: 2,
    imgLeaf: "/leaf.png",
    imgCard: "/cardImg.png",
    text: "عنوان محصول عنوان محصول عنوان محصول عنوان محصول",
    star: "/logandstar.png",
    oldPrice: "460",
    newPrice: "460",
    addBtn: "/addbtn.png",
  },
  {
    id: 3,
    imgLeaf: "/leaf.png",
    imgCard: "/cardImg.png",
    text: "عنوان محصول عنوان محصول عنوان محصول عنوان محصول",
    star: "/logandstar.png",
    oldPrice: "460",
    newPrice: "460",
    addBtn: "/addbtn.png",
  },
  {
    id: 4,
    imgLeaf: "/leaf.png",
    imgCard: "/cardImg.png",
    text: "عنوان محصول عنوان محصول عنوان محصول عنوان محصول",
    star: "/logandstar.png",
    oldPrice: "460",
    newPrice: "460",
    addBtn: "/addbtn.png",
  },
  {
    id: 5,
    imgLeaf: "/leaf.png",
    imgCard: "/cardImg.png",
    text: "عنوان محصول عنوان محصول عنوان محصول عنوان محصول",
    star: "/logandstar.png",
    oldPrice: "460",
    newPrice: "460",
    addBtn: "/addbtn.png",
  },
  {
    id: 6,
    imgLeaf: "/leaf.png",
    imgCard: "/cardImg.png",
    text: "عنوان محصول عنوان محصول عنوان محصول عنوان محصول",
    star: "/logandstar.png",
    oldPrice: "460",
    newPrice: "460",
    addBtn: "/addbtn.png",
  },
  {
    id: 7,
    imgLeaf: "/leaf.png",
    imgCard: "/cardImg.png",
    text: "عنوان محصول عنوان محصول عنوان محصول عنوان محصول",
    star: "/logandstar.png",
    oldPrice: "460",
    newPrice: "460",
    addBtn: "/addbtn.png",
  },
  {
    id: 8,
    imgLeaf: "/leaf.png",
    imgCard: "/cardImg.png",
    text: "عنوان محصول عنوان محصول عنوان محصول عنوان محصول",
    star: "/logandstar.png",
    oldPrice: "460",
    newPrice: "460",
    addBtn: "/addbtn.png",
  },
  {
    id: 9,
    imgLeaf: "/leaf.png",
    imgCard: "/cardImg.png",
    text: "عنوان محصول عنوان محصول عنوان محصول عنوان محصول",
    star: "/logandstar.png",
    oldPrice: "460",
    newPrice: "460",
    addBtn: "/addbtn.png",
  },
  {
    id: 10,
    imgLeaf: "/leaf.png",
    imgCard: "/cardImg.png",
    text: "عنوان محصول عنوان محصول عنوان محصول عنوان محصول",
    star: "/logandstar.png",
    oldPrice: "460",
    newPrice: "460",
    addBtn: "/addbtn.png",
  },
  {
    id: 11,
    imgLeaf: "/leaf.png",
    imgCard: "/cardImg.png",
    text: "عنوان محصول عنوان محصول عنوان محصول عنوان محصول",
    star: "/logandstar.png",
    oldPrice: "460",
    newPrice: "460",
    addBtn: "/addbtn.png",
  },
  {
    id: 12,
    imgLeaf: "/leaf.png",
    imgCard: "/cardImg.png",
    text: "عنوان محصول عنوان محصول عنوان محصول عنوان محصول",
    star: "/logandstar.png",
    oldPrice: "460",
    newPrice: "460",
    addBtn: "/addbtn.png",
  },
  {
    id: 13,
    imgLeaf: "/leaf.png",
    imgCard: "/cardImg.png",
    text: "عنوان محصول عنوان محصول عنوان محصول عنوان محصول",
    star: "/logandstar.png",
    oldPrice: "460",
    newPrice: "460",
    addBtn: "/addbtn.png",
  },
  {
    id: 14,
    imgLeaf: "/leaf.png",
    imgCard: "/cardImg.png",
    text: "عنوان محصول عنوان محصول عنوان محصول عنوان محصول",
    star: "/logandstar.png",
    oldPrice: "460",
    newPrice: "460",
    addBtn: "/addbtn.png",
  },
  {
    id: 15,
    imgLeaf: "/leaf.png",
    imgCard: "/cardImg.png",
    text: "عنوان محصول عنوان محصول عنوان محصول عنوان محصول",
    star: "/logandstar.png",
    oldPrice: "460",
    newPrice: "460",
    addBtn: "/addbtn.png",
  },
];

const ProductCard = () => {
  return (
    <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-5 gap-8 place-items-center max-w-7xl mx-auto lg:pt-[100px] pt-[25px]">
      {Products.map((product) => (
        <div
          key={product.id}
          className=" bg-white p-2 flex flex-col gap-2 rounded-md"
        >
          <Image
            src={product.imgLeaf}
            width={84}
            height={24}
            alt="leaf"
            className="relative top-0 right-0"
          />

          <Image
            src={product.imgCard}
            width={165}
            height={147}
            alt="cardImage"
            className="relative top-0 left-0 bottom-0 right-0 m-auto"
          />

          <p>{product.text}</p>

          <Image src={product.star} alt="Star" width={198} height={26} />
          <div className=" flex justify-between items-center">
            <div className="cursor-pointer">
              <Image src={product.addBtn} alt="AddBtn" width={35} height={35} />
            </div>
            <div className=" flex flex-col">
              <span className=" line-through">{product.oldPrice}</span>
              <span>{product.newPrice}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
