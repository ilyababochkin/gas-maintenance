import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { q: "Как часто нужно проводить ТО газгольдера?", a: "Рекомендуется проводить плановое техническое обслуживание минимум один раз в год, желательно перед началом отопительного сезона." },
    { q: "Сколько стоит заправка газгольдера?", a: "Стоимость зависит от объёма газгольдера и текущих цен на сжиженный газ. Точную цену можно рассчитать в калькуляторе выше." },
    { q: "Что делать, если чувствуется запах газа?", a: "Немедленно перекройте вентиль на газгольдере, не используйте открытый огонь и электроприборы. Позвоните в аварийную службу по телефону +7 (495) 642-41-86." },
    { q: "Вы работаете с газгольдерами любых производителей?", a: "Да, мы обслуживаем газгольдеры всех популярных брендов: Оптима, Медведь, Спецгаз, Химмет и другие." },
    { q: "Даёте ли вы гарантию на работы?", a: "Да, на все виды работ и замененные запчасти мы предоставляем гарантию 12 месяцев." },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-black mb-10 text-brand-navy uppercase text-center">
        Часто задаваемые вопросы
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className={`bg-white border-2 transition-colors ${openIndex === i ? 'border-brand-blue' : 'border-brand-navy'}`}>
            <button className="flex justify-between items-center w-full text-left font-black text-base md:text-lg p-4 md:p-5" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <span className={`pr-4 ${openIndex === i ? 'text-brand-blue' : 'text-brand-navy'}`}>{faq.q}</span>
              <span className={`flex-shrink-0 ${openIndex === i ? 'text-brand-blue' : 'text-brand-navy'}`}>{openIndex === i ? <FiMinus size={22} /> : <FiPlus size={22} />}</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-brand-navy font-medium leading-relaxed px-4 md:px-5 pb-4 md:pb-5 text-sm md:text-base">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;