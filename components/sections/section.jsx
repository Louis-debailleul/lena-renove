import * as React from "react";

import { cn } from "../../lib/utils";

const Section = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <section
      className={cn("max-w-screen-xl mx-auto py-12", className)}
      ref={ref}
      {...props}
    >
      {children}
    </section>
  );
});
Section.displayName = "Section";

export default Section;
