import Nav from "./component/Nav";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Works from "./component/Works";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="flex h-screen flex-col w-full overflow-x-hidden overflow-y-scroll">
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}
