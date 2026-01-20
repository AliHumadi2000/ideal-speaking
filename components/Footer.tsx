
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Ideal<span className="text-blue-500">Speaking</span>
            </span>
            <p className="mt-6 text-slate-400 text-sm leading-relaxed">
              Empowering global citizens to express themselves through the universal language of English. Professional, accessible, and results-driven.
            </p>
            <div className="mt-8 flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                <a key={social} href="#" className="text-slate-400 hover:text-white transition-colors">
                  <i className={`fab fa-${social} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#classes" className="hover:text-blue-400 transition-colors">Our Classes</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Our Story</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Free Learning Modules</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Student Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Teacher Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Get weekly tips on speaking better English.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2024 IdealSpeaking Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
