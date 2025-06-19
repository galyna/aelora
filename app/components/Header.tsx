import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky xl:relative top-0 z-50 bg-background transition-colors duration-300 w-full">
      <div className="max-w-full px-8 py-4 lg:py-8 flex justify-between place-items-baseline  xl:mx-20">
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
        {/* Мобильное меню */}
        <MobileMenu />
      </div>
    </header>
  );
}
