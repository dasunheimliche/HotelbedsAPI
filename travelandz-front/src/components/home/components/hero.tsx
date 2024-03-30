import heroImage from "@/assets/images/hero.png";
import HeroForm from "./hero-form";

export default function Hero() {
  return (
    <header className="w-full h-[100vh]">
      <img
        className="w-full h-[100vh] absolute object-cover inset-0 z-[-1]"
        src={heroImage}
        alt="hero"
      />
      <HeroForm />
    </header>
  );
}
