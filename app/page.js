import Service from "../components/sections/service";
import Step from "../components/sections/step";
import Profil from "../components/sections/profil";
import ImgContent from "../components/imgContent";
import Reviews from "../components/sections/reviews";
import Projects from "../components/sections/projects";
import { GradualSpacing } from "../components/animations/gradualSpacing";

export default function Home() {
  return (
    <div className="mx-auto px-1 md:px-4 lg:px-6">
      <ImgContent className="lg:h-[650px]" imgName={"headerhome.jpg"}>
        <h1
          className="text-6xl mx-auto text-white my-28
        pt-12 w-full max-w-screen-md"
        >
          <GradualSpacing text="Ensemble, redonnons du style au durable !" />
        </h1>
      </ImgContent>
      <Service />
      <Profil />
      <Projects />
      <Reviews />
      <Step />
    </div>
  );
}
