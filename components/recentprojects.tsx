'use client';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Upptik AI Chatbot',
    subtitle: 'AI-Powered Assistant',
    image: '/images/upptiklogo.jpg',
    href: '/projects/upptik',
  },
  {
    title: 'Project Two',
    subtitle: 'Coming Soon',
    image: '/images/comingsoon.png',
    href: '/projects/project-two',
  },
  {
    title: 'Project Three',
    subtitle: 'Coming Soon',
    image: '/images/comingsoon.png',
    href: '/projects/project-three',
  },
];

const RecentProjects: React.FC = () => {
  return (
    <section className="text-white w-full">
      {/* Title */}
      <h2 className="text-7xl font-bold leading-tight">
        RECENT
        <br />
        <span className="text-gray-600">PROJECTS</span>
      </h2>

      {/* Projects List */}
      <div className="mt-12 flex flex-col gap-8">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.href}
            className="flex items-center justify-between group border-b border-gray-800 pb-8"
          >
            <div className="flex items-center gap-8">
              {/* Project Thumbnail */}
              <div className="w-40 h-24 bg-gray-800 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-2xl font-bold group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{project.subtitle}</p>
              </div>
            </div>

            {/* Arrow Icon */}
            <ArrowUpRight className="text-orange-500 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;