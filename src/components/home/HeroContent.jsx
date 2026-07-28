"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div>
      <p className="mb-3 text-lg font-medium text-blue-400">Hello, I&apos;m</p>

      <h1 className="mb-4 text-5xl font-bold leading-tight lg:text-7xl">
        Mehedi Hasan Niloy
      </h1>

      <TypeAnimation
        sequence={[
          "Full Stack Developer",
          2000,
          "React Developer",
          2000,
          "Next.js Developer",
          2000,
          "MERN Stack Developer",
          2000,
        ]}
        wrapper="h2"
        speed={40}
        repeat={Infinity}
        className="mb-6 text-2xl font-semibold text-blue-400"
      />

      <p className="max-w-xl text-lg leading-8 text-slate-400">
        Passionate about building fast, responsive and user-friendly web
        applications with modern JavaScript technologies. I love solving
        real-world problems through clean code and beautiful UI.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/resume/Mehedi_Hasan_Niloy_Resume.pdf"
          className="rounded-xl bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-700"
        >
          Download Resume
        </Link>

        <Link
          href="/projects"
          className="rounded-xl border border-blue-500 px-7 py-3 font-semibold transition hover:bg-blue-500"
        >
          View Projects
        </Link>
      </div>

      {/* Socials */}

      <div className="mt-10 flex gap-5">
        <a
          href="https://github.com/niloymehedi24-netizen"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-slate-800 p-3 text-xl transition hover:-translate-y-1 hover:bg-blue-600"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/mehedi-niloy"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-slate-800 p-3 text-xl transition hover:-translate-y-1 hover:bg-blue-600"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://facebook.com/niloy857"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-slate-800 p-3 text-xl transition hover:-translate-y-1 hover:bg-blue-600"
        >
          <FaFacebook />
        </a>
      </div>

      <HeroStats />
    </div>
  );
}
