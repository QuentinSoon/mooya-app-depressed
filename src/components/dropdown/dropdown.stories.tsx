import type { Meta } from '@storybook/react';
import { Button } from '../button';
import { Dropdown, DropdownProps } from './dropdown';
import { DropdownContent } from './dropdown-content';
import { DropdownTrigger } from './dropdown-trigger';

export default {
	title: 'Library/Dropdown',
	component: Dropdown,
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
} as Meta<typeof Dropdown>;

export const Default = (props: DropdownProps) => (
	<Dropdown {...props}>
		<DropdownTrigger>
			<Button color="basic" size="md" variant="solid">
				Test
			</Button>
		</DropdownTrigger>
		<DropdownContent>
			<ul className="px-4 py-2.5 rounded-xl border min-w-10 bg-white">
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		</DropdownContent>
	</Dropdown>
);
