import Hero from "@/components/home/hero";
import HomeSections from "./sections";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <div className="mx-auto max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mt-8 relative space-y-16 pb-16">
        <HomeSections />
      </div>
    </main>
  );
}
