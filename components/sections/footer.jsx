import Image from "next/image";
import MultiStepForm from "../quiz/multiStepForm";
import Section from "./section";
export default function Footer() {
  return (
    <footer className="relative overflow-x-hidden">
      <Section className="pb-0 lg:pb-28 max-w-full">
        <div className="absolute z-0 -top[10px} -right-[100px] h-[598px] w-[423px]">
          <Image
            src="/images/pinceau.png"
            alt="Rouleau de peinture"
            width={423}
            height={598}
            priority
          />
        </div>
        <div
          id="contact"
          className="flex px-4 flex-col lg:flex-row items-center justify-center lg:px-6"
        >
          <div className="bg-primary shadow rounded-xl overflow-hidden relative z-30 py-6 px-3 md:p-12">
            <div className="flex justify-center max-w-[600px] mx-auto">
              <MultiStepForm />
            </div>
          </div>
          <div className="rounded-xl  hidden lg:block overflow-hidden relative z-20 -left-12">
            <Image
              src="/images/map.png"
              alt="map"
              width={500}
              height={500}
              className="mx-auto w-full"
            />
            <div className="px-16">
              <p className="text-gray-500">
                En dehors de cette zone, je facture mes temps de déplacement.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-secondary static lg:absolute bottom-0 left-0 right-0 py-10 px-6 lg:h-80 z-10 rounded-t-xl mt-10">
          <div className="lg:hidden">
            <Image
              src="/images/map.png"
              alt="map"
              width={500}
              height={500}
              className="mx-auto rounded-xl"
            />
            <div className="px-14">
              <p className="text-center text-gray-500">
                En dehors de cette zone, je facture mes temps de déplacement.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}
