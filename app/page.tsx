import Image from "next/image";
import LandingPage from "./LandingPage";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  gap-20">
        <LandingPage />
        <Footer />
      </div>
    </main>
  );
}
