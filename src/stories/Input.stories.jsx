import { Input, widthStoriesController, colorStoriesController } from '../lib';

export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		width: {
			options: Object.keys(widthStoriesController),
			control: {
				type: 'select',
				labels: widthStoriesController,
			},
		},
		color: {
			options: Object.keys(colorStoriesController),
			control: {
				type: 'select',
				labels: colorStoriesController,
			},
		},
	},
	args: {
		error: false,
		width: 'fill',
	},
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Primary Label',
	name: 'primary',
	color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Secondary Label',
	name: 'secondary',
	color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	label: 'Tertiary Label',
	name: 'tertiary',
	color: 'tertiary',
};

