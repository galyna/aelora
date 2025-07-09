import Link from "next/link";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";
import { siteConfig } from "../lib/config";

export default function Footer() {
  return (
    <footer className="bg-graphite text-white py-12">
      <div className="max-w-screen-xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-14">
        {/* Column 1 — logo & motto */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-3xl font-serif">{siteConfig.name}</h3>
          <p className=" text-lg leading-relaxed text-center md:text-left w-full">
            Elevate your body, embrace your glow.
          </p>
        </div>

        {/* Column 2 — navigation links */}
        <nav className="flex flex-col items-center md:items-start space-y-6 text-lg text-center md:text-left">
          <Link href="#skin" className="hover:text-gray-300 transition">
            Skin Care
          </Link>
          <Link href="#hands" className="hover:text-gray-300 transition">
            Hand & Body
          </Link>
          <Link href="#subscribe" className="hover:text-gray-300 transition">
            Subscribe
          </Link>
        </nav>

        {/* Column 3 — social icons & copyright */}
        <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left">
          <div className="flex justify-center md:justify-start space-x-6 text-2xl">
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaInstagram />
            </a>
            <a
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="hover:text-gray-300 transition"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. Made with care in Ukraine.
          </p>
        </div>
      </div>
    </footer>
  );
}
