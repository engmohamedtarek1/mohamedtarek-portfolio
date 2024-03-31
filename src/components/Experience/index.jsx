import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { EXPERIENCE } from "@/utils/data";
/**
 * Props for `Experience`.
 */
/**
 * Component for "Experience" Slices.
 */
const Experience = () => {
  const data = EXPERIENCE;

  return (
    <Bounded>
      <Heading as="h3" size="lg">
        {data.title}
      </Heading>
      {data.items.map((item, index) => (
        <div key={index} className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            {item.title}
          </Heading>

          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>{item.date}</span>{" "}
            <span className="mx-2 text-3xl font-extralight">/</span>{" "}
            <span>{item.company}</span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Bounded>
  );
};

export default Experience;
