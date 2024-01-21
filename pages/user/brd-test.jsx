import { Inter } from "next/font/google";
import Image from "next/image";
import brdEx1 from "@/assets/brd/brdEx1.png";
import brdEx2 from "@/assets/brd/brdEx2.png";
import brdEx3 from "@/assets/brd/brdEx3.png";
import brdEx4 from "@/assets/brd/brdEx4.png";
import brdEx5 from "@/assets/brd/brdEx5.png";
import brdEx6 from "@/assets/brd/brdEx6.png";
import brdEx7 from "@/assets/brd/brdEx7.png";
import brdEx8 from "@/assets/brd/brdEx8.png";
import brdEx9 from "@/assets/brd/brdEx9.png";
import brdEx10 from "@/assets/brd/brdEx10.png";
import brdEx11 from "@/assets/brd/brdEx11.png";
import brdEx12 from "@/assets/brd/brdEx12.png";
import Sidebar from "@/components/component_test/Sidebar";
import MHeader from "@/components/component_test/MHeader";
import Petunjuk from "@/components/component_test/modal/Petunjuk";
import ButtonLockTestAlert from "@/components/component_test/ButtonLockTestAlert";
import { useEffect, useState } from "react";
// import { useMediaQuery } from "react-responsive";

const inter = Inter({
  subsets: ["latin"],
});

const data = {
  row_1: [
    {
      image: brdEx1,
      code: "A1",
    },
    {
      image: brdEx2,
      code: "A2",
    },
  ],
  row_2: [
    {
      image: brdEx3,
      code: "B1",
    },
    {
      image: brdEx4,
      code: "B2",
    },
  ],
};

export default function BRDTest() {
  // const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });
  // console.log(isBigScreen);
  const unfocusCode = "p-3 cursor-pointer border rounded-md transition";
  const focusCode = `${unfocusCode} border-green-300`;

  const [row_1, setRow_1] = useState([]);

  // console.log(row_1);

  return (
    <div className={`min-h-screen flex-col ${inter.className}`}>
      <section className="flex">
        {/* sidebar */}
        <Sidebar />
        {/* modal */}
        <Petunjuk />
        <div className="flex-1 flex flex-col lg:pl-56 pl-0">
          {/* header mobile */}
          <MHeader />
          <div className="pt-7 lg:px-9 pb-5 px-3 text-center lg:text-left">
            <h1 className="lg:text-3xl text-2xl font-bold">Soal</h1>
            <div className="flex justify-between mb-4">
              <p>Pilihlah kelompok yang memiliki jumlah sebanyak 4 titik!!</p>
              <p className="hidden lg:block">1 / 2</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              {/* example test grid */}
              <b>Contoh</b>
              <div
                className={`border-b py-4 grid grid-cols-6 text-left gap-1 lg:grid-cols-20`}
              >
                {data.row_1.map(({ image, code }, idx) => (
                  <div
                    key={idx}
                    className={row_1.includes(code) ? focusCode : unfocusCode}
                    onClick={() =>
                      row_1.includes(code)
                        ? setRow_1((prev) => prev.filter((el) => el !== code))
                        : setRow_1([...row_1, code])
                    }
                  >
                    {/* <input type="radio" /> */}
                    <Image src={image} alt="exBrd" />
                  </div>
                ))}
                {/*!! row 1 example !!*/}
              </div>
              {/* real test grid */}
              <div className="py-4">dicoba</div>
              <ButtonLockTestAlert />
              {/* <button className="btn-primary w-full mb-3 lg:max-w-sm">
                Test selanjutnya
              </button> */}
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
