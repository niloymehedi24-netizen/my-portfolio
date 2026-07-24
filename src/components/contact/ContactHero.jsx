import Container from "../shared/Container";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Let&apos;s Connect
          </span>

          <h1 className="mt-6 text-5xl font-bold lg:text-6xl">
            Let&apos;s Work Together
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Have an idea, project or opportunity? I&apos;m always open to
            discussing exciting collaborations and connecting with amazing
            people.
          </p>
        </div>
      </Container>
    </section>
  );
}
