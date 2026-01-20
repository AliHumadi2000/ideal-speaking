import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  // We use state to track the inputs so we can build the email link dynamically
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Destination Email (I corrected 'ggmail' to 'gmail' for you)
    const mailTo = "aliaaaqh135@gmail.com";

    // 2. Construct the Subject Line
    const subject = encodeURIComponent(`${formData.subject} - from ${formData.firstName} ${formData.lastName}`);

    // 3. Construct the Body (Message)
    // We include the sender's typed email in the body text so you can reply to them easily.
    const body = encodeURIComponent(
      `Hi,\n\n` +
      `You have a new message from your website contact form.\n\n` +
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );

    // 4. Open the user's default email client
    window.location.href = `mailto:${mailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden">
        <div className="lg:grid lg:grid-cols-2">

          {/* Left Side: Info (Unchanged) */}
          <div className="p-10 lg:p-16 bg-blue-600 text-white">
            <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Have questions about our programs or pricing? Our team is here to help you start your journey.
            </p>
            {/* ... (Existing info icons code remains the same) ... */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-xl mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold">Email us</h4>
                  <p className="text-blue-100">hello@idealspeaking.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-xl mr-4">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold">Call us</h4>
                  <p className="text-blue-100">+1 (800) SPEAK-EN</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-xl mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold">Headquarters</h4>
                  <p className="text-blue-100">Global Hub, London, UK</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-sm text-blue-100">Follow us on social media</p>
              <div className="mt-4 flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                  <a key={social} href="#" className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                    <i className={`fab fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form (Updated Logic) */}
          <div className="p-10 lg:p-16">
            <form onSubmit={handleSend} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Email Address</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                >
                  <option>General Inquiry</option>
                  <option>Free Trial Booking</option>
                  <option>Partnerships</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-blue-200 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;