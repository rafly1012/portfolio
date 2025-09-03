import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { FeaturedProjects } from "@/components/featured-projects";
import { Certification } from "@/components/certification";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-2xl">
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Rafly Yusuf
          </h1>
          <p className="text-muted-foreground text-xl">Full-Stack Developer</p>
        </div>

        <About />

        <Skills />

        <FeaturedProjects />

        <Certification />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
