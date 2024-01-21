import Layout from "@/components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import object from "@/assets/Object.png";
import RiwayatHidup from "@/components/registration/RiwayatHidup";
import HeaderReg from "@/components/registration/Header";
import { useEffect, useState, useContext } from "react";
import InfoPengajuan from "@/components/registration/InfoPengajuan";
import PilihPembayaran from "@/components/registration/PilihPembayaran";
import StepLine from "@/components/registration/StepLine";
import Button from "@/components/registration/Button";
import { UserContext } from "@/context/UserContext";
import moment from "moment";

export default function Registration() {
  // const [step, setStep] = useState("riwayat");
  // const [line, setLine] = useState(1);
  const { state } = useContext(UserContext);
  const { step, setStep, line, setLine } = state;
  const [name, setName] = useState("");
  const [tempat, setTempat] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState(null);
  const [dob, setDob] = useState({
    tempat: "",
    tanggalLahir: null,
  });
  const [pelanggaran, setPelanggaran] = useState("");
  const [pembayaran, setPembayaran] = useState("");
  const [terms, setTerm] = useState(false);

  const router = useRouter();

  const sendData = {
    name,
    setName,
    tempat,
    setTempat,
    tanggalLahir,
    setTanggalLahir,
  };

  const buttonProp = {
    step,
    setStep,
    line,
    setLine,
    terms,
    setTerm,
  };

  // convert_date
  useEffect(() => {
    setDob((prev) => {
      const prevBod = { ...prev };
      prevBod["tempat"] = tempat;
      prevBod["tanggalLahir"] = moment(tanggalLahir).format("DD/MM/YYYY");
      return prevBod;
    });
  }, [tempat, tanggalLahir]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    console.log(dob);
    setStep("status_payment");
    setLine(line + 1);
    router.push("/user/registration/status");
  }
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
              <form
                onSubmit={handleSubmit}
                className="text-left py-7 flex-col gap-y-4 flex"
              >
                {step === "riwayat" ? (
                  <RiwayatHidup {...sendData} />
                ) : step === "info" ? (
                  <InfoPengajuan pl={pelanggaran} setPl={setPelanggaran} />
                ) : step === "bayar" ? (
                  <PilihPembayaran byr={pembayaran} setByr={setPembayaran} />
                ) : (
                  ""
                )}

                <Button {...buttonProp} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
