
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative mb-12 lg:mb-0">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400" 
              className="rounded-3xl shadow-lg w-full h-64 object-cover mt-8" 
              alt="Diverse learners" 
            />
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" 
              className="rounded-3xl shadow-lg w-full h-64 object-cover" 
              alt="People talking" 
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-6 rounded-3xl shadow-2xl hidden md:block">
            <p className="text-4xl font-bold">12+</p>
            <p className="text-xs uppercase font-bold tracking-widest opacity-80">Years Experience</p>
          </div>
        </div>

        <div>
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm">Our Story</h2>
          <h3 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Driven by excellence, <br/>Defined by results.
          </h3>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Founded with a vision to democratize high-quality English education, IdealSpeaking has grown from a small group of passionate tutors to a global community of thousands. 
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Our methodology isn't just about grammar—it's about connection. We focus on the psychology of learning, helping students overcome their fear of making mistakes so they can communicate with raw, authentic confidence in any environment.
          </p>
          
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <p className="text-3xl font-bold text-blue-600">98%</p>
              <p className="text-sm font-medium text-slate-500">Student Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">500+</p>
              <p className="text-sm font-medium text-slate-500">Expert Instructors</p>
            </div>
          </div>

          <button className="mt-10 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center">
            Learn More About Our Methodology <i className="fas fa-chevron-right ml-3 text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
