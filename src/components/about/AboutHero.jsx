import Container from "../shared/Container";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <Container>
        <div className="text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            About Me
          </span>

          <h1 className="mt-6 text-5xl font-bold lg:text-6xl">
            Get To Know Me
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I&apos;m passionate about building modern web applications, solving
            real-world problems and continuously improving my skills as a Full
            Stack Developer.
          </p>
        </div>
      </Container>
    </section>
  );
}
