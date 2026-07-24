import Hero from "@/components/home/Hero";
import FeaturedSkills from "@/components/home/FeaturedSkills";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedSkills />
      <FeaturedProjects />
      <CTA />
    </>
  );
}