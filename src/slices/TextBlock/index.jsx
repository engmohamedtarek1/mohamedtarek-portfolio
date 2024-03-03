import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `TextBlock`.
 */
/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }) => {
	return (
		<div className="max-w-prose">
			<PrismicRichText field={slice.primary.text} />
		</div>
	);
};

export default TextBlock;
