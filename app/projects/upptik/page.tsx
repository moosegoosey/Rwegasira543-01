import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const UpptikPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col pt-4 pb-14 px-16 bg-white dark:bg-black">

        {/* Back Button */}
        <Link href="/projects" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Projects</span>
        </Link>

        {/* Project Header */}
        <h1 className="text-5xl font-bold text-white mb-2">Upptik AI Chatbot</h1>
        <p className="text-orange-500 text-sm font-semibold mb-6">AI-Powered Assistant</p>

        {/* Project Image */}
        <div className="w-full h-64 bg-zinc-900 rounded-2xl overflow-hidden mb-8">
          <Image width={100} height={100}
            src="/images/chatbottest.jpg"
            alt="Upptik AI Chatbot"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Description */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">About the Project</h2>
          <p className="text-gray-400 leading-relaxed">
            Upptik is an AI-powered chatbot designed to provide intelligent and engaging conversations.
            Built with modern web technologies, it delivers fast and accurate responses to user queries.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'OpenAI API'].map((tech) => (
              <span
                key={tech}
                className="bg-zinc-800 text-gray-300 text-sm px-4 py-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
          <div className="flex flex-col gap-3">
            {[
              'Real-time AI-powered conversations',
              'Clean and intuitive user interface',
              'Responsive design across all devices',
              'Fast response times with streaming',
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                <p className="text-gray-400">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Upptik/web-monorepo/tree/feature/chatbot"
            target="_blank"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2"
          >
            View on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </main>
    </div>
  );
};

export default UpptikPage;