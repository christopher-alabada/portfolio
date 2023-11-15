import Navigation from "./Navigation";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-headerBg border-b border-b-zinc-400 lg:border-b-zinc-500 fixed top-0 left-0 right-0">
      <div className="container mx-auto w-4/5 xl:w-3/5 flex justify-between h-[90px] items-center">
        <h1 className="font-title font-bold italic text-reddish leading-5 text-2xl md:max-lg:text-3xl lg:text-4xl">
          <Link href="/" className="hover:no-underline">
            Christopher Alabada
          </Link>
        </h1>
        <Navigation />
      </div>
    </div>
  );
}
