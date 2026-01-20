
import React from 'react';

const MyServices: React.FC = () => {
    const services = [
        {
            title: 'One-on-One Coaching',
            description: 'Personalized sessions tailored to your specific needs, goals, and learning pace.',
            icon: 'fa-user-graduate',
            color: '#f9f6f1',
            iconColor: '#c9a961',
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400'
        },
        {
            title: 'Exam Preparation',
            description: 'Focused training for IELTS, TOEFL, and other English proficiency exams.',
            icon: 'fa-file-alt',
            color: '#f9f6f1',
            iconColor: '#c9a961',
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400'
        },
        {
            title: 'Business English',
            description: 'Professional communication skills for meetings, presentations, and career advancement.',
            icon: 'fa-briefcase',
            color: '#f9f6f1',
            iconColor: '#c9a961',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="font-bold tracking-wide uppercase text-sm" style={{ color: '#c9a961' }}>What I Offer</h2>
                <p className="mt-2 text-3xl font-extrabold sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2c2416' }}>
                    Learning Paths Designed Around You
                </p>
                <div className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: '#6b6555' }}>
                    Every student has unique goals. I create a customized curriculum that fits your objectives,
                    whether that's exam success, career growth, or everyday fluency.
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <div key={idx} className="group flex flex-col bg-white rounded-3xl overflow-hidden transition-all duration-300" style={{ border: '1px solid #e8d4a8', boxShadow: '0 4px 12px rgba(44, 36, 22, 0.08)' }} onMouseOver={(e) => {
                        e.currentTarget.style.boxShadow = '0 16px 48px rgba(44, 36, 22, 0.16)';
                        e.currentTarget.style.transform = 'translateY(-8px)';
                    }} onMouseOut={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(44, 36, 22, 0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                        <div className="h-48 overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-8 flex-grow">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: service.color }}>
                                <i className={`fas ${service.icon} text-xl`} style={{ color: service.iconColor }}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: '#2c2416' }}>{service.title}</h3>
                            <p className="leading-relaxed text-sm mb-6" style={{ color: '#6b6555' }}>{service.description}</p>
                            <button className="flex items-center font-bold group-hover:translate-x-2 transition-transform" style={{ color: '#c9a961' }}>
                                Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyServices;
