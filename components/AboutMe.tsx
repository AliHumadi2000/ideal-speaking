
import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="relative mb-12 lg:mb-0">
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400"
                            className="rounded-3xl w-full h-64 object-cover mt-8"
                            alt="Teaching moment"
                            style={{ boxShadow: '0 8px 24px rgba(44, 36, 22, 0.12)' }}
                        />
                        <img
                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400"
                            className="rounded-3xl w-full h-64 object-cover"
                            alt="Student success"
                            style={{ boxShadow: '0 8px 24px rgba(44, 36, 22, 0.12)' }}
                        />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-3xl hidden md:block" style={{ backgroundColor: '#2c2416', color: 'white', boxShadow: '0 16px 48px rgba(44, 36, 22, 0.24)' }}>
                        <p className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>12+</p>
                        <p className="text-xs uppercase font-bold tracking-widest opacity-80">Years Teaching</p>
                    </div>
                </div>

                <div>
                    <h2 className="font-bold tracking-wide uppercase text-sm" style={{ color: '#c9a961' }}>My Story</h2>
                    <h3 className="mt-2 text-3xl font-extrabold sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2c2416' }}>
                        Passionate about helping you succeed.
                    </h3>
                    <p className="mt-6 text-lg leading-relaxed" style={{ color: '#6b6555' }}>
                        For over a decade, I've dedicated myself to helping students like you unlock the power of English.
                        What started as a passion for language and teaching has evolved into a personalized coaching practice
                        that focuses on YOU—your goals, your challenges, and your unique learning style.
                    </p>
                    <p className="mt-4 leading-relaxed" style={{ color: '#6b6555' }}>
                        My approach isn't just about textbooks and grammar drills. It's about building authentic confidence
                        so you can express yourself naturally in any situation—whether that's acing an exam, leading a business
                        presentation, or simply having a conversation with a friend.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-6">
                        <div>
                            <p className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#c9a961' }}>500+</p>
                            <p className="text-sm font-medium" style={{ color: '#6b6555' }}>Students Coached</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#c9a961' }}>10k+</p>
                            <p className="text-sm font-medium" style={{ color: '#6b6555' }}>Hours of Lessons</p>
                        </div>
                    </div>

                    <button className="mt-10 px-8 py-3 rounded-xl font-bold transition-all flex items-center shadow-md" style={{ backgroundColor: '#2c2416', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4a3f2e'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2c2416'}>
                        Learn About My Teaching Philosophy <i className="fas fa-chevron-right ml-3 text-sm"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
