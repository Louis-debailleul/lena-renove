import Section from "./section";

export default function EtudesCoverstyle() {
  return (
    <Section className="bg-primary-100">
      <div className="mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
          Des études réalisées par Coverstyle
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Carte Hôtels */}
        <div className="bg-white rounded-sm shadow-sm p-6 md:p-8 lg:p-10">
          <div className="mb-8">
            <h3 className="font-semibold text-primary text-xl md:text-2xl lg:text-3xl font-playfair">
              Pour les hôtels
            </h3>
          </div>

          <div className="space-y-6">
            <div className="bg-primary/5 rounded-sm p-4 md">
              <div className="text-xl md:text-2xl  text-primary mb-2">84%</div>
              <p className="text-gray-700 leading-relaxed">
                des utilisateurs considèrent les avis des clients aussi
                importants que ceux de leurs proches.
              </p>
            </div>

            <div className="bg-primary/5 rounded-sm p-4 md">
              <div className="text-xl md:text-2xl  text-primary mb-2">90%</div>
              <p className="text-gray-700 leading-relaxed">
                des voyageurs sont influencés par les notes des hôtels sur
                internet avant de réserver.
              </p>
            </div>

            <div className="bg-primary/5 rounded-sm p-4 md">
              <div className="text-xl md:text-2xl  text-primary mb-2">94%</div>
              <p className="text-gray-700 leading-relaxed">
                de clients potentiels perdus suite à un avis négatif.
              </p>
            </div>

            <div className="bg-primary/5 rounded-sm p-4 md">
              <div className="text-xl md:text-2xl  text-primary mb-2">11%</div>
              <p className="text-gray-700 leading-relaxed">
                est l'augmentation de votre chiffre d'affaires par point gagné
                sur TripAdvisor.
              </p>
            </div>
          </div>
        </div>

        {/* Carte Magasins */}
        <div className="bg-white rounded-sm shadow-sm p-6 md:p-8 lg:p-10">
          <div className="mb-8">
            <h3 className="font-semibold text-primary text-xl md:text-2xl lg:text-3xl font-playfair">
              Pour les magasins
            </h3>
          </div>

          <div className="space-y-6">
            <div className="bg-primary/5 rounded-sm p-4 md:p-6">
              <div className="text-xl md:text-2xl  text-primary mb-2">
                6 ans
              </div>
              <p className="text-gray-700 leading-relaxed">
                le délai moyen entre deux rénovations des magasins.
              </p>
            </div>

            <div className="bg-primary/5 rounded-sm p-4 md">
              <div className="text-xl md:text-2xl  text-primary mb-2">
                12 semaines
              </div>
              <p className="text-gray-700 leading-relaxed">
                la durée moyenne pour un remodelage "classique" d'un magasin.
              </p>
            </div>

            <div className="bg-primary/5 rounded-sm p-4 md">
              <div className="text-xl md:text-2xl  text-primary mb-2">70%</div>
              <p className="text-gray-700 leading-relaxed">
                des premières ventes sont basées sur l'attrait de la façade.
              </p>
            </div>

            <div className="bg-primary/5 rounded-sm p-4 md">
              <div className="text-xl md:text-2xl  text-primary mb-2">40%</div>
              <p className="text-gray-700 leading-relaxed">
                d'augmentation moyenne des ventes après la rénovation d'un
                magasin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
