
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: 'Flexible Online Classes',
      description: 'Learn anytime, anywhere with schedules that fit your dynamic lifestyle and time zone.',
      icon: 'fa-calendar-alt',
    },
    {
      title: 'Affordable Pricing',
      description: 'High-quality English education at reasonable prices that deliver real value for your future.',
      icon: 'fa-tags',
    },
    {
      title: 'Certified Teachers',
      description: 'Learn from experienced and qualified English instructors who specialize in online pedagogy.',
      icon: 'fa-graduation-cap',
    },
    {
      title: 'Free Learning Modules',
      description: 'Structured study materials and interactive resources available at no extra cost.',
      icon: 'fa-book-open',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:flex lg:items-center lg:gap-16">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm">Why IdealSpeaking</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Education that fits your world
          </p>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            We've built a platform that removes the barriers to language learning. Combining expert instruction with modern technology, we ensure your progress is steady and enjoyable.
          </p>
          <div className="mt-8 space-y-4">
             <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center text-white shrink-0">
                    <i className="fas fa-users"></i>
                </div>
                <div className="ml-4">
                    <h4 className="font-bold text-slate-900">10,000+ Satisfied Students</h4>
                    <p className="text-sm text-slate-500">Across 35 countries worldwide</p>
                </div>
             </div>
             <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-indigo-600 h-10 w-10 rounded-full flex items-center justify-center text-white shrink-0">
                    <i className="fas fa-video"></i>
                </div>
                <div className="ml-4">
                    <h4 className="font-bold text-slate-900">Interactive Video Platform</h4>
                    <p className="text-sm text-slate-500">High-definition interactive lessons</p>
                </div>
             </div>
          </div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl text-blue-600 mb-5">
                <i className={`fas ${benefit.icon} text-2xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
