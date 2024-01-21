import { useEffect, useState, useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { Cross1Icon } from "@radix-ui/react-icons";
export default function Petunjuk() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const { handleFunction } = useContext(UserContext);
  const { handleStart } = handleFunction;
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => {
        setIsModal(true);
      }, [1000]);
    }, [800]);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div
            className={`${
              isModal
                ? "block opacity-100 translate-y-0"
                : "invisible opacity-0 translate-y-10"
            } lg:min-h-[20em] min-h-[30em] lg:py-10 py-8 px-8 bg-white lg:min-w-[40em] max-w-[22rem] rounded-lg relative transition-all duration-300`}
          >
            <Cross1Icon
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 w-4 h-4 text-gray-400 cursor-pointer"
            />
            <h1 className="text-4xl text-primary text-center font-bold">
              Petunjuk mengerjakan!
            </h1>
            <ul className="my-5 list-disc space-y-3 lg:space-y-1 pl-2 lg:pl-4 text-sm lg:text-base">
              <li>
                Terdapat 2 jenis test yang akan dikerjakan (BRD & M.G.W.B)
              </li>
              <li>
                Setiap test memiliki sesi masing-masing, dan tidak dapat di
                ulang.
              </li>
              <li>
                Masing-masing test memiliki waktu pengerjaan 2,5 menit (total 5
                menit)
              </li>
              <li>
                Masing-masing test memiliki waktu pengerjaan 2,5 menit (total 5
                menit)
              </li>
              <li>
                Test akan otomatis dianggap selesai ketika waktu yang ditentukan
                habis.
              </li>
              <li>
                Silahkan menekan tombol di bawah jika telah siap mengerjakan
                test
              </li>
              <li>
                Dilarang keras melakukan kecurangan & menyebarkan soal test
              </li>
            </ul>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                handleStart();
              }}
              className="btn-primary w-full"
            >
              Kerjakan test sekarang!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
