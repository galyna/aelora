import Link from "next/link";


export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      {/* Логотип или название */}
      <Link href="/" className="text-xl md:text-2xl font-serif text-graphite tracking-wide">
        AELORA
      </Link>

        {/* Навигация — можно оставить один элемент или скрыть */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-700 uppercase tracking-wide">
          <Link href="#about" className="hover:text-graphite transition">About</Link>
          <Link href="#products" className="hover:text-graphite transition">Products</Link>
          <Link href="#subscribe" className="hover:text-graphite transition">Subscribe</Link>
        </nav>
      </div>
    </header>
  );
}
