import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Avatar from "./Avatar";
import { BIOGRAPHY } from "@/utils/data";
import MyButton from "@/components/MyButton";
/**
 * Props for `Biography`.
 */

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }) => {
  const data = BIOGRAPHY;

  return (
    <Bounded>
      <div className="md:grid-cols-[2fr, 1fr] grid gap-x-8 gap-y-6">
        <Heading as="h1" size="xl" className="col-start-1">
          {data.full_name}
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <p>{data.description}</p>
        </div>
        <MyButton
          href={data.resume_link}
          label={data.resume_text}
          target="_blank"
        />

        <Avatar
          image={data.avatar_link}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;
