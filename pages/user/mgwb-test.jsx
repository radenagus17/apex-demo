import Image from "next/image";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
// font
import { Inter } from "next/font/google";
// components
import { UserContext } from "@/context/UserContext";
import ButtonLockTestAlert from "@/components/component_test/ButtonLockTestAlert";
import MHeader from "@/components/component_test/MHeader";
import Sidebar from "@/components/component_test/Sidebar";
import ImageRows from "@/components/component_test/ImageRows";
// img
import mgwbEx1 from "@/assets/mgwb/mgwbEx1.png";
import mgwbEx2 from "@/assets/mgwb/mgwbEx2.png";
// icon
import { CheckIcon } from "@radix-ui/react-icons";

const inter = Inter({
  subsets: ["latin"],
});

export default function MgwbTest() {
  const { handleFunction } = useContext(UserContext);
  const { handleStart } = handleFunction;
  const router = useRouter();

  useEffect(() => {
    handleStart();
  }, []);

  useEffect(() => {
    const blockNavigation = () => {
      router.beforePopState(() => {
        window.alert("you cant get back!");
        router.push("/user/mgwb-test");
      });
    };

    const unblockNavigation = () => {
      router.beforePopState(() => {});
      window.onbeforeunload = null;
    };

    blockNavigation();

    return () => {
      unblockNavigation();
    };
  }, [router]);

  return (
    <div className={`min-h-screen flex-col ${inter.className}`}>
      <section className="flex">
        {/* sidebar */}
        <Sidebar />
        <div className="flex-1 flex flex-col lg:pl-56 pl-0">
          {/* header mobile */}
          <MHeader />
          <div className="pt-7 lg:px-9 pb-5 px-3 text-center lg:text-left">
            <h1 className="lg:text-3xl text-2xl font-bold">Soal</h1>
            <div className="flex justify-between mb-4">
              <p>
                Temukan bagian yang tidak sempurna dari gambar - gambar di bawah
                ini!!
              </p>
              <p className="hidden lg:block">2 / 2</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              {/* example test grid */}
              <b>Contoh</b>
              <div
                className={`border-b py-4 grid lg:grid-cols-2 grid-cols-1 text-left place-items-center lg:px-52 px-0 gap-y-2 lg:gap-y-0`}
              >
                <div className="max-h-[14rem] flex items-center relative">
                  <Image src={mgwbEx1} alt="img" />
                  <div className="grid grid-cols-3 absolute inset-0">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-white bg-primary rounded-full" />
                    </span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="max-h-[14rem] flex lg:items-start items-center relative">
                  <Image src={mgwbEx2} alt="img" />
                  <div className="grid grid-cols-4 absolute inset-0">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="relative">
                      <CheckIcon className="w-4 h-4 text-white bg-primary rounded-full absolute left-0 lg:top-8 top-0" />
                    </span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              {/* real test grid */}
              <div className="py-10 grid lg:grid-cols-4 grid-cols-1 text-left place-items-center gap-y-10">
                <ImageRows />
              </div>
              <ButtonLockTestAlert />
            </div>
          </div>
          {/* footer */}
          <footer className="text-center text-sm text-gray-meta">
            © 2023 Devta.id, All rights reserved.
          </footer>
        </div>
      </section>
    </div>
  );
}
