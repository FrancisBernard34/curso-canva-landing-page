import { Benefits } from "./components/Benefits";
import { Hero } from "./components/Hero";
import { Indications } from "./components/Indications";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Indications />
    </main>
  );
}
