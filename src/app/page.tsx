import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Feed } from "./components/Feed/Feed";

export default function Home() {
  return (
    <section className=" h-dvh flex flex-col justify-between">
      <Header />
      <Feed/>
      <Footer/>
    </section>
  );
}
