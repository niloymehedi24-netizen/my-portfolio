import Container from "../shared/Container";

const journey = [
  {
    year: "Beginning",
    title: "Started Learning Programming",
    description:
      "My journey began with curiosity about how websites work. I started learning HTML, CSS and JavaScript while building small projects.",
  },
  {
    year: "Growth",
    title: "Exploring Full Stack Development",
    description:
      "As my confidence grew, I moved into React, Next.js, Node.js, Express.js and MongoDB, focusing on building complete web applications.",
  },
  {
    year: "Today",
    title: "Continuous Learning",
    description:
      "Today I enjoy creating modern full-stack applications, improving my problem-solving skills and learning new technologies to become a better developer every day.",
  },
];

export default function ProgrammingJourney() {
  return (
    <section className="bg-slate-950 py-24">
      <Container>
        <div className="mb-16 text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            My Journey
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Programming Journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Every developer starts somewhere. Here&apos;s a quick look at my
            learning journey and how it continues to shape my career.
          </p>
        </div>

        <div className="space-y-8">
          {journey.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500"
            >
              <span className="text-sm font-medium text-blue-400">
                {item.year}
              </span>

              <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 leading-8 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
