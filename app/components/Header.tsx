import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="relative">
          <img
              src="/printforge-logo 1.png"
              alt="Logo"
              className="w-[200px] h-auto hidden md:block"
            />
            <img src="/Artboard1.png" alt="Logo" className="w-[40px] h-auto block md:hidden" />
        
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
