import Container from "../shared/Container";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects";

export default function ProjectGrid() {
  return (
    <section className="bg-slate-900 py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
