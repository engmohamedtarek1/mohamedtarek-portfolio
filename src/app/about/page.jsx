import Biography from "@/components/Biography";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import TechList from "@/components/TechList";
import React from "react";

export const metadata = {
  title: "About | Mohamed Tarek",
};

const page = () => {
  return (
    <>
      <Biography />
      <TechList />
      <Experience />
      <Education />
    </>
  );
};

export default page;
