import type { Meta } from '@storybook/react';
import Image from 'next/image';
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
	const [open, setOpen] = useState(true);
	return (
		<div>
			<Button onClick={() => setOpen(true)}>Test Button</Button>
			<Modal open={open} setOpen={setOpen} className="w-96">
				<div className="relative rounded-xl overflow-hidden">
					<Image
						src="/assets/welcome.png"
						alt="hero"
						width={400}
						height={400}
						draggable={false}
					/>
					<button
						onClick={() => setOpen(false)}
						className="absolute top-3 right-3 bg-white shadow-lg rounded-full p-5 hover:bg-neutral-200 duration-150"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						>
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</button>
				</div>
				<div className="relative p-4 flex flex-col gap-4">
					<div className="flex flex-col gap-1">
						<h1 className="text-lg font-medium">Inscription ou connexion</h1>
						<p className="text-sm font-medium">
							Vous connectez vous permet d utiliser la plateforme et a ses
							fonctionnalites.
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<Button color="berry" fullWidth>
							Continuer
						</Button>
						<div className="relative my-2 w-full h-px bg-neutral-200">
							<span className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white uppercase text-xs font-medium px-2 text-[--color-basic-400]">
								OU
							</span>
						</div>
						<Button variant="outline" fullWidth>
							Connexion avec Google
						</Button>
						<Button variant="outline" fullWidth>
							Connexion avec un numero de telephone
						</Button>
					</div>
				</div>
			</Modal>
		</div>
	);
};
