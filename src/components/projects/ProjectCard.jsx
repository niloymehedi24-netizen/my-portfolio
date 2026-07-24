import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10">
      {/* Image */}

      <div className="overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={700}
          height={450}
          className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}

      <div className="p-7">
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.shortDescription}
        </p>

        {/* Tech */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium transition hover:bg-blue-700"
          >
            Live Demo
            <ArrowUpRight size={18} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-sm transition hover:border-blue-500"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-block font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
