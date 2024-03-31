import type { Meta } from '@storybook/react';
import { Input, InputProps } from '.';

export default {
	title: 'Components/Input',
	component: Input,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<div className="flex items-center justify-center w-full h-full">
				<Story />
			</div>
		),
	],
} as Meta<typeof Input>;

export const Default = (props: InputProps) => (
	<Input placeholder="Entrez une adresse email" />
);

export const Variants = (props: InputProps) => (
	<div className="flex flex-col items-center gap-4">
		<Input placeholder="Entrez une adresse email" variant="default" />
		<Input placeholder="Entrez une adresse email" variant="floating" />
		<Input placeholder="Entrez une adresse email" variant="ifta" />
	</div>
);
