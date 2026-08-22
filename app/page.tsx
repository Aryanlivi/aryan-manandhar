import Intro from '@/components/layout/Intro/Intro';
import About from "@/components/layout/About/About";
import Experience from "@/components/layout/Experience/Experience";
import Software from "@/components/software/Software";

export default function HomePage() {
  return (
    <div className="App">
      <div className="root-container">
        <Intro/>
        <Experience/>
        <Software/>
      </div>
    </div>
  );
}