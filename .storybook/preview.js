import { GlobalStylesWrapper } from '../src/lib';

export const decorators = [
	(Story) => (
		<GlobalStylesWrapper>
			<Story />
		</GlobalStylesWrapper>
	),
];
