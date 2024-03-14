"use client";

import Heading from "@/components/Heading";
import React, { useEffect, useRef } from "react";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import Bounded from "@/components/Bounded";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TECHLIST } from "@/utils/data";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `TechList`.
 */

/**
 * Component for "TechList" Slices.
 */
const TechList = () => {
  const data = TECHLIST;
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          markers: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });
      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
        },
      );
    }, component);
    return () => ctx.revert();
  });

  return (
    <section className="overflow-hidden" ref={component}>
      <Bounded as="div">
        <Heading size="xl" as="h2">
          {data.title}
        </Heading>
      </Bounded>
      {data.items.map(({ tech_name, tech_color }, index) => (
        <div
          key={index}
          className="tech-row mb-4 flex items-center justify-center gap-4 text-slate-700"
          aria-label={tech_name || undefined}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className="text-item text-8xl font-extrabold uppercase tracking-tighter"
                style={{
                  color: index === 7 && tech_color ? tech_color : "inherit",
                }}
              >
                {tech_name}
              </span>
              <span className="text-3xl">
                {tech_name === "React" ? (
                  <FaReact />
                ) : tech_name === "Next.js" ? (
                  <TbBrandNextjs />
                ) : tech_name === "Tailwind" ? (
                  <SiTailwindcss />
                ) : (
                  <MdOutlineSettingsApplications />
                )}
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;
