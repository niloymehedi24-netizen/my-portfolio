import Container from "../shared/Container";
import MotionWrapper from "../shared/MotionWrapper";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 lg:min-h-[90vh] lg:flex lg:items-center">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <Container>
        <MotionWrapper>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <HeroContent />
            <HeroImage />
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
