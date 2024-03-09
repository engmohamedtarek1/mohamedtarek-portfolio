import ContentList from "./ContentList";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PROJECTS } from "@/utils/data";
/**
 * Props for `BlogPostIndex`.
 */

/**
 * Component for "BlogPostIndex" Slices.
 */
const BlogPostIndex = async () => {
  const data = PROJECTS;

  return (
    <Bounded>
      <Heading size="xl" className="mb-8">
        {data.title}
      </Heading>
      <div className="prose prose-xl prose-invert mb-10">
        {data.description}
      </div>
      <ContentList
        items={data.items}
        viewMoreText={data.view_more_text}
      />
    </Bounded>
  );
};

export default BlogPostIndex;
