import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <section class="bg-center bg-no-repeat bg-[url('/heroBg.svg')] bg-blend-multiply">
      {children}
    </section>
  );
}
