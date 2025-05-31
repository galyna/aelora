import Link from "next/link";
import Image from "next/image";
import printforgeLogo from "@/public/printforge-logo-1.png";
import artboard1 from "@/public/Artboard1.png";
export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="relative">
            <Image
              src={printforgeLogo}
              alt="Logo"
              className="w-[200px] h-auto hidden md:block"
            ></Image>
            <Image
              src={artboard1}
              alt="Logo"
              className="w-[40px] h-auto block md:hidden"
            />
          </div>
          <ul className="flex space-x-10">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
