import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div>
      <div className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">We'd love to hear from you.</p>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-gray-600 leading-relaxed">
              Have questions about our projects, donations, or how you can get involved? Reach out to us using the form or the contact details below.
            </p>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: 'Visit Us', text: '123 Humanity Lane, Welfare City, 54000' },
                { icon: Phone, title: 'Call Us', text: '+1 (555) 123-4567' },
                { icon: Mail, title: 'Email Us', text: 'info@jatiwelfare.org' },
                { icon: Clock, title: 'Working Hours', text: 'Mon - Fri: 9:00 AM - 5:00 PM' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600 mr-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
              </div>
              <Button size="lg" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};