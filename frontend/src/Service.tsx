import React, { useState } from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Facebook,
  ArrowDownIcon,
  Heart,
  Globe,
  Feather,
  Smartphone,
} from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
import naveen from "./assets/I HUB ID CARD New.jpg";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  avatar: string;
}

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
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Zonathon Doe",
      position: "CEO & Founder X",
      content:
        "Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tionlio know ledige in about how.",
      avatar: naveen,
    },
    {
      id: 2,
      name: "Liana Marie",
      position: "Lead Designer Meta",
      content:
        "Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tionlio know ledige in about how.",
      avatar: naveen,
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Service", href: "/service" },
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

  const experiences = [
    {
      period: "2021 - Present",
      title: "Web Designer",
      company: "Themeforest Market",
    },
    {
      period: "2021 - 2023",
      title: "Marketing Expert GRP",
      company: "Envato Theme Developer",
    },
    {
      period: "2021 - 2022",
      title: "Web Designer",
      company: "Web Developer & Business Partner",
    },
  ];

 
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-white" />,
      title: "Brand Identity Design",
      description:
        "Bentos gives you the blocks & kits you need to create a true website within minutes.",
    },
    {
      icon: <Feather className="w-12 h-12 text-white" />,
      title: "Website Design",
      description:
        "Bentos gives you the blocks & kits you need to create a true website within minutes.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-white" />,
      title: "Application Design",
      description:
        "Bentos gives you the blocks & kits you need to create a true website within minutes.",
    },
  ];

  const Card = ({ period, title, subtitle }) => (
    <div className="flex items-start gap-4 mb-8">
      <div className="bg-white rounded-lg p-2">
        <LayoutGrid className="text-black w-6 h-6" />
      </div>
      <div>
        <p className="text-gray-400 text-sm mb-1">{period}</p>
        <h3 className="text-white text-lg font-medium mb-1">{title}</h3>
        <p className="text-gray-500">{subtitle}</p>
      </div>
    </div>
  );

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
      <section className="bg-black py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gray-400 mb-2">Services</p>
            <h2 className="text-4xl font-bold text-white">Quality Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-3xl p-8 transition-transform duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="bg-black px-6 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-400 mb-2">Testimonials</p>
            <h2 className="text-4xl font-bold">What clients say!</h2>
          </div>

          <div className="relative">
            <div className="flex justify-center gap-8">
              {testimonials
                .slice(currentTestimonialIndex, currentTestimonialIndex + 2)
                .map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-zinc-900 rounded-3xl p-8 max-w-xl"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={`${testimonial.name}'s avatar`}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <p className="text-gray-400 mb-6">
                          {testimonial.content}
                        </p>
                        <h3 className="font-semibold text-xl text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-400">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-[#FF5733] hover:bg-[#E64A2E] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-[#FF5733] hover:bg-[#E64A2E] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

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
