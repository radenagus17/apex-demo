import { useRouter } from "next/router";
import { DownloadIcon } from "@radix-ui/react-icons";
export default function MHeader() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <header className="flex justify-between container py-4 text-white bg-primary items-center lg:hidden shadow-md">
      <div className="text-sm">
        <h4>Sisa waktu</h4>
        {pathname.includes("/result-test") ? <b>00 : 00</b> : <b>02 : 30</b>}
      </div>
      <h1
        className={`${
          pathname.includes("/mgwb-test") ? "w-40" : "w-32"
        } text-2xl font-semibold`}
      >{`${
        pathname.includes("/result-test")
          ? "Hasil Test"
          : pathname.includes("/mgwb-test")
          ? "M.G.W.B Test"
          : "BRD Test"
      }`}</h1>
      {pathname.includes("/result-test") ? (
        <span className="cursor-pointer">
          <DownloadIcon className="w-7 h-7" />
        </span>
      ) : pathname.includes("/mgwb-test") ? (
        <p>2 / 2</p>
      ) : (
        <p>1 / 2</p>
      )}
    </header>
  );
}
