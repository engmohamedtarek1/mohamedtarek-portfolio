import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import AnimatedCursor from "react-animated-cursor";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="11,153,88"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "body",
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          "canvas",
          "div",
          "section",
          "footer",
          "ul",
        ]}
      />
      <SliceZone slices={page.data.slices} components={components} />;
    </>
  );
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
