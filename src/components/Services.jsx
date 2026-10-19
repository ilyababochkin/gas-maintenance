import { FaWrench, FaTruck, FaSnowflake, FaShieldAlt, FaCog, FaFileAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    { icon: <FaWrench />, title: "Плановое ТО", desc: "Проверка герметичности, редукторов, датчиков. Подготовка к отопительному сезону." },
    { icon: <FaTruck />, title: "Заправка газом", desc: "Доставка качественного сжиженного газа. Контроль объёма и безопасности." },
    { icon: <FaShieldAlt />, title: "Аварийный выезд", desc: "Оперативное устранение утечек и неисправностей 24/7." },
    { icon: <FaSnowflake />, title: "Подготовка к зиме", desc: "Комплексная диагностика системы перед холодами." },
    { icon: <FaCog />, title: "Ремонт и замена", desc: "Замена редукторов, шлангов, арматуры. Работаем с любыми брендами." },
    { icon: <FaFileAlt />, title: "Документы", desc: "Оформление актов, договоров на обслуживание и гарантийных талонов." },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-brand-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black mb-10 text-brand-navy uppercase text-center">
          Что входит в обслуживание
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 border-b-4 border-brand-blue shadow-sm hover:shadow-xl transition">
              <div className="text-4xl text-brand-blue mb-4">{s.icon}</div>
              <h3 className="font-black text-lg mb-2 text-brand-navy uppercase">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;