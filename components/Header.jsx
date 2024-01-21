import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Logoapx.png";

export default function Header() {
  return (
    <header className="w-full fixed inset-x-0 flex justify-between py-[10px] lg:bg-transparent bg-primary mt-0 lg:mt-5 px-5 xl:px-10 z-50 shadow-md xl:shadow-none">
      <Link href="/" className="inline-block cursor-pointer pt-3 lg:pt-2">
        {/* logo */}
        <Image src={logo} alt="logo" className="drop-shadow-sm lg:w-24 w-16" />
      </Link>
      {/* nav */}
      <div className="p-1 rounded-lg bg-white text-xs lg:text-sm invisible">
        {/* button masuk */}
        <button className="btn-primary">masuk</button>
        {/* button daftar */}
        <button className="btn-default">daftar</button>
      </div>
    </header>
  );
}
