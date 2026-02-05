import React from 'react';
import Experience from '@/components/experience';

const ExperiencePage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col py-14 px-16 bg-white dark:bg-black">
        <Experience />
      </main>
    </div>
  );
};

export default ExperiencePage;