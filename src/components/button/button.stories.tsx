import type { Meta } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
	title: 'Library/Button',
	component: Button,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="flex items-center justify-center w-full h-full">
				<Story />
			</div>
		),
	],
} as Meta<typeof Button>;

export const Default = (props: ButtonProps) => (
	<Button {...props}>Button</Button>
);
