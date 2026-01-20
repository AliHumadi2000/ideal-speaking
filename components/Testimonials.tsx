
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'Marketing Executive',
      text: 'IdealSpeaking changed my career path. I was always nervous in international meetings, but after 3 months, I could present with total confidence.',
      image: 'https://i.pravatar.cc/150?u=sarah'
    },
    {
      name: 'Marco Rossi',
      role: 'Engineering Student',
      text: 'The flexibility is what I needed most. Being able to book classes at 9 PM after my university lectures was a lifesaver.',
      image: 'https://i.pravatar.cc/150?u=marco'
    },
    {
      name: 'Yuki Tanaka',
      role: 'Parent of 8-year-old',
      text: 'My daughter actually looks forward to her English lessons. The kids program is so engaging and fun for her!',
      image: 'https://i.pravatar.cc/150?u=yuki'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-400 font-bold tracking-wide uppercase text-sm">Testimonials</h2>
        <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
          Loved by learners worldwide
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-colors">
            <div className="flex items-center space-x-1 text-yellow-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-sm"></i>
              ))}
            </div>
            <p className="text-slate-300 italic mb-8 leading-relaxed">"{review.text}"</p>
            <div className="flex items-center">
              <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full border-2 border-blue-500" />
              <div className="ml-4">
                <h4 className="font-bold text-white">{review.name}</h4>
                <p className="text-xs text-slate-400">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
