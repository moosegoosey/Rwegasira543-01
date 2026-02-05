'use client';
import React from 'react';

const Header: React.FC = ()=> {
    return(
        <header className="bg-[#113ab8] p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
        <div className="bg-pink-400 w-32 h-32 flex items-center justify-center text-white text-sm">
          Icon
        </div>
        <h1>My Application Header</h1>
      </div>
      <nav className="flex gap-4">
        <div className="bg-purple-800 px-6 py-8 text-white flex items-center justify-center">
          Item
        </div>
        <div className="bg-purple-800 px-6 py-8 text-white flex items-center justify-center">
          Item
        </div>
        <div className="bg-purple-800 px-6 py-8 text-white flex items-center justify-center">
          Item
        </div>
      </nav>
        </header>
    );
};

export default Header;