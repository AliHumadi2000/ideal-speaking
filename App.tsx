
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Classes from './components/Classes';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isScrolled={isScrolled} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="classes" className="py-20 bg-white">
          <Classes />
        </section>
        
        <section id="features" className="py-20 bg-slate-50">
          <WhyChooseUs />
        </section>

     

        <section id="contact" className="py-20 bg-slate-50">
          <ContactUs />
        </section>

        <div className="bg-indigo-600 py-12 px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl font-medium text-white italic leading-relaxed">
                    "At IdealSpeaking, we believe everyone can speak English with confidence. 
                    Start your journey with us and make English a part of your success."
                </p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
