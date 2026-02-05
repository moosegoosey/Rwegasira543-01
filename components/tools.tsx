'use client';
import React from 'react';
import { Code2, Palette, Database, Sparkles, FileText, Mail } from 'lucide-react';

const tools = [
  {
    name: 'Next.js',
    description: 'React Framework',
    icon: Code2,
    href: 'https://nextjs.org/',
  },
  {
    name: 'Tailwind CSS',
    description: 'Styling Framework',
    icon: Palette,
    href: 'https://tailwindcss.com/',
  },
  {
    name: 'MongoDB',
    description: 'Database',
    icon: Database,
    href: 'https://www.mongodb.com/',
  },
  {
    name: 'Framer Motion',
    description: 'Animation Library',
    icon: Sparkles,
    href: 'https://www.framer.com/motion/',
  },
  {
    name: 'React Hook Form',
    description: 'Form Library',
    icon: FileText,
    href: 'https://react-hook-form.com/',
  },
  {
    name: 'Nodemailer',
    description: 'Email Service',
    icon: Mail,
    href: 'https://nodemailer.com/',
  },
];

const PremiumTools: React.FC = () => {
  return (
    <section className="text-white w-full">
      {/* Title */}
      <h2 className="text-7xl font-bold leading-tight">
        PREMIUM
        <br />
        <span className="text-gray-600">TOOLS</span>
      </h2>

      {/* Tools Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <a
              key={index}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              {/* Icon Box */}
              <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Icon className="text-black w-8 h-8" />
              </div>

              {/* Tool Info */}
              <div>
                <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default PremiumTools;