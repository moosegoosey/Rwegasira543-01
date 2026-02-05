'use client';
import React from 'react';

const Aside: React.FC = ()=> {
    return(
        <aside className="bg-[#d12934] p-4 flex flex-col items-center">
      <h1>My application Aside</h1>
      <div className="bg-green-300 w-64 h-48 flex items-center justify-center text-white text-xl">
        Icon
      </div>
        </aside>
    );
};

export default Aside;