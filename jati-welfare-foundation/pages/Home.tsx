import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Heart, Users, BookOpen, Activity } from 'lucide-react';
import { Button } from '../components/Button';
import { Section } from '../components/Section';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/1015/1920/1080" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Empowering Lives, <br/> Building Futures.
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl">
            Join Jati Welfare Foundation in our mission to provide education, healthcare, and essential support to communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => navigate('/donate')} className="gap-2">
              <Heart className="w-5 h-5" fill="currentColor" />
              Donate Now
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/projects')} className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              Our Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Section className="!py-12 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Lives Impacted', value: '50k+', icon: Users },
            { label: 'Volunteers', value: '1,200+', icon: Heart },
            { label: 'Projects Done', value: '150+', icon: Activity },
            { label: 'Schools Built', value: '25', icon: BookOpen },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Areas */}
      <Section bg="gray">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Focus Areas</h2>
          <p className="text-lg text-gray-600">We concentrate our efforts on the most critical pillars of human development to ensure sustainable change.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Education',
              desc: 'Providing scholarships, building schools, and ensuring quality education for every child.',
              img: 'https://picsum.photos/id/1070/800/600',
              link: '/projects'
            },
            {
              title: 'Healthcare',
              desc: 'Organizing medical camps, supplying medicines, and supporting health infrastructure.',
              img: 'https://picsum.photos/id/1059/800/600',
              link: '/projects'
            },
            {
              title: 'Emergency Relief',
              desc: 'Rapid response to natural disasters, providing food, shelter, and rehabilitation.',
              img: 'https://picsum.photos/id/1055/800/600',
              link: '/projects'
            }
          ].map((area, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img src={area.img} alt={area.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.desc}</p>
                <div 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 cursor-pointer"
                  onClick={() => navigate(area.link)}
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Become a Part of the Change</h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Whether you donate, volunteer, or spread the word, your contribution helps us reach more people in need.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="secondary" onClick={() => navigate('/volunteer')}>Join as Volunteer</Button>
          <Button variant="outline" className="text-white border-white hover:bg-blue-700" onClick={() => navigate('/contact')}>Contact Us</Button>
        </div>
      </Section>
    </div>
  );
};