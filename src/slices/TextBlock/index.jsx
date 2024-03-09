import { PrismicRichText } from '@prismicio/react';

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
