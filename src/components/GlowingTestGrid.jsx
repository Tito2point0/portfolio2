"use client";

import PropTypes from "prop-types"; // ✅ Corrected import (uppercase P)
import { Code, UploadCloud, Database, Monitor, ShieldCheck } from "lucide-react"; // ✅ Corrected icons
import { GlowingEffect } from "./ui/glowingEffect"; // ✅ Import glowing effect

export default function GlowingEffectDemoSecond() {
  return (
    <ul className="grid pt-20 grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Code className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="TypeScript & Scalable Code"
        description="Used TypeScript to enforce type safety, catch errors early, and improve scalability in React and backend projects."
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<UploadCloud className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="CI/CD & Web Deployment"
        description="Automated deployments with Vercel, Netlify, and GitHub Actions for fast, reliable updates and seamless production releases."
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Monitor className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="React & Next.js"
        description="Built highly responsive UIs with React, leveraging Next.js for server-side rendering (SSR), SEO improvements, and optimized performance."
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Database className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Backend & API Development"
        description="Designed and optimized RESTful APIs with Node.js, Express, and Knex.js, ensuring scalability and efficient data handling."
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<ShieldCheck className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Security & Best Practices"
        description="Implemented JWT authentication, API rate limiting, and secure coding practices to protect applications from exploits."
      />
    </ul>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        {/* ✅ Glowing Effect Applied to Box */}
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-black dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

// ✅ PropTypes Validation
GridItem.propTypes = {
  area: PropTypes.string, // Ensures `area` is a string
  icon: PropTypes.node.isRequired, // Ensures `icon` is a valid React node
  title: PropTypes.string.isRequired, // Ensures `title` is a required string
  description: PropTypes.string.isRequired, // Ensures `description` is a required string
};

// ✅ Export for use in other components
export { GridItem };
