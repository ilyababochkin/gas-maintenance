import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Calculator = () => {
  const [volume, setVolume] = useState('1500');
  const [serviceType, setServiceType] = useState('to');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7 (');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const calculatePrice = () => {
    const v = parseInt(volume);
    if (serviceType === 'to') return Math.max(3000, v * 2);
    if (serviceType === 'refuel') return v * 25;
    if (serviceType === 'emergency') return 5000;
    return 0;
  };

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, '');
    if (input.startsWith('7')) input = input.substring(1);
    let formatted = '+7 (';
    if (input.length > 0) formatted += input.substring(0, 3);
    if (input.length >= 4) formatted += ') ' + input.substring(3, 6);
    if (input.length >= 7) formatted += '-' + input.substring(6, 8);
    if (input.length >= 9) formatted += '-' + input.substring(8, 10);
    setPhone(formatted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || phone.length < 18 || !isAgreed) return;
    setIsSending(true);

    const serviceName = serviceType === 'to' ? 'Плановое ТО' : serviceType === 'refuel' ? 'Заправка' : 'Аварийный выезд';

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name,
          phone,
          area: `Обслуживание: ${serviceName}, объём ${volume} л`,
          manufacturer: '—',
          distance: '—',
          installTime: '—',
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert('Ошибка отправки');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="calculator" className="py-16 md:py-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-black mb-8 text-brand-navy uppercase text-center">
        Рассчитайте стоимость
      </h2>
      
      <div className="bg-white border-2 border-brand-navy shadow-[8px_8px_0_0_#0ea5e9] p-6 md:p-8">
        {isSuccess ? (
          <div className="text-center py-10">
            <div className="text-5xl text-brand-blue mb-4">✓</div>
            <h3 className="text-2xl font-black mb-2 text-brand-navy">Заявка принята!</h3>
            <p className="text-gray-600">Мы свяжемся с вами в течение 15 минут.</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block font-black text-lg mb-2 uppercase text-brand-navy">Объём газгольдера</label>
                <select 
                  value={volume} 
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full border-2 border-brand-navy p-3 font-bold text-lg focus:outline-none focus:border-brand-blue"
                >
                  <option value="1000">1 000 л</option>
                  <option value="1500">1 500 л</option>
                  <option value="2000">2 000 л</option>
                  <option value="2700">2 700 л</option>
                  <option value="4000">4 000 л</option>
                  <option value="5000">5 000 л</option>
                </select>
              </div>
              <div>
                <label className="block font-black text-lg mb-2 uppercase text-brand-navy">Тип услуги</label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="service" value="to" checked={serviceType === 'to'} onChange={() => setServiceType('to')} className="w-5 h-5 accent-brand-blue" />
                    <span className="font-medium">Плановое ТО</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="service" value="refuel" checked={serviceType === 'refuel'} onChange={() => setServiceType('refuel')} className="w-5 h-5 accent-brand-blue" />
                    <span className="font-medium">Заправка</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="service" value="emergency" checked={serviceType === 'emergency'} onChange={() => setServiceType('emergency')} className="w-5 h-5 accent-brand-blue" />
                    <span className="font-medium">Аварийный выезд</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t-2 border-gray-200 mb-8">
              <p className="text-sm text-gray-600 uppercase font-bold mb-1">Примерная стоимость:</p>
              <p className="text-4xl font-black text-brand-navy">{calculatePrice().toLocaleString('ru-RU')} ₽</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-black text-sm mb-2 uppercase text-brand-navy">Ваше имя</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border-b-4 border-brand-navy/20 py-2 text-lg font-bold focus:outline-none focus:border-brand-blue bg-transparent text-brand-navy" required />
              </div>
              <div>
                <label className="block font-black text-sm mb-2 uppercase text-brand-navy">Ваш телефон</label>
                <div className="flex items-center gap-2 border-b-4 border-brand-navy/20 py-2 focus-within:border-brand-blue">
                  <span className="text-xl">🇷🇺</span>
                  <input type="tel" value={phone} onChange={handlePhoneChange} className="w-full text-lg font-bold focus:outline-none bg-transparent text-brand-navy" required />
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div onClick={() => setIsAgreed(!isAgreed)} className={`mt-1 w-5 h-5 border-2 flex-shrink-0 cursor-pointer flex items-center justify-center transition-colors ${isAgreed ? 'bg-brand-blue border-brand-blue' : 'border-brand-navy'}`}>
                  {isAgreed && <FaCheck size={10} className="text-white" />}
                </div>
                <p className="text-xs text-gray-500 font-medium leading-tight">НАЖИМАЯ НА КНОПКУ ВЫ ДАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ ДАННЫХ</p>
              </div>
              <button 
                type="submit" 
                disabled={!name || phone.length < 18 || !isAgreed || isSending}
                className={`w-full py-4 font-black uppercase transition ${(!name || phone.length < 18 || !isAgreed || isSending) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-brand-blue text-white hover:bg-brand-navy'}`}
              >
                {isSending ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ ЗАЯВКУ'}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Calculator;