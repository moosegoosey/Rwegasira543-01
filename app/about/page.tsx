import React from 'react';
import { MapPin, GraduationCap, Code, Coffee, Github, Linkedin } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col pt-4 pb-14 px-16 bg-white dark:bg-black">

        {/* Title */}
        <h1 className="text-7xl font-bold leading-tight text-white">
          ABOUT
          <br />
          <span className="text-gray-600">ME</span>
        </h1>

        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row gap-8 mt-12">
          {/* Photo */}
          <div className="w-48 h-48 bg-orange-600 rounded-2xl overflow-hidden flex-shrink-0">
            <img
              src="/images/webpfp.jpg"
              alt="Mustafa Rwegasira"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-2">Mustafa Rwegasira</h2>
            <p className="text-orange-500 font-semibold mb-4">Software Engineer</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="text-gray-400 w-4 h-4" />
                <span className="text-gray-400 text-sm">New Haven, CT</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="text-gray-400 w-4 h-4" />
                <span className="text-gray-400 text-sm">Software Engineering Student</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Who I Am</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            I&apos;m Mustafa Rwegasira, a passionate Software Engineering/Web Developer student focused on building
            intuitive and engaging user experiences. I specialize in transforming ideas into
            beautifully crafted digital products.
          </p>
          <p className="text-gray-400 leading-relaxed">
            With experience in modern web technologies like Next.js, TypeScript, and MongoDB,
            I enjoy creating full-stack applications that solve real-world problems. I&apos;m always
            eager to learn new technologies and take on challenging projects.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Next.js',
              'TypeScript',
              'React',
              'Tailwind CSS',
              'MongoDB',
              'Node.js',
              'Git',
              'Framer Motion',
              'REST APIs',
              'Responsive Design',
            ].map((skill) => (
              <span
                key={skill}
                className="bg-zinc-800 text-gray-300 text-sm px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">What Drives Me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Code, title: 'Clean Code', description: 'Writing maintainable and efficient code that scales.' },
              { icon: Coffee, title: 'Problem Solving', description: 'Breaking down complex challenges into simple solutions.' },
              { icon: GraduationCap, title: 'Continuous Learning', description: 'Always exploring new technologies and best practices.' },
              { icon: MapPin, title: 'Community', description: 'Collaborating with others and contributing to the tech community.' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                  <Icon className="text-orange-500 w-6 h-6 mb-3" />
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Connect */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/moosegoosey"
              target="_blank"
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mustafa-rwegasira-411369157"
              target="_blank"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </section>

      </main>
    </div>
  );
};

export default AboutPage;