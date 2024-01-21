import money from "@/assets/Vector.png";
import qris from "@/assets/image 12.png";
import bank from "@/assets/Vector1.png";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React, { useState } from "react";
import Image from "next/image";
export default function PilihPembayaran({ byr, setByr }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-5 lg:gap-7">
      <div
        onClick={() => setByr("cash")}
        className="py-3 border flex border-gray-400/75 rounded-lg px-4 items-center justify-between"
      >
        <div className="flex gap-2">
          <Image src={money} alt="icon" />
          <h3>Cash</h3>
        </div>
        <div className="w-5 h-5 rounded-full border bg-transparent relative flex items-center justify-center border-gray-400/75">
          {byr === "cash" && (
            <div className="bg-primary p-[0.4rem] rounded-full absolute" />
          )}
        </div>
      </div>
      <CollapsiblePrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
        <CollapsiblePrimitive.Trigger
          className={clsx(
            "flex w-full select-none py-3 border border-gray-400/75 rounded-lg px-4 items-center justify-between font-normal"
          )}
        >
          <div className="flex gap-2 items-center">
            <div>
              <Image src={bank} alt="bank" />
            </div>
            Transfer Bank
          </div>
          <ChevronRightIcon
            className={`${
              isOpen && "rotate-90"
            } transition duration-200 ease-in-out h-5 w-5`}
          />
        </CollapsiblePrimitive.Trigger>
        <CollapsiblePrimitive.Content className="mt-1 flex flex-col space-y-1">
          <div
            onClick={() => setByr("qris")}
            className={clsx(
              "group",
              "ml-12 flex select-none items-center justify-between rounded-lg p-1 text-left text-sm font-medium border border-gray-400/75"
            )}
          >
            <div className="group-hover:bg-secondary text-sm font-normal w-full py-2 px-2 rounded-md flex items-center transition duration-200">
              <div>
                <Image src={qris} alt="qris" />
              </div>
            </div>
          </div>
        </CollapsiblePrimitive.Content>
      </CollapsiblePrimitive.Root>
    </div>
  );
}
