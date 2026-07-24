import { CheckCircle2 } from "lucide-react";
import Container from "../shared/Container";
import MotionWrapper from "../shared/MotionWrapper";

const items = [
  "Open to Full-time Opportunities",
  "Available for Freelance Projects",
  "Ready for Remote Collaboration",
];

export default function Availability() {
  return (
    <section className="bg-slate-900 py-24">
      <MotionWrapper>
        <Container>
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-12 text-center">
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-green-400">
              Currently Available
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              Open to New Opportunities
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {items.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-5"
                >
                  <CheckCircle2 className="text-green-400" size={22} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </MotionWrapper>
    </section>
  );
}
