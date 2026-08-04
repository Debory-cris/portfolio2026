import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-[var(--background)]">
        <Hero />
      </main>
    </>
  );
}