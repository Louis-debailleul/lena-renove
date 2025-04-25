import Service from "../components/sections/service";
import Step from "../components/sections/step";
import Profil from "../components/sections/profil";
import ImgContent from "../components/imgContent";
import Reviews from "../components/sections/reviews";
import Projects from "../components/sections/projects";
import { GradualSpacing } from "../components/animations/gradualSpacing";
export default function Home() {
  return (
    <div className="mx-auto px-4 lg:px-6">
      <ImgContent className="h-[350px] lg:h-[650px]" imgName={"headerhome.jpg"}>
        <h1
          className="bg-black/20  rounded-lg backdrop-blur-sm  p-5 text-6xl mx-auto text-white 
         w-full max-w-screen-md"
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
