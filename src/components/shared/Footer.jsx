import Link from "next/link";
import Container from "./Container";

import { FaGithub, FaLinkedinIn, FaFacebookF, FaArrowUp } from "react-icons/fa";

const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/niloymehedi24-netizen",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/mehedi-niloy",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/niloy857",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950">
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <Container>
        <div className="relative grid gap-16 py-20 lg:grid-cols-3">
          {/* Left */}

          <div>
            <h2 className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
              MHN.
            </h2>

            <p className="mt-6 max-w-sm leading-8 text-slate-400">
              Passionate Full Stack Developer focused on building modern,
              responsive and scalable web applications with clean code and
              exceptional user experiences.
            </p>

            <div className="mt-8 flex gap-4">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Center */}

          <div>
            <h3 className="mb-8 text-2xl font-semibold">Quick Links</h3>

            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition hover:pl-2 hover:text-blue-400"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}

          <div>
            <h3 className="mb-8 text-2xl font-semibold">Let&apos;s Connect</h3>

            <p className="leading-8 text-slate-400">
              I&apos;m always excited to collaborate on innovative projects,
              discuss new opportunities, or simply connect with fellow
              developers.
            </p>

            <a
              href="#top"
              className="mt-8 inline-flex items-center gap-3 rounded-xl border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-blue-400 transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              <FaArrowUp />
              Back to Top
            </a>
          </div>
        </div>

        {/* Bottom */}

        <div className="relative border-t border-slate-800 py-8 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-slate-300">
              Mehedi Hasan Niloy
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
