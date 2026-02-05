/*import Image from "next/image";*/
import Intro from "@/components/intro";
import AccordionUI from "@/layout/ui/accordion";
import React from "react";
import Link from "next/link";
import User from "@/components/user";
import RecentProjects from "./../components/recentprojects";
import Experience from "./../components/experience";
import { Layers, LayoutGrid, ArrowRight } from 'lucide-react';
import PremiumTools from "./../components/tools";
import ContactForm from "./../components/contactform";


async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
  const data = await res.json();
  return data;
}

const Home: React.FC = async() => {
  const posts= await getPosts();

  console.log('posts: ', posts);
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-14 px-16 bg-white dark:bg-black sm:items-start">
      
          {/* Hero Section */}
        <section className="text-white w-full">
          <h1 className="text-7xl font-bold leading-tight">
            SOFTWARE
            <br />
            <span className="text-gray-600">ENGINEER</span>
          </h1>

          <p className="text-gray-400 text-sm mt-4 max-w-md">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </p>

          {/* Stats */}
          <div className="flex gap-12 mt-8">
            <div>
              <p className="text-4xl font-bold">+3</p>
              <p className="text-gray-400 text-xs uppercase mt-1">Years of<br />Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold">+5</p>
              <p className="text-gray-400 text-xs uppercase mt-1">Projects<br />Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold">+0</p>
              <p className="text-gray-400 text-xs uppercase mt-1">Worldwide<br />Clients</p>
            </div>
          </div>

          {/* Skill Cards */}
          <div className="flex gap-4 mt-8">
            <div className="bg-orange-500 rounded-2xl p-6 w-1/2 flex flex-col justify-between h-48">
              <Layers className="text-orange-800 w-8 h-8" />
              <div className="flex items-end justify-between">
                <p className="text-white font-bold text-sm uppercase">
                  Dynamic Animation,<br />Motion Design
                </p>
                <div className="bg-orange-600 rounded-full p-2">
                  <ArrowRight className="text-white w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="bg-lime-400 rounded-2xl p-6 w-1/2 flex flex-col justify-between h-48">
              <LayoutGrid className="text-lime-700 w-8 h-8" />
              <div className="flex items-end justify-between">
                <p className="text-black font-bold text-sm uppercase">
                  Framer, Figma,<br />Wordpress, ReactJS
                </p>
                <div className="bg-lime-500 rounded-full p-2">
                  <ArrowRight className="text-black w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <User userName="Student Name" userType="Admin" /> */}

        {/*<ul className="list-disc pl-5 my-3">
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="mb-2">
            <Link className="text-amber-400 hover:underline" href={`/projects/${post.id}`}>{post.title}</Link>
          </li>
        ))}
         
       </ul>*/}
       <section id="projects" className="w-full scroll-mt-24">
          <RecentProjects />
        </section>

        <section id="experience" className="w-full scroll-mt-24">
          <Experience />
        </section>

        <section id="tools" className="w-full scroll-mt-24">
          <PremiumTools />
        </section>

        <section id="contact" className="w-full scroll-mt-24">
          <ContactForm />
        </section>

        <section>
          {/* <Intro/> */}
          {/* <AccordionUI/> */}
        </section>
        
      </main>
    </div>
  );
}
export default Home;