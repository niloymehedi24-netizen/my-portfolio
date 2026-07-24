import { Trophy, Film, Laptop, BookOpen } from "lucide-react";

import Container from "../shared/Container";

const hobbies = [
  {
    title: "Cricket",
    icon: Trophy,
  },
  {
    title: "Watching Movies",
    icon: Film,
  },
  {
    title: "Learning New Technologies",
    icon: Laptop,
  },
  {
    title: "Reading Tech Blogs",
    icon: BookOpen,
  },
];

export default function Hobbies() {
  return (
    <section className="py-24 bg-slate-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Beyond Coding</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-center transition hover:-translate-y-2 hover:border-blue-500"
              >
                <Icon size={42} className="mx-auto text-blue-400" />

                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
