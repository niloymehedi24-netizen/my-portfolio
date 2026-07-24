import { Code2, Database, Globe, Wrench } from "lucide-react";
import Container from "../shared/Container";
import MotionWrapper from "../shared/MotionWrapper";

const skills = [
  {
    title: "Frontend",
    icon: Globe,
    description: "Building modern, responsive and interactive user interfaces.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5",
      "Tailwind CSS",
      "Vanilla CSS",
    ],
  },
  {
    title: "Backend",
    icon: Code2,
    description: "Developing secure and scalable REST APIs.",
    technologies: ["Node.js", "Express.js", "REST API", "JWT"],
  },
  {
    title: "Database",
    icon: Database,
    description: "Designing and managing application data.",
    technologies: ["MongoDB", "Mongoose"],
  },
  {
    title: "Tools",
    icon: Wrench,
    description: "Daily tools that improve my development workflow.",
    technologies: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
];

export default function FeaturedSkills() {
  return (
    <section className="relative overflow-hidden py-24 bg-slate-950">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <Container>
        <MotionWrapper direction="left">
          <div className="mb-16 text-center">
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              Skills & Technologies
            </span>

            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
              My Technical Stack
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              Technologies and tools I use to build modern, scalable and
              user-friendly web applications.
            </p>
          </div>
        </MotionWrapper>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <MotionWrapper key={skill.title} delay={index * 0.15}>
                <div className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition group-hover:scale-110">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-2xl font-semibold">{skill.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {skill.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
