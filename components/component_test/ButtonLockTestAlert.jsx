import { Transition } from "@headlessui/react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { clsx } from "clsx";
import { Cross1Icon } from "@radix-ui/react-icons";
import React, { Fragment, useState, useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
export default function ButtonLockTestAlert() {
  let [isOpen, setIsOpen] = useState(false);
  const { handleFunction } = useContext(UserContext);
  const { mgwbResult } = handleFunction;
  const router = useRouter();
  const { pathname } = router;
  return (
    <AlertDialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogPrimitive.Trigger asChild>
        <button
          type="button"
          className="btn-primary w-full lg:max-w-sm normal-case"
        >
          {`${
            pathname.includes("/mgwb-test")
              ? "Selesai & lihat hasil test"
              : "Test selanjutnya"
          }`}
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
                Kunci jawaban?
              </AlertDialogPrimitive.Title>
              <AlertDialogPrimitive.Description className="mt-4 font-normal text-gray-700 text-center">
                {`${
                  pathname.includes("/mgwb-test")
                    ? "Setelah menekan tombol di bawah jawaban anda akan dikunci dan akan menampilakan hasil test!!"
                    : `Setelah menekan tombol di bawah jawaban anda akan dikunci dan
                anda akan melanjutkan ke test kedua serta tidak dapat kembali
                lagi ke test ini!`
                } `}
              </AlertDialogPrimitive.Description>
              <AlertDialogPrimitive.Cancel
                className={clsx("absolute z-40 top-2 right-0")}
              >
                <Cross1Icon />
              </AlertDialogPrimitive.Cancel>
              <AlertDialogPrimitive.Action
                className={clsx("btn-primary w-full mt-6 mb-2 normal-case")}
                onClick={(e) => {
                  pathname.includes("/result-test")
                    ? mgwbResult()
                    : pathname.includes("/mgwb-test")
                    ? router.push("/user/result-test")
                    : router.push("/user/mgwb-test");
                  window.scrollTo(0, 0);
                }}
              >
                {`${
                  pathname.includes("/mgwb-test")
                    ? "Lihat hasil test"
                    : "Kerjakan test kedua (M.G.W.B)"
                }`}
              </AlertDialogPrimitive.Action>
            </AlertDialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
