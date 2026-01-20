
import React from 'react';

const Classes: React.FC = () => {
  const courses = [
    {
      title: 'English for Kids',
      description: 'Fun, interactive lessons building confidence and basic communication skills from an early age.',
      icon: 'fa-child-reaching',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'General English',
      description: 'Improve speaking, listening, reading, and writing for daily communication and fluency.',
      icon: 'fa-comments',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'English for Business',
      description: 'Develop professional English skills for meetings, presentations, and workplace communication.',
      icon: 'fa-briefcase',
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm">Our Programs</h2>
        <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Curriculum Tailored to Your Goals
        </p>
        <div className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
          From toddlers starting their journey to professionals aiming for global markets, we have the right path for you.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div key={idx} className="group flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="p-8 flex-grow">
              <div className={`w-12 h-12 ${course.color} rounded-2xl flex items-center justify-center mb-6`}>
                <i className={`fas ${course.icon} ${course.iconColor} text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{course.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-6">{course.description}</p>
              <button className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                Explore Course <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
