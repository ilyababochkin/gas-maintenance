import { FaCheck, FaUsers, FaShieldAlt, FaClock } from 'react-icons/fa';

const Advantages = () => {
  const items = [
    { icon: <FaUsers />, title: "Свои мастера", desc: "Не подрядчики. Штатные специалисты с опытом от 5 лет." },
    { icon: <FaShieldAlt />, title: "Гарантия", desc: "На все работы и запчасти — 12 месяцев." },
    { icon: <FaClock />, title: "Оперативность", desc: "Выезд на объект в течение 24 часов после заявки." },
    { icon: <FaCheck />, title: "Прозрачность", desc: "Фиксированная смета до начала работ. Без скрытых платежей." },
  ];

  return (
    <section id="advantages" className="py-16 md:py-24 px-4 bg-brand-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black mb-10 text-brand-navy uppercase text-center">
          Почему выбирают нас
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-6 text-center">
              <div className="text-4xl text-brand-blue mb-4 flex justify-center">{item.icon}</div>
              <h3 className="font-black text-lg text-brand-navy uppercase mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;