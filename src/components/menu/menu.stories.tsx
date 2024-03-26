import type { Meta } from '@storybook/react';
import { Menu, MenuItem, MenuProps, MenuSeparator } from '.';

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
				<div className="w-52 p-2 overflow-hidden bg-white rounded-2xl shadow-lg ring-1 ring-neutral-200">
					<Story />
				</div>
			</div>
		),
	],
} as Meta<typeof Menu>;

export const Default = (props: MenuProps) => (
	<Menu {...props}>
		<MenuItem className="font-bold">Connexion</MenuItem>
		<MenuItem className="bg-red-500">Inscription</MenuItem>
		<MenuSeparator />
		<MenuItem>Mon compte</MenuItem>
	</Menu>
);
