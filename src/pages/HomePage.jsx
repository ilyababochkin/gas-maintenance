import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Calculator from '../components/Calculator';
import Advantages from '../components/Advantages';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Calculator />
        <Advantages />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;