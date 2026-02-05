'use client';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    company: 'Company Name',
    description: 'Describe your role and what you accomplished here. Focus on the impact you made and the skills you developed.',
    date: 'Jan 2024 - Present',
    href: '#',
  },
  {
    company: 'Another Company',
    description: 'Describe your responsibilities and achievements at this role. Highlight key projects and contributions.',
    date: 'Jun 2022 - Dec 2023',
    href: '#',
  },
  {
    company: 'First Experience',
    description: 'Your first experience or internship. Talk about what you learned and how it shaped your career path.',
    date: 'Mar 2021 - May 2022',
    href: '#',
  },
];

const Experience: React.FC = () => {
  return (
    <section className="text-white w-full">
      {/* Title */}
      <h2 className="text-7xl font-bold leading-tight">
        3 YEARS OF
        <br />
        <span className="text-gray-600">EXPERIENCE</span>
      </h2>

      {/* Experience Cards */}
      <div className="mt-12 flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <a
            key={index}
            href={exp.href}
            className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-2xl p-6 flex justify-between items-start transition-colors group"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">{exp.company}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-4">
                {exp.description}
              </p>
              <p className="text-gray-500 text-sm">{exp.date}</p>
            </div>
            <ArrowUpRight className="text-orange-500 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Experience;