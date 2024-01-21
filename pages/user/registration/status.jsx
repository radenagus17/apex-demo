import Layout from "@/components/Layout";
import object from "@/assets/Object.png";
import Image from "next/image";
import IconStatus from "@/assets/statusIcon.png";
import { UserContext } from "@/context/UserContext";
import { useContext, useEffect } from "react";
import StepLine from "@/components/registration/StepLine";
import HeaderReg from "@/components/registration/Header";

export default function StatusPembayaran() {
  const { state } = useContext(UserContext);
  const { line, step, setStep, setLine } = state;
  // console.log(line, step);
  // useEffect(() => {
  //   setLine(5);
  //   setStep("status_payment");
  // }, []);
  return (
    <Layout>
      <div className="flex px-5 pt-24 lg:px-0 lg:pt-0">
        <div className="bg-primary max-h-min hidden lg:block">
          <div className="min-w-[38rem] relative flex justify-center items-center h-full overflow-hidden">
            <div className="absolute animate-[upDown_2s_ease-in-out_infinite]">
              <Image src={object} alt="union" />
            </div>
            <div className="absolute translate-y-[17vw] max-w-md text-center flex-col flex gap-2 text-white">
              <h1 className=" text-4xl font-bold">Ready for Psycho test?</h1>
              <p className="max-w-sm">
                Silahkan lengkapi formulir dan mulai tes psikologi kamu sekarang
                juga!
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-lg lg:max-w-xl mx-auto pt-0 lg:pt-20">
          <div className="h-full flex items-center">
            <div className="flex-col w-full text-center">
              <div className="block lg:hidden">
                <h1 className="h1-registration mb-2">Ready for Psycho test?</h1>
                <p className="text-gray-400/90">
                  Silahkan lengkapi formulir dan mulai tes psikologi kamu
                  sekarang juga!
                </p>
              </div>
              <StepLine line={line} />
              <HeaderReg step={step} />
              <p className="text-center max-w-[18rem] lg:max-w-sm mt-6 mx-auto text-gray-400/90">
                Silahkan melakukan pembayaran secara cash ke loket administrasi
                &nbsp;
                <span className="font-semibold">sebelum 4 jam :</span>
              </p>
              <div className="flex flex-col items-center relative">
                <div className="translate-x-5">
                  <Image src={IconStatus} alt="status" />
                </div>
                <h3 className="absolute bottom-5 text-3xl font-semibold text-attention drop-shadow-md w-full">
                  Dalam proses
                </h3>
              </div>
              <div className="flex flex-col lg:flex-row justify-between gap-3 text-left pt-5">
                <div className="space-y-1">
                  <b>No. Pembayaran</b>
                  <p className="text-gray-400/90">123456789</p>
                </div>
                <div className="space-y-1">
                  <b>Total Biaya</b>
                  <p className="text-gray-400/90">Rp 100.000</p>
                </div>
              </div>
              <ul className="py-5 pl-9 pr-5 space-y-3 text-sm lg:text-base bg-gray-200/90 rounded-xl list-disc text-black/30 text-left my-7">
                <li>
                  Pastikan memberikan uang yang pas sesuai dengan total biaya
                  yang tercantum diatas
                </li>
                <li>
                  Lakukan pembayaran <b>sebelum 4 jam</b>, jika melewati batas
                  waktu maka diharuskan melakukan registrasi ulang.
                </li>
              </ul>
              <button
                className="btn-primary disabled:bg-gray-300 disabled:shadow-none w-full lg:my-5 my-3"
                disabled
              >
                Laksanakan Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
