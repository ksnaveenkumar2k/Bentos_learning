import React from "react";
import { Github, Twitter, Linkedin, Facebook, Download } from "lucide-react";
import profileImage from "./assets/profile-CzN_0cZS.png";

interface NavItem {
  label: string;
  href: string;
}

const App: React.FC = () => {
  const navItems: NavItem[] = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Service", href: "#" },
    { label: "Works", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const handleDownloadCV = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
  };

  const handleHireMe = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    e;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex ">
        <h1 className="mt-3 text-3xl font-bold px-32">Bentos</h1>
        <div className="flex justify-between items-center gap-8 px-36 mt-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#FF5733] text-1xl"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={handleHireMe}
            className="flex items-center bg-white text-black px-4 py-2 rounded-lg hover:bg-[#FF5733] transition self-center"
          >
            Hire Me
          </button>
        </div>
      </nav>

      {/* Main */}
      <main className="container mx-auto px-6 py-12 grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="bg-zinc-900 rounded-3xl p-8 flex flex-col items-center">
          <div className="relative w-64 h-72">
            <div className="absolute inset-0 bg-[#FF5733] rounded-full"></div>
            <img
              src={profileImage}
              alt="Bentos Walker"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold mt-6">Bentos Walker</h2>
          <p className="text-gray-400 mt-2">
            I am a Web Designer based in san francisco.
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

        {/* Right Column */}
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

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Company I Worked With</h3>
            <marquee behavior="scroll" direction="left">
              <div className="grid grid-cols-3 gap-8 opacity-60">
                {/* Company 1 */}
                <div className="flex justify-center items-center">
                  <img src="" alt="Company 1 Logo" className="w-24 h-auto" />
                </div>
                {/* Company 2 */}
                <div className="flex justify-center items-center">
                  <img src="" alt="Company 2 Logo" className="w-24 h-auto" />
                </div>
                {/* Company 3 */}
                <div className="flex justify-center items-center">
                  <img src="" alt="Company 3 Logo" className="w-24 h-auto" />
                </div>
                {/* Company 4 */}
                <div className="flex justify-center items-center">
                  <img src="" alt="Company 4 Logo" className="w-24 h-auto" />
                </div>
                {/* Company 5 */}
                <div className="flex justify-center items-center">
                  <img src="" alt="Company 5 Logo" className="w-24 h-auto" />
                </div>
                {/* Company 6 */}
                <div className="flex justify-center items-center">
                  <img src="" alt="Company 6 Logo" className="w-24 h-auto" />
                </div>
              </div>
            </marquee>
          </div>
        </div>
      </main>
      <div className="min-h-screen bg-black text-white">
        <div>
          <h1 className="flex justify-center mt-3 text-4xl font-bold px-32 ">
            Works & Projects
          </h1>
          <p className="text-gray-400 mt-5 text-lg text-center">
            Check out some of my design projects, meticulously crafted with love
            and dedication, each one reflecting the passion and soul I poured
            into every detail.
          </p>
          <div className="flex justify-center items-center py-10 gap-5">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full"
                src="https://via.placeholder.com/400"
                alt="Card Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">
                  This is a simple card component with a title, description, and
                  an image. You can easily modify it to suit your needs.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full"
                src="https://via.placeholder.com/400"
                alt="Card Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">
                  This is a simple card component with a title, description, and
                  an image. You can easily modify it to suit your needs.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full"
                src="https://via.placeholder.com/400"
                alt="Card Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">
                  This is a simple card component with a title, description, and
                  an image. You can easily modify it to suit your needs.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full"
                src="https://via.placeholder.com/400"
                alt="Card Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">
                  This is a simple card component with a title, description, and
                  an image. You can easily modify it to suit your needs.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
