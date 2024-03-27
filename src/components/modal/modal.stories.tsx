import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../button';
import { Modal, ModalProps } from './modal';

export default {
	title: 'Library/Modal',
	component: Modal,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => {
			const [open, setOpen] = useState(false);
			console.log(open);
			return (
				<div className="flex items-center justify-center w-full h-full">
					<Story />
				</div>
			);
		},
	],
} as Meta<typeof Modal>;

export const Default = (props: ModalProps) => {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Button onClick={() => setOpen(true)}>Test Button</Button>
			<Modal open={open} setOpen={setOpen} className="p-4 w-48">
				Test
			</Modal>
		</div>
	);
};
