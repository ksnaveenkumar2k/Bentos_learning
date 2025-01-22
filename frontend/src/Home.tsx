import React, { useState } from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Download,
  ArrowDownIcon,
  Heart,
} from "lucide-react";
import profileImage from "./assets/profile-CzN_0cZS.png";
import amazonImage from "./assets/amazon.png";
import Wallmart from "./assets/wallmart.png";
import Linkedinn from "./assets/Linkedin.png";
import Google from "./assets/Google.png";
import Stack from "./assets/Stack.png";
import work1 from "./assets/work1.jpg";
import work2 from "./assets/work2.jpg";
import work3 from "./assets/work3.jpg";
import work4 from "./assets/work4.jpg";

const projects = [
  {
    id: 1,
    title: "Mobile Application Design",
    category: "Design",
    image: work1,
    type: "Mails Manage",
  },
  {
    id: 2,
    title: "Website Makeup Design",
    category: "Game",
    image: work2,
  },
  {
    id: 3,
    title: "Brand Identity and Motion Design",
    category: "Branding",
    image: work3,
  },
  {
    id: 4,
    title: "Mobile Application Design",
    category: "Marketing",
    image: work4,
    type: "S N",
  },
  {
    id: 5,
    title: "Brand Identity and Motion Design",
    category: "Design",
    image: work1,
  },
  {
    id: 6,
    title: "Brand Identity and Motion Design",
    category: "Marketing",
    image: work2,
    type: "Mails Manage",
  },
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Design", "Game", "Branding", "Marketing"];

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "All" ? true : project.category === selectedCategory
  );

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Service", href: "#" },
    { label: "Works", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Download CV clicked");
  };

  const handleHireMe = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Hire Me clicked");
  };

  const handleLetsTalk = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Let's Talk clicked");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Bentos</h1>
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#FF5733] text-lg"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={handleHireMe}
            className="bg-white text-black px-4 py-2 rounded-lg hover:bg-[#FF5733] transition"
          >
            Hire Me
          </button>
        </div>
      </nav>

      {/* Main Section */}
      <main className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Section */}
        <div className="bg-zinc-900 rounded-3xl p-8 flex flex-col items-center">
          <div className="relative w-64 h-72">
            <div className="absolute inset-0 bg-[#FF5733] rounded-full"></div>
            <img
              src={profileImage}
              alt="Bentos Walker"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
            />
          </div>
          <h2 className="text-3xl font-bold mt-6">Bentos Walker</h2>
          <p className="text-gray-400 mt-2 text-center">
            I am a Web Designer based in San Francisco.
          </p>
          <div className="flex gap-6 mt-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col gap-8">
          <div className="bg-zinc-900 rounded-3xl p-8">
            <p className="text-gray-400">Hello There!</p>
            <h2 className="text-4xl font-bold mt-4 leading-tight">
              I'm Bentos Walker, a product designer crafting user-centric design
              with pixel-perfect precision.
            </h2>
            <div className="flex items-center gap-2 mt-6">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-gray-400">Available for Freelancing</p>
            </div>
            <button
              onClick={handleDownloadCV}
              className="mt-6 bg-[#FF5733] text-white px-6 py-3 rounded-lg hover:bg-[#E64A2E] transition flex items-center gap-2"
            >
              Download CV
              <Download size={20} />
            </button>
          </div>

          {/* Companies Section */}
          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">
              Companies I've Worked With
            </h3>
            <div className="overflow-hidden w-full py-4">
              <div className="flex items-center animate-marquee space-x-12">
                <img
                  src={Stack}
                  alt="Stack"
                  className="w-32 h-auto object-contain"
                />
                <img
                  src={amazonImage}
                  alt="Amazon"
                  className="w-32 h-auto object-contain"
                />
                <img
                  src={Wallmart}
                  alt="Walmart"
                  className="w-32 h-auto object-contain"
                />
                <img
                  src={Linkedinn}
                  alt="Linkedin"
                  className="w-32 h-auto object-contain"
                />
                <img
                  src={Google}
                  alt="Google"
                  className="w-32 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Projects Section */}
      <div className="min-h-screen bg-black rounded-3xl p-8 ">
        <section className="bg-zinc-900  min-h-screen px-6 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Works & Projects
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Check out some of my design projects, meticulously crafted with
                love and dedication, each one reflecting the passion and soul I
                poured into every detail.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-8 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative pb-2 transition-all ${
                    selectedCategory === category
                      ? "text-red-500"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {category}
                  {selectedCategory === category && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-lg overflow-hidden bg-zinc-900"
                >
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="text-gray-400 text-sm mb-2">
                          {project.category}
                        </div>
                        <h3 className="text-white text-xl font-medium">
                          {project.title}
                        </h3>
                        {project.type && (
                          <p className="mt-2 text-sm text-gray-300">
                            {project.type}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="min-h-screen bg-black rounded-5xl p-8 ">
        <section className="bg-zinc-900  py-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Are You Ready to kickstart your project with a touch of magic?
            </h2>

            <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
              Reach out and let's make it happen ✨. I'm also available for
              full-time or Part-time opportunities to push the boundaries of
              design and deliver exceptional work.
            </p>

            <button
              onClick={handleLetsTalk}
              className="bg-[#FF5733] hover:bg-[#E64A2E] text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-300 flex items-center gap-2 mx-auto"
            >
              Let's Talk
              <ArrowDownIcon size={20} />
            </button>
          </div>
        </section>
        {/* Footer Section */}
        <footer className="bg-black  py-6 px-6 mt-5 ">
          <div className="container mx-auto flex justify-between items-center text-gray-400">
            <div>
              Copyright @2025, <span className="text-[#FF5733]">Bentos</span>{" "}
              All Rights Reserved.
            </div>
            <div className="flex items-center gap-2">
              Crafted with <Heart className="text-red-500" size={16} />{" "}
              theme_ocean
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
