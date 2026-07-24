import Image from "next/image";
import Container from "../shared/Container";
import MotionWrapper from "../shared/MotionWrapper";

export default function AboutMe() {
  return (
    <section className="bg-slate-900 py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}

          <div className="relative mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-3xl"></div>

            <MotionWrapper>
              <Image
                src="/images/profile.jpeg"
                alt="Mehedi Hasan Niloy"
                width={450}
                height={500}
                className="relative rounded-3xl border border-slate-800 object-cover"
              />
            </MotionWrapper>
          </div>

          {/* Content */}

          <MotionWrapper>
            <div>
              <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                Who I Am
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
                Passionate Full Stack Developer
                <span className="block text-blue-400">
                  Building Modern Web Experiences
                </span>
              </h2>

              <p className="mt-8 leading-8 text-slate-400">
                Hello! I&apos;m{" "}
                <strong className="text-white">Mehedi Hasan Niloy</strong>, a
                passionate Full Stack Developer from Bangladesh with a strong
                interest in building responsive, scalable and user-friendly web
                applications.
              </p>

              <p className="mt-6 leading-8 text-slate-400">
                I enjoy turning ideas into real-world products using modern
                technologies like React, Next.js, Node.js, Express.js and
                MongoDB. My focus is always on writing clean code, creating
                intuitive user experiences and continuously improving my skills.
              </p>

              <p className="mt-6 leading-8 text-slate-400">
                I believe that every project is an opportunity to learn
                something new. Whether it&apos;s solving challenging problems or
                exploring the latest technologies, I&apos;m always excited to
                grow as a developer.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-5">
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
                  <h3 className="text-3xl font-bold text-blue-400">5+</h3>

                  <p className="mt-2 text-slate-400">Featured Projects</p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
                  <h3 className="text-3xl font-bold text-blue-400">15+</h3>

                  <p className="mt-2 text-slate-400">Technologies</p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
