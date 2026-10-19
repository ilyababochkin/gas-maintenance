import { FaCheck } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative pt-16 md:pt-32 pb-16 md:pb-24 px-4 bg-brand-navy text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue opacity-20 skew-x-12 transform origin-top-right"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="inline-block bg-brand-blue text-white font-black uppercase tracking-wider text-xs md:text-sm px-3 py-1 mb-4">
          Сервисный центр
        </div>
        <h1 className="text-3xl md:text-6xl font-black uppercase leading-[1.05] mb-6 max-w-3xl">
          Обслуживание <span className="text-brand-blue">газгольдера</span> под ключ
        </h1>
        <p className="text-gray-300 text-base md:text-xl mb-10 font-medium max-w-2xl">
          Плановое ТО, заправка, ремонт и аварийный выезд. Работаем по Москве и области. Гарантия на все работы — 1 год.
        </p>
        <div className="flex flex-wrap gap-6 text-sm md:text-base font-bold mb-10">
          <span className="flex items-center gap-2"><FaCheck className="text-brand-blue" /> Выезд за 24 часа</span>
          <span className="flex items-center gap-2"><FaCheck className="text-brand-blue" /> Официальный договор</span>
          <span className="flex items-center gap-2"><FaCheck className="text-brand-blue" /> Свои специалисты</span>
          <span className="flex items-center gap-2"><FaCheck className="text-brand-blue" /> Гарантия 12 мес.</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#calculator" className="bg-brand-blue text-white px-8 py-4 font-black uppercase tracking-wider text-center hover:bg-white hover:text-brand-navy transition-colors">
            Рассчитать стоимость
          </a>
          <a href="tel:+74956424186" className="bg-transparent border-2 border-white text-white px-8 py-4 font-black uppercase tracking-wider text-center hover:bg-white hover:text-brand-navy transition-colors">
            Позвонить
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;