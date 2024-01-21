import { Transition } from "@headlessui/react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { clsx } from "clsx";
import { Cross1Icon } from "@radix-ui/react-icons";
import React, { Fragment, useState } from "react";
export default function ButtonPaymentAlert({ setStep, setLine, line }) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <AlertDialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogPrimitive.Trigger asChild>
        <button type="button" className="btn-primary w-full">
          Bayar
        </button>
      </AlertDialogPrimitive.Trigger>
      <AlertDialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <AlertDialogPrimitive.Overlay
              forceMount
              className="fixed inset-0 z-20 bg-black/50"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <AlertDialogPrimitive.Content
              forceMount
              className={clsx(
                "fixed z-50",
                "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
                "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                "bg-white",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              <AlertDialogPrimitive.Title className="text-4xl font-semibold text-red-400 text-center">
                Caution!
              </AlertDialogPrimitive.Title>
              <AlertDialogPrimitive.Description className="mt-4 font-normal text-gray-700 text-center">
                Sebelum melanjutkan ke proses pembayaran, harap untuk memeriksa
                kembali setiap data yang Anda input dan memastikan semuanya
                telah sesuai.
              </AlertDialogPrimitive.Description>
              <AlertDialogPrimitive.Cancel
                className={clsx("absolute z-40 top-2 right-0")}
              >
                <Cross1Icon />
              </AlertDialogPrimitive.Cancel>
              <AlertDialogPrimitive.Action
                className={clsx("btn-primary w-full mt-6 mb-2")}
                onClick={() => {
                  setStep("bayar");
                  setLine(line + 1);
                  window.scrollTo(0, 0);
                }}
              >
                Seluruh data telah sesuai
              </AlertDialogPrimitive.Action>
            </AlertDialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
