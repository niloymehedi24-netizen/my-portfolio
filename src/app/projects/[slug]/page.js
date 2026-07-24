import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container";
import projects from "@/data/projects";

export default async function ProjectDetails({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="bg-slate-950 py-24">
      <Container>
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={700}
          className="mb-12 rounded-3xl border border-slate-800"
        />

        <h1 className="text-5xl font-bold">{project.title}</h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-10">
          <h2 className="mb-5 text-3xl font-semibold">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-blue-500/10 px-4 py-2 text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}

        <div className="mt-14">
          <h2 className="mb-5 text-3xl font-semibold">
            Challenges
          </h2>

          <ul className="space-y-3 text-slate-400">
            {project.challenges.map((challenge) => (
              <li key={challenge}>• {challenge}</li>
            ))}
          </ul>
        </div>

        {/* Future Plans */}

        <div className="mt-14">
          <h2 className="mb-5 text-3xl font-semibold">
            Future Improvements
          </h2>

          <ul className="space-y-3 text-slate-400">
            {project.future.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* Links */}

        <div className="mt-14 flex flex-wrap gap-5">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
          >
            Live Project
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700 px-8 py-4 transition hover:border-blue-500"
          >
            GitHub Repository
          </a>

          <Link
            href="/projects"
            className="rounded-xl border border-slate-700 px-8 py-4 transition hover:border-cyan-500"
          >
            ← Back to Projects
          </Link>
        </div>
      </Container>
    </section>
  );
}