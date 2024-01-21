import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { clsx } from "clsx";
// font
import { Inter } from "next/font/google";
// components
import Sidebar from "@/components/component_test/Sidebar";
import MHeader from "@/components/component_test/MHeader";
// icon
import { DownloadIcon } from "@radix-ui/react-icons";

const inter = Inter({
  subsets: ["latin"],
});

export default function ResultTest() {
  return (
    <div className={`min-h-screen flex-col ${inter.className}`}>
      <section className="flex">
        {/* sidebar */}
        <Sidebar />
        <div className="flex-1 flex flex-col lg:ml-[16rem] ml-0 max-w-[1190px] lg:mt-[1.4rem] mt-0 mb-2 bg-white lg:py-7 py-0 rounded-lg shadow-lg min-h-[48rem] relative">
          {/* header mobile */}
          <MHeader />
          <HoverCardPrimitive.Root>
            <HoverCardPrimitive.Trigger asChild>
              <div
                className={clsx(
                  "absolute top-4 right-5 lg:inline-block hidden cursor-pointer"
                )}
              >
                <DownloadIcon className="text-primary w-7 h-7 font-bold" />
              </div>
            </HoverCardPrimitive.Trigger>
            <HoverCardPrimitive.Content
              align="center"
              sideOffset={4}
              className={clsx(
                "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
                "max-w-md rounded-lg p-4 md:w-full",
                "bg-gray-100 -translate-x-8",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              <HoverCardPrimitive.Arrow className="fill-current -translate-x-8 text-gray-100" />

              <div className="flex h-full w-full space-x-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-400 capitalize">
                    print out disini!!
                  </h3>
                </div>
              </div>
            </HoverCardPrimitive.Content>
          </HoverCardPrimitive.Root>
          {/* <div className="absolute top-0 right-0 lg:block hidden">
            <DownloadIcon className="text-primary w-7 h-7" />
          </div> */}
          <div className="pt-20 lg:pt-0 pb-5 lg:pb-0 text-center max-w-[20rem] lg:max-w-full m-auto">
            <h1 className="lg:text-4xl text-2xl font-bold">Hasil Test</h1>
            <span className="text-9xl font-bold my-2 inline-block">C</span>
            <p className="text-3xl font-bold">
              Selamat, Anda Memenuhi Syarat!!
            </p>
            <p className="text-gray-400/90 max-w-[19rem] mx-auto mt-3">
              Hasil test psikologi ini hanya dapat dipakai sesuai tujuan test
            </p>
          </div>
          <div className="p-5">
            <h4 className="font-semibold">Aspek penilaian :</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2 lg:mt-3">
              <div className="py-4 px-6 flex rounded-xl justify-between items-center relative bg-gray-100 shadow-md">
                <div className="absolute left-0 w-3 h-full bg-orange-300 rounded-l-xl" />
                <div className="text-sm lg:text-base pl-2">
                  <p>Kemampuan Konsentrasi</p>
                  <p className="text-gray-400/90">Cukup</p>
                </div>
                <b className="text-4xl">C</b>
              </div>
              <div className="py-4 px-6 flex rounded-xl justify-between items-center relative bg-gray-100 shadow-md">
                <div className="absolute left-0 w-3 h-full bg-purple-500 rounded-l-xl" />
                <div className="text-sm lg:text-base pl-2">
                  <p>Kecermatan</p>
                  <p className="text-gray-400/90">Cukup baik</p>
                </div>
                <b className="text-4xl">CB</b>
              </div>
              <div className="py-4 px-6 flex rounded-xl justify-between items-center relative bg-gray-100 shadow-md">
                <div className="absolute left-0 w-3 h-full bg-green-600 rounded-l-xl" />
                <div className="text-sm lg:text-base pl-2">
                  <p>Pengendalian Diri</p>
                  <p className="text-gray-400/90">Baik</p>
                </div>
                <b className="text-4xl">B</b>
              </div>
              <div className="py-4 px-6 flex rounded-xl justify-between items-center relative bg-gray-100 shadow-md">
                <div className="absolute left-0 w-3 h-full bg-green-600 rounded-l-xl" />
                <div className="text-sm lg:text-base pl-2">
                  <p>Pengendalian Diri</p>
                  <p className="text-gray-400/90">Baik</p>
                </div>
                <b className="text-4xl">B</b>
              </div>
              <div className="py-4 px-6 flex rounded-xl justify-between items-center relative bg-gray-100 shadow-md">
                <div className="absolute left-0 w-3 h-full bg-green-600 rounded-l-xl" />
                <div className="text-sm lg:text-base pl-2">
                  <p>Pengendalian Diri</p>
                  <p className="text-gray-400/90">Baik</p>
                </div>
                <b className="text-4xl">B</b>
              </div>
              <div className="py-4 px-6 flex rounded-xl justify-between items-center relative bg-gray-100 shadow-md">
                <div className="absolute left-0 w-3 h-full bg-green-600 rounded-l-xl" />
                <div className="text-sm lg:text-base pl-2">
                  <p>Pengendalian Diri</p>
                  <p className="text-gray-400/90">Baik</p>
                </div>
                <b className="text-4xl">B</b>
              </div>
            </div>
          </div>
          <div className="px-5 max-w-[50rem] mx-auto w-full flex gap-5 lg:gap-12 lg:flex-row flex-col pt-8 pb-8 lg:pb-0">
            <button className="btn-default flex-1 py-2">Keluar test</button>
            <button className="btn-primary flex-1">Download Certificate</button>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="text-center max-w-screen-xl lg:ml-[16rem] ml-0 text-sm text-gray-meta">
        © 2023 Devta.id, All rights reserved.
      </footer>
    </div>
  );
}
