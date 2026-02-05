'use client';
import React from "react";
import { Github, Linkedin, Instagram, Youtube } from 'lucide-react';

const Aside: React.FC = () => {
  return (
    <aside className="bg-black p-4 w-900">
      <div className="bg-white rounded-2xl p-6 w-80 text-center ml-40">
        {/* Profile Image */}
        <div className="w-full h-64 bg-orange-600 rounded-xl overflow-hidden mb-4">
          <img
            src="/images/webpfp.jpg"
            alt="Mustafa Rwegasira"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="text-black text-2xl font-bold mb-2">Mustafa Rwegasira</h2>

        {/* Role Badge */}
        <span className="text-orange-500 text-sm font-semibold"> Software Engineer</span>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-4">
          A Software Engineer who has developed countless innovative solutions.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6">
          <a href="https://github.com/moosegoosey" target="_blank">
            <Github className="text-orange-500 w-5 h-5 cursor-pointer hover:text-orange-400" />
          </a>
          <a href="https://linkedin.com/in/mustafa-rwegasira-411369157" target="_blank">
            <Linkedin className="text-orange-500 w-5 h-5 cursor-pointer hover:text-orange-400" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Aside;