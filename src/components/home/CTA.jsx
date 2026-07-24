import Link from "next/link";
import Container from "../shared/Container";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 px-8 py-20 text-center shadow-xl">
          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>

          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>

          <div className="relative z-10">
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              Available for Opportunities
            </span>

            <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-bold leading-tight text-white lg:text-5xl">
              Let&apos;s Build Something Amazing Together
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Whether you have a project idea, freelance opportunity, or simply
              want to connect, I&apos;d love to hear from you.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Let&apos;s Talk
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
