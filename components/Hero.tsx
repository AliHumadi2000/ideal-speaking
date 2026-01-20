
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#fdfcfa' }}>
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #c9a961 0%, transparent 70%)' }}></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #c9a961 0%, transparent 70%)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
            {/* Personal Badge */}
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold leading-5 mb-6" style={{ backgroundColor: '#f9f6f1', color: '#c9a961', border: '1px solid #e8d4a8' }}>
              <i className="fas fa-star mr-2"></i>
              Personal English Coaching
            </span>
            
            {/* Main Heading - with Serif Font */}
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="block" style={{ color: '#2c2416' }}>Master English with</span>
              <span className="block gradient-text mt-2">a Personal Touch</span>
            </h1>
            
            {/* Description */}
            <p className="mt-6 text-base sm:text-xl lg:text-lg xl:text-xl leading-relaxed" style={{ color: '#6b6555' }}>
              Experience tailored one-on-one English coaching designed around your unique goals. 
              Whether you're preparing for exams, advancing your career, or building everyday confidence, 
              I'll guide you every step of the way.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              <button className="flex items-center justify-center px-8 py-4 border-none text-base font-bold rounded-xl text-white md:text-lg transition-all shadow-lg" style={{ backgroundColor: '#2c2416' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4a3f2e'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2c2416'}>
                Schedule Your Free Call
              </button>
              <button className="mt-3 sm:mt-0 flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl md:text-lg transition-all" style={{ backgroundColor: 'white', color: '#2c2416', border: '2px solid #c9a961' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9f6f1'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                View My Approach
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-8" style={{ color: '#6b6555' }}>
              <div className="flex items-center">
                <i className="fas fa-certificate mr-2" style={{ color: '#c9a961' }}></i>
                <span className="text-sm font-medium">12+ Years Teaching</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-user-check mr-2" style={{ color: '#c9a961' }}></i>
                <span className="text-sm font-medium">100% Personalized</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-5 relative">
            <div className="relative mx-auto w-full rounded-3xl overflow-hidden group" style={{ boxShadow: '0 16px 48px rgba(44, 36, 22, 0.16)' }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Professional English Teacher"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Floating Info Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl flex items-center gap-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}>
                <div className="p-3 rounded-full" style={{ backgroundColor: '#f9f6f1' }}>
                  <i className="fas fa-comment-dots" style={{ color: '#c9a961', fontSize: '1.25rem' }}></i>
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: '#2c2416' }}>Let's Start Your Journey</p>
                  <p className="text-xs" style={{ color: '#6b6555' }}>Book a complimentary consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
