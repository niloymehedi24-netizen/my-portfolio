import Container from "../shared/Container";

export default function CareerGoal() {
  return (
    <section className="py-24 bg-slate-950">
      <Container>
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">
          <h2 className="text-4xl font-bold">My Career Goal</h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            My goal is to become a highly skilled Full Stack Developer capable
            of building impactful digital products that solve real-world
            problems. I believe in continuous learning, collaboration and
            writing clean, maintainable code.
          </p>
        </div>
      </Container>
    </section>
  );
}
