import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectThreePage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col pt-4 pb-14 px-16 bg-white dark:bg-black">

        {/* Back Button */}
        <Link href="/projects" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Projects</span>
        </Link>

        {/* Project Header */}
        <h1 className="text-5xl font-bold text-white mb-2">Project Three</h1>
        <p className="text-orange-500 text-sm font-semibold mb-6">Coming Soon</p>

        {/* Project Image */}
        <div className="w-full h-64 bg-zinc-900 rounded-2xl overflow-hidden mb-8 flex items-center justify-center">
          <Image width={800} height={400}
            src="/images/comingsoon.png"
            alt="Project Three"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Description */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">About the Project</h2>
          <p className="text-gray-400 leading-relaxed">
            This project is currently in development. Check back soon for updates!
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {['TBD'].map((tech) => (
              <span
                key={tech}
                className="bg-zinc-800 text-gray-300 text-sm px-4 py-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default ProjectThreePage; 