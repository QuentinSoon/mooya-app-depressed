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
			<ul>
				<li className="px-2 py-1.5 hover:bg-neutral-200 rounded-lg cursor-pointer">
					Item 1
				</li>
				<li className="px-2 py-1.5 hover:bg-neutral-200 rounded-lg cursor-pointer">
					Item 1
				</li>
				<li className="px-2 py-1.5 hover:bg-neutral-200 rounded-lg cursor-pointer">
					Item 1
				</li>
			</ul>
		</DropdownContent>
	</Dropdown>
);
