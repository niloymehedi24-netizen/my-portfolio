import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import MotionWrapper from "../shared/MotionWrapper";

const projects = [
  {
    title: "EcoTrack AI",
    description:
      "An AI-powered sustainability platform with intelligent recommendations.",
    image: "/projects/ecotrack-ai.png",
    slug: "ecotrack-ai",
    tech: ["Next.js", "AI", "MongoDB"],
    live: "https://ecotrack-ai-kappa.vercel.app",
    github: "https://github.com/niloymehedi24-netizen/ecotrack-ai",
  },
  {
    title: "LeafLoop",
    description: "A modern plant marketplace built with Next.js and Express.",
    image: "/projects/leafloop.png",
    slug: "leafloop",
    tech: ["Next.js", "Express", "MongoDB"],
    live: "https://leafloop.vercel.app",
    github: "https://github.com/niloymehedi24-netizen/leafloop",
  },
  {
    title: "ArtHub",
    description:
      "A full-stack digital art marketplace connecting artists and collectors.",
    image: "/projects/arthub.png",
    slug: "arthub",
    tech: ["React", "Node", "MongoDB"],
    live: "https://arthub-blue.vercel.app",
    github: "https://github.com/niloymehedi24-netizen/arthub",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden py-24 bg-slate-900">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"></div>

      <Container>
        <div className="mb-16 text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            A selection of projects showcasing my experience in full-stack web
            development.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <MotionWrapper key={project.slug}>
              <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={350}
                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold">{project.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium transition hover:bg-blue-700"
                    >
                      Live Demo
                      <ArrowUpRight size={18} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-sm transition hover:border-blue-500"
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-5 inline-block text-sm font-medium text-cyan-400 hover:text-cyan-300"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}
