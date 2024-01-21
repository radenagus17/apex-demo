import Image from "next/image";
import { data, images } from "@/data";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
// icon
import { CheckIcon } from "@radix-ui/react-icons";

export default function ImageRows() {
  const { state } = useContext(UserContext);
  const { img, setImg } = state;
  return (
    <>
      <div className="max-h-[14rem] flex items-center relative">
        <Image src={images[0]} alt="img" />
        <div className="grid grid-cols-8 absolute inset-0">
          {data.map((el, idx) => (
            <span
              key={idx}
              onClick={() =>
                img.gambar_1 == el
                  ? setImg({ ...img, gambar_1: "" })
                  : setImg({ ...img, gambar_1: el })
              }
              className="flex items-center justify-center relative cursor-pointer"
            >
              {img.gambar_1 == el && (
                <CheckIcon className="w-5 h-5 text-white bg-primary rounded-full absolute" />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="max-h-[14rem] flex items-center relative">
        <Image src={images[1]} alt="img" />
        <div className="grid grid-cols-8 absolute inset-0">
          {data.map((el, idx) => (
            <span
              key={idx}
              onClick={() =>
                img.gambar_2 == el
                  ? setImg({ ...img, gambar_2: "" })
                  : setImg({ ...img, gambar_2: el })
              }
              className="flex items-center justify-center relative cursor-pointer"
            >
              {img.gambar_2 == el && (
                <CheckIcon className="w-5 h-5 text-white bg-primary rounded-full absolute" />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="max-h-[14rem] flex items-center relative">
        <Image src={images[2]} alt="img" />
        <div className="grid grid-cols-9 absolute inset-0">
          {data.map((el, idx) => (
            <span
              key={idx}
              onClick={() =>
                img.gambar_3 == el
                  ? setImg({ ...img, gambar_3: "" })
                  : setImg({ ...img, gambar_3: el })
              }
              className="flex items-center justify-center relative cursor-pointer"
            >
              {img.gambar_3 == el && (
                <CheckIcon className="w-5 h-5 text-white bg-primary rounded-full absolute" />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="max-h-[14rem] flex items-center relative">
        <Image src={images[3]} alt="img" />
        <div className="grid grid-cols-8 absolute inset-0">
          {data.map((el, idx) => (
            <span
              key={idx}
              onClick={() =>
                img.gambar_4 == el
                  ? setImg({ ...img, gambar_4: "" })
                  : setImg({ ...img, gambar_4: el })
              }
              className="flex items-center justify-center relative cursor-pointer"
            >
              {img.gambar_4 == el && (
                <CheckIcon className="w-5 h-5 text-white bg-primary rounded-full absolute" />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="max-h-[14rem] flex items-center relative">
        <Image src={images[4]} alt="img" />
        <div className="grid grid-cols-8 absolute inset-0">
          {data.map((el, idx) => (
            <span
              key={idx}
              onClick={() =>
                img.gambar_5 == el
                  ? setImg({ ...img, gambar_5: "" })
                  : setImg({ ...img, gambar_5: el })
              }
              className="flex items-center justify-center relative cursor-pointer"
            >
              {img.gambar_5 == el && (
                <CheckIcon className="w-5 h-5 text-white bg-primary rounded-full absolute" />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="max-h-[14rem] flex items-center relative">
        <Image src={images[5]} alt="img" />
        <div className="grid grid-cols-8 absolute inset-0">
          {data.map((el, idx) => (
            <span
              key={idx}
              onClick={() =>
                img.gambar_6 == el
                  ? setImg({ ...img, gambar_6: "" })
                  : setImg({ ...img, gambar_6: el })
              }
              className="flex items-center justify-center relative cursor-pointer"
            >
              {img.gambar_6 == el && (
                <CheckIcon className="w-5 h-5 text-white bg-primary rounded-full absolute" />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="max-h-[14rem] flex items-center relative">
        <Image src={images[6]} alt="img" />
        <div className="grid grid-cols-8 absolute inset-0">
          {data.map((el, idx) => (
            <span
              key={idx}
              onClick={() =>
                img.gambar_7 == el
                  ? setImg({ ...img, gambar_7: "" })
                  : setImg({ ...img, gambar_7: el })
              }
              className="flex items-center justify-center relative cursor-pointer"
            >
              {img.gambar_7 == el && (
                <CheckIcon className="w-5 h-5 text-white bg-primary rounded-full absolute" />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="max-h-[14rem] flex items-center relative">
        <Image src={images[7]} alt="img" />
        <div className="grid grid-cols-8 absolute inset-0">
          {data.map((el, idx) => (
            <span
              key={idx}
              onClick={() =>
                img.gambar_8 == el
                  ? setImg({ ...img, gambar_8: "" })
                  : setImg({ ...img, gambar_8: el })
              }
              className="flex items-center justify-center relative cursor-pointer"
            >
              {img.gambar_8 == el && (
                <CheckIcon className="w-5 h-5 text-white bg-primary rounded-full absolute" />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="max-h-[14rem] flex items-center relative">
        <Image src={images[8]} alt="img" />
        <div className="grid grid-cols-8 absolute inset-0">
          {data.map((el, idx) => (
            <span
              key={idx}
              onClick={() =>
                img.gambar_9 == el
                  ? setImg({ ...img, gambar_9: "" })
                  : setImg({ ...img, gambar_9: el })
              }
              className="flex items-center justify-center relative cursor-pointer"
            >
              {img.gambar_9 == el && (
                <CheckIcon className="w-5 h-5 text-white bg-primary rounded-full absolute" />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="max-h-[14rem] flex items-center relative">
        <Image src={images[9]} alt="img" />
        <div className="grid grid-cols-8 absolute inset-0">
          {data.map((el, idx) => (
            <span
              key={idx}
              onClick={() =>
                img.gambar_10 == el
                  ? setImg({ ...img, gambar_10: "" })
                  : setImg({ ...img, gambar_10: el })
              }
              className="flex items-center justify-center relative cursor-pointer"
            >
              {img.gambar_10 == el && (
                <CheckIcon className="w-5 h-5 text-white bg-primary rounded-full absolute" />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="max-h-[14rem] flex items-center relative">
        <Image src={images[10]} alt="img" />
        <div className="grid grid-cols-8 absolute inset-0">
          {data.map((el, idx) => (
            <span
              key={idx}
              onClick={() =>
                img.gambar_11 == el
                  ? setImg({ ...img, gambar_11: "" })
                  : setImg({ ...img, gambar_11: el })
              }
              className="flex items-center justify-center relative cursor-pointer"
            >
              {img.gambar_11 == el && (
                <CheckIcon className="w-5 h-5 text-white bg-primary rounded-full absolute" />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="max-h-[14rem] flex items-center relative">
        <Image src={images[11]} alt="img" />
        <div className="grid grid-cols-8 absolute inset-0">
          {data.map((el, idx) => (
            <span
              key={idx}
              onClick={() =>
                img.gambar_12 == el
                  ? setImg({ ...img, gambar_12: "" })
                  : setImg({ ...img, gambar_12: el })
              }
              className="flex items-center justify-center relative cursor-pointer"
            >
              {img.gambar_12 == el && (
                <CheckIcon className="w-5 h-5 text-white bg-primary rounded-full absolute" />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="max-h-[14rem] flex items-center relative">
        <Image src={images[12]} alt="img" />
        <div className="grid grid-cols-8 absolute inset-0">
          {data.map((el, idx) => (
            <span
              key={idx}
              onClick={() =>
                img.gambar_13 == el
                  ? setImg({ ...img, gambar_13: "" })
                  : setImg({ ...img, gambar_13: el })
              }
              className="flex items-center justify-center relative cursor-pointer"
            >
              {img.gambar_13 == el && (
                <CheckIcon className="w-5 h-5 text-white bg-primary rounded-full absolute" />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="max-h-[14rem] flex items-center relative lg:col-span-2 col-span-1">
        <Image src={images[13]} alt="img" />
        <div className="grid grid-cols-8 absolute inset-0">
          {data.map((el, idx) => (
            <span
              key={idx}
              onClick={() =>
                img.gambar_14 == el
                  ? setImg({ ...img, gambar_14: "" })
                  : setImg({ ...img, gambar_14: el })
              }
              className="flex items-center justify-center relative cursor-pointer"
            >
              {img.gambar_14 == el && (
                <CheckIcon className="w-5 h-5 text-white bg-primary rounded-full absolute" />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="max-h-[14rem] flex items-center relative">
        <Image src={images[14]} alt="img" />
        <div className="grid grid-cols-8 absolute inset-0">
          {data.map((el, idx) => (
            <span
              key={idx}
              onClick={() =>
                img.gambar_15 == el
                  ? setImg({ ...img, gambar_15: "" })
                  : setImg({ ...img, gambar_15: el })
              }
              className="flex items-center justify-center relative cursor-pointer"
            >
              {img.gambar_15 == el && (
                <CheckIcon className="w-5 h-5 text-white bg-primary rounded-full absolute" />
              )}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
