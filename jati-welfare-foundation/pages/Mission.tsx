import React from 'react';
import { Target, Eye, Heart, Shield, Globe, Zap } from 'lucide-react';
import { Section } from '../components/Section';

export const Mission: React.FC = () => {
  return (
    <div>
      <div className="bg-blue-900 py-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Our Mission & Vision</h1>
        <p className="text-blue-200 text-lg">The guiding principles behind everything we do.</p>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To alleviate poverty and suffering by providing sustainable welfare services, quality education, essential healthcare, and immediate disaster relief, empowering individuals to build better lives for themselves and their communities.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              A world where every individual has access to basic human rights, opportunity, and the dignity of a self-reliant life, free from the shackles of poverty and ignorance.
            </p>
          </div>
        </div>
      </Section>

      <Section bg="gray">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: 'Compassion', desc: 'We act with kindness and empathy towards all.' },
            { icon: Shield, title: 'Integrity', desc: 'We operate with complete transparency and honesty.' },
            { icon: Globe, title: 'Inclusivity', desc: 'We serve everyone regardless of race, religion, or background.' },
            { icon: Zap, title: 'Impact', desc: 'We focus on sustainable results that change lives long-term.' },
          ].map((val, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center hover:-translate-y-1 transition-transform">
              <val.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{val.title}</h3>
              <p className="text-gray-600 text-sm">{val.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};