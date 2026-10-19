import { useState } from 'react';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white text-brand-navy border-b-4 border-brand-navy">
      <div className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4">
        
        <div className="flex items-center gap-3">
          <img src={logo} alt="Автономные технологии" className="h-10 md:h-12 w-auto object-contain" />
          <span className="font-black text-xs md:text-sm hidden sm:block uppercase tracking-wider leading-tight">
            Сервисный<br/>центр
          </span>
        </div>

        <nav className="hidden md:flex gap-6 lg:gap-8 text-sm font-black uppercase tracking-widest">
          <a href="#services" className="hover:text-brand-blue transition">Услуги</a>
          <a href="#calculator" className="hover:text-brand-blue transition">Стоимость</a>
          <a href="#advantages" className="hover:text-brand-blue transition">Преимущества</a>
          <a href="#faq" className="hover:text-brand-blue transition">Вопросы</a>
        </nav>

        <div className="hidden md:flex items-center gap-2 font-black">
          <FiPhone className="text-brand-blue" />
          <span>+7 (905) 321-22-21</span>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Меню"
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-brand-navy text-white ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col py-4">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 font-black uppercase hover:bg-brand-blue transition">Услуги</a>
          <a href="#calculator" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 font-black uppercase hover:bg-brand-blue transition">Стоимость</a>
          <a href="#advantages" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 font-black uppercase hover:bg-brand-blue transition">Преимущества</a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 font-black uppercase hover:bg-brand-blue transition">Вопросы</a>
          <a href="tel:+74956424186" className="px-6 py-4 font-black flex items-center gap-2 border-t border-white/20 mt-2">
            <FiPhone className="text-brand-blue" />
            <span>+7 (905) 321-22-21</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;