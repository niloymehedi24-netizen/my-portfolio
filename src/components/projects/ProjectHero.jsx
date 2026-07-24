import Container from "../shared/Container";

export default function ProjectHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <Container>
        <div className="text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Portfolio
          </span>

          <h1 className="mt-6 text-5xl font-bold lg:text-6xl">My Projects</h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Here are some of the projects I&apos;ve built using modern web
            technologies. Each project reflects my learning journey,
            problem-solving approach and passion for development.
          </p>
        </div>
      </Container>
    </section>
  );
}
