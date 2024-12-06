import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { Blog } from "@/components/blog";
import { Clients } from "@/components/clients";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Skills />
      <Stats />
      <Testimonials />
      <Blog />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
