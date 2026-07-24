import { GraduationCap } from "lucide-react";
import Container from "../shared/Container";

export default function Education() {
  return (
    <section className="py-24 bg-slate-950">
      <Container>
        <div className="mb-16 text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            Education
          </span>

          <h2 className="mt-6 text-4xl font-bold">Academic Journey</h2>
        </div>

        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="flex gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
              <GraduationCap className="text-blue-400" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Bachelor of Business Administration (BBA)
              </h3>

              <p className="mt-2 text-slate-400">Royal University of Dhaka</p>

              <p className="mt-2 text-slate-500">
                Faculty of Business Administration
              </p>

              <p className="mt-4 text-blue-400">Graduated: 2022</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
