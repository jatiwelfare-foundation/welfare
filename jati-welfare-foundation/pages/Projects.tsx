import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Clean Water Initiative',
    category: 'Infrastructure',
    description: 'Installing solar-powered water pumps in remote villages to provide clean drinking water.',
    image: 'https://picsum.photos/id/1043/800/600',
  },
  {
    id: 2,
    title: 'School for All',
    category: 'Education',
    description: 'Building new classrooms and providing free textbooks to underprivileged children.',
    image: 'https://picsum.photos/id/1068/800/600',
  },
  {
    id: 3,
    title: 'Mobile Health Clinics',
    category: 'Healthcare',
    description: 'Weekly medical camps providing checkups and medicines to rural areas.',
    image: 'https://picsum.photos/id/1016/800/600',
  },
  {
    id: 4,
    title: 'Women Empowerment',
    category: 'Livelihood',
    description: 'Vocational training centers teaching sewing and handicrafts to women.',
    image: 'https://picsum.photos/id/1025/800/600',
  },
  {
    id: 5,
    title: 'Winter Relief Drive',
    category: 'Emergency',
    description: 'Distributing blankets and warm clothes to homeless individuals during winter.',
    image: 'https://picsum.photos/id/1031/800/600',
  },
  {
    id: 6,
    title: 'Tree Plantation',
    category: 'Environment',
    description: 'Planting 10,000 trees to combat climate change and improve local air quality.',
    image: 'https://picsum.photos/id/1047/800/600',
  },
];

export const Projects: React.FC = () => {
  return (
    <div>
      <div className="bg-gray-50 py-20 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
        <p className="text-gray-600 text-lg">Tangible actions making a real difference.</p>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};