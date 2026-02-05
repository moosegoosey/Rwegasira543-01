import React from 'react';
import PremiumTools from '@/components/tools';

const ToolsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col py-14 px-16 bg-white dark:bg-black">
        <PremiumTools />
      </main>
    </div>
  );
};

export default ToolsPage;