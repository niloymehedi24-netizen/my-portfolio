"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import Container from "./Container";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold">
            Niloy
            <span className="text-blue-500">.</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition duration-300 hover:text-blue-400 ${
                  pathname === link.path
                    ? "font-semibold text-blue-500"
                    : "text-slate-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="https://github.com/niloymehedi24-netizen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition hover:text-blue-500"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/mehedi-niloy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition hover:text-blue-500"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="rounded-lg bg-blue-600 px-5 py-2 font-medium transition hover:bg-blue-700"
            >
              Resume
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl lg:hidden"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-900 lg:hidden">
          <Container>
            <nav className="flex flex-col py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-3 transition ${
                    pathname === link.path
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-5 flex items-center gap-5">
                <a
                  href="https://github.com/YOUR_GITHUB_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl"
                >
                  <FaLinkedin />
                </a>
              </div>

              <a
                href="#"
                className="mt-6 rounded-lg bg-blue-600 py-3 text-center font-semibold"
              >
                Download Resume
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
