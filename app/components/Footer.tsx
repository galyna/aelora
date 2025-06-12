import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 text-center flex flex-col items-center gap-2 bg-graphite text-white">
  
      <div className="space-y-6">
        {/* Логотип или название */}
        <h3 className="text-xl font-serif">Aelora</h3>

        {/* Социальные иконки */}
        <div className="flex justify-center space-x-6  text-lg">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-graphite transition">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-graphite transition">
            <FaFacebookF />
          </a>
          <a href="mailto:hello@aelora.com" className="hover:text-graphite transition">
            <FaEnvelope />
          </a>
        </div>

        {/* Подпись */}
        <p className="text-sm">
          © {new Date().getFullYear()} Aelora. Made with care in Ukraine.
        </p>
      </div>
    </footer>
  );
}
