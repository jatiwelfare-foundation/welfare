import React from 'react';
import { Section } from '../components/Section';

export const About: React.FC = () => {
  return (
    <div>
      <div className="bg-gray-900 py-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
        <p className="text-gray-400 text-lg">Who we are and why we serve.</p>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://picsum.photos/id/1018/800/800" 
              alt="About Jati Welfare" 
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2010, the Jati Welfare Foundation began with a simple yet powerful idea: that every human being deserves a life of dignity, opportunity, and hope. What started as a small community initiative has grown into a widespread movement for social change.
              </p>
              <p>
                Over the past decade, we have touched the lives of thousands through our dedication to education, healthcare, and disaster relief. We believe that true welfare isn't just about charity—it's about empowerment.
              </p>
              <p>
                Our team is comprised of passionate individuals, experts in development, and dedicated volunteers who work tirelessly to ensure that our resources reach those who need them most efficiently and transparently.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Leadership Team</h2>
          <p className="text-gray-600 mt-2">Meet the people driving our mission forward.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-6 text-center">
              <img 
                src={`https://picsum.photos/seed/person${i}/200/200`} 
                alt="Team Member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-gray-900">John Doe {i}</h3>
              <p className="text-blue-600 text-sm mb-2">Executive Director</p>
              <p className="text-gray-500 text-sm">Dedicated to social justice and community development for over 15 years.</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};