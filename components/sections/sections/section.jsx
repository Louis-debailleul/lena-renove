import * as React from "react";

import { cn } from "../../../lib/utils";

const Section = React.forwardRef(
  ({ className, children, colors = [], childClassName, ...props }, ref) => {
    // Déterminer les classes de couleur en fonction du nombre de couleurs
    const sectionColor = colors.length >= 1 ? colors[0] : "";
    const firstDivColor = colors.length >= 2 ? colors[1] : "";
    const secondDivColor = colors.length >= 3 ? colors[2] : "";

    return (
      <section
        className={cn(
          "w-full px-4 md:px-6 md:py-16 py-12",
          sectionColor,
          className
        )}
        ref={ref}
        {...props}
      >
        {colors.length >= 2 && (
          <div className={cn("w-1/3 absolute inset-0", firstDivColor)}></div>
        )}

        <div
          className={cn(
            "relative w-full z-10 max-w-screen-2xl mx-auto",
            secondDivColor,
            childClassName
          )}
        >
          {children}
        </div>
      </section>
    );
  }
);
Section.displayName = "Section";

export default Section;
