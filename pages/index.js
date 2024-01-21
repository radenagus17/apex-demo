import Layout from "@/components/Layout";
import Image from "next/image";
import union from "../assets/Union-2.png";
import union1 from "../assets/Union-3.png";
import lock from "../assets/lock.png";
import { useState } from "react";

export default function Home() {
  const [radio, setRadio] = useState("");
  return (
    <Layout>
      <div className="flex px-5 pt-24 lg:px-0 lg:pt-0">
        <div className="bg-primary bg_login max-h-min hidden lg:block">
          <div className="min-w-[38rem] relative flex items-center h-full  overflow-hidden">
            <div className="absolute w-96 h-96 rounded-full bg-tertiary/40 left-[15%] blur-2xl" />
            <div className="absolute animate-[upDown_2s_ease-in-out_infinite]">
              <Image src={lock} alt="union" />
            </div>
            <div className="absolute -bottom-3 w-[60vw] -left-12 animate-[flow_5s_ease-in-out_infinite]">
              <Image src={union} alt="union" />
            </div>
            <div className="absolute -bottom-14 w-[60vw] -left-12 animate-[flow_5s_ease-in-out_infinite]">
              <Image src={union1} alt="union1" />
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-lg mx-auto py-0 lg:py-44">
          <div className="h-full flex items-center">
            <div className="flex-col w-full text-center">
              <h1 className="h1-login mb-1">
                Welcome Back, <span className="text-primary">Admin!</span>
              </h1>
              <p>Silahkan masuk untuk mengelola tes dan mengelola pengguna</p>
              <form className="lg:py-12 py-6 text-left flex-col gap-y-4 flex">
                <div className="space-y-1">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Masukkan username"
                    className="border border-gray-400 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label>Sandi</label>
                  <input
                    type="text"
                    placeholder="Masukkan kata sandi"
                    className="border border-gray-400 outline-none"
                  />
                </div>
                {/* auth robot */}
                <div
                  className="flex gap-2 items-center max-w-[12rem] group cursor-pointer"
                  onClick={() => setRadio(!radio)}
                >
                  <div className="relative h-5 w-5 rounded-full bg-white p-2 flex items-center justify-center outline-none border border-gray-600">
                    <span
                      className={`${
                        radio
                          ? "visible rounded-full bg-blue-500 h-[13px] w-[13px] absolute"
                          : "invisible"
                      }`}
                    />
                  </div>
                  <p>Saya bukan robot</p>
                </div>
                <button
                  type="button"
                  className="btn-primary mt-24 lg:mt-9 w-full"
                >
                  Masuk sebagai admin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
