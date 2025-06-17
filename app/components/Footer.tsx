import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";
import { siteConfig } from "../lib/config";

export default function Footer() {
  return (
    <footer className="py-8 text-center flex flex-col items-center gap-2 bg-graphite text-white">
  
      <div className="space-y-6">
        {/* Логотип или название */}
        <h3 className="text-xl font-serif">{siteConfig.name}</h3>

        {/* Социальные иконки */}
        <div className="flex justify-center space-x-6  text-lg">
          <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-graphite transition">
            <FaInstagram />
          </a>
          <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-graphite transition">
            <FaFacebookF />
          </a>
          <a href={`mailto:${siteConfig.links.email}`} className="hover:text-graphite transition">
            <FaEnvelope />
          </a>
        </div>

        {/* Подпись */}
        <p className="text-sm">
          © {new Date().getFullYear()} {siteConfig.name}. Made with care in Ukraine.
        </p>
      </div>
    </footer>
  );
}
