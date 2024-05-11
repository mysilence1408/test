"use client";
import Image from "next/image";
import React, { useState } from "react";
import Arrow from "@/../../public/arrow-right.png";
import Tag from "@/../../public/tag.png";
import CardImg from "@/../../public/cardImg.png";
import Star from "@/../../public/star.png";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
const slides = [
  {
    url: "/image1.png",
  },
  {
    url: "/image2.png",
  },
];
const Carousel = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };
  return (
    <div className=" max-w-[1400px] h-[600px] w-full m-auto py-16 px-4 relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className=" w-full h-full rounded-md bg-center bg-cover duration-500"
      ></div>
      <div className=" absolute lg:top-[50%] translate-x-0 translate-y-[-50%] lg:left-[-5px] left-[10%] text-2xl rounded-md p-2 bg-white/50 text-white cursor-pointer ">
        <Image
          src={Arrow}
          alt="Arrow"
          className=" rotate-180"
          onClick={prevSlide}
        />
      </div>
      <div className=" absolute lg:top-[50%] translate-x-0 translate-y-[-50%] lg:right-[-5px] right-[10%] lg:rotate-0 text-2xl rounded-md p-2 bg-white/50 text-white cursor-pointer ">
        <Image src={Arrow} alt="Arrow" onClick={nextSlide} />
      </div>
      <Button
        onPress={onOpen}
        className="absolute bottom-[20%] right-[50%] bg-transparent"
      >
        <Image src={Tag} alt="..." />
      </Button>
      <>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <div className="flex gap-4 items-center">
                    <div>
                      <Image src={CardImg} alt="CardImg" />
                    </div>
                    <div className=" flex flex-col gap-8">
                      <p>عنوان محصول عنوان محصول عنوان محصول عنوان محصول</p>
                      <div className=" flex justify-between">
                        <Image
                          src={Star}
                          alt="Star"
                          width={50}
                          height={50}
                          className=" object-contain"
                        />
                        <p className=" line-through">460,000</p>
                      </div>
                      <p className=" flex justify-end">460,000</p>
                    </div>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default Carousel;
