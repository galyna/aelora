import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full z-50">
      <div className="max-w-full px-8 py-8 flex justify-between place-items-baseline  xl:mx-20">
        {/* Логотип или название */}
        <Link href="/" className="text-3xl  md:text-4xl font-serif text-graphite tracking-wide 2xl:hidden ">
          Aelora
        </Link>

        {/* Навигация — можно оставить один элемент или скрыть */}
        <nav className="hidden md:flex  2xl:justify-start space-x-10 text-xl lg:text-2xl text-graphite font-semibold">
          <Link href="#skin" className="hover:text-graphite transition">Skin Care</Link>
          <Link href="#hands" className="hover:text-graphite transition">Hand & Body</Link>
          <Link href="#subscribe" className="hover:text-graphite transition">Subscribe</Link>
        </nav>
      </div>
    </header>
  );
}
