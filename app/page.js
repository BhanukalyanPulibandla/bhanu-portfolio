'use client';
import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  useEffect(() => {
    document.title = "Bhanu Kalyan Pulibandla";
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <section className="h-screen flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-5xl font-bold mb-2">Bhanu Kalyan Pulibandla</h1>
        <p className="text-xl text-gray-400">Software Engineer / Developer / Builder</p>
      </section>

      <section id="about" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300">
          I'm Bhanu, a developer passionate about building scalable applications, experimenting with new technologies, and solving real-world problems.
        </p>
      </section>

      <section id="projects" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3].map((id) => (
            <Card key={id} className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Title {id}</h3>
                <p className="text-gray-400 text-sm mb-2">
                  Short description of the project and what it does.
                </p>
                <p className="text-gray-500 text-xs">Tech stack: React, Tailwind, Node.js</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400 mb-4">
          Feel free to reach out for collaboration, projects, or just to say hi!
        </p>
        <p className="text-blue-400 underline">bhanukalyan@example.com</p>
      </section>

      <footer className="text-center text-gray-600 text-sm py-6">
        &copy; {new Date().getFullYear()} Bhanu Kalyan Pulibandla. All rights reserved.
      </footer>
    </main>
  );
}