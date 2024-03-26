import type { Meta } from '@storybook/react';
import { Menu, MenuItem, MenuProps } from '.';

export default {
	title: 'Library/Menu',
	component: Menu,
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
} as Meta<typeof Menu>;

export const Default = (props: MenuProps) => (
	<Menu {...props}>
		<MenuItem>Coucou</MenuItem>
		<MenuItem>Coucou</MenuItem>
		<MenuItem>Coucou</MenuItem>
	</Menu>
);
