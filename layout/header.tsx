'use client';
import React from 'react';
import { Home, Folder, Briefcase, Wrench, Mail, CircleUserRound } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/projects', icon: Folder, label: 'Projects', dropdown: [
      { href: '/projects/upptik', label: 'Upptik AI Chatbot' },
      { href: '/projects/project-two', label: 'Project Two' },
      { href: '/projects/project-three', label: 'Project Three'},
    ], },
  { href: '/experience', icon: Briefcase, label: 'Experience' },
  { href: '/tools', icon: Wrench, label: 'Tools' },
  { href: '/contact', icon: Mail, label: 'Contact' },
  { href: '/about', icon: CircleUserRound, label: 'About' },
];

const Header: React.FC = () => {
  return (
    <header className="bg-black p-4 flex items-center justify-center relative">
      <nav className="bg-zinc-800 rounded-full px-4 py-2 flex items-center gap-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.href} className="relative group">
              <Link href={item.href}>
                <Icon className="text-zinc-300 w-6 h-6 cursor-pointer hover:text-white" />
              </Link>

              {/* Tooltip (no dropdown) */}
              {!item.dropdown && (
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-zinc-700 text-white text-xs px-3 py-1 rounded-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ease-out pointer-events-none whitespace-nowrap">
                  {item.label}
                </span>
              )}

              {/* Dropdown menu */}
              {item.dropdown && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-10 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-zinc-700 rounded-xl py-2 px-2 flex flex-col gap-1 min-w-40">
                    
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.href}
                        href={dropItem.href}
                        className="text-white text-sm px-3 py-2 rounded-lg hover:bg-zinc-600 transition-colors whitespace-nowrap"
                    >
                      {dropItem.label}
                    </Link>
                ))}
              </div>
            </div>
          )}
          </div>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;