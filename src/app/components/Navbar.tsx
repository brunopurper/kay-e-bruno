import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#f4eee0] px-6 md:px-10 py-4 md:py-6 border-b border-2 border-gray-300">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/assets/Kayane e Bruno (1).png"
            alt="Kayane e Bruno"
            width={200}
            height={100}
            className="cursor-pointer transition-transform duration-300 hover:scale-105 drop-shadow-md w-36 md:w-48"
          />
        </Link>
      </div>
      <ul className="flex items-center text-sm">
        <li className="ml-6">
          <Link
            href="/pages/gifts"
            className="text-[#515b30] hover:text-[#3e4724] cursor-pointer transition-colors"

          >
            Lista de presentes
          </Link>
        </li>
      </ul>
    </nav>
  );
}
