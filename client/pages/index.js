import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Works from "./component/Works";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Nav from "./component/Nav";

export default function Home() {
  return (
    <main className="bg-[#222831]">
      <section class="bg-center bg-no-repeat bg-[url('/heroBg.svg')] bg-blend-multiply">
        <Nav />
        <Hero />
      </section>
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}
