'use client';

import type { Meta } from '@storybook/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LOGO from '../../../public/logo.png';
import { Button } from '../button';
import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownSeparator,
	DropdownTrigger,
} from '../dropdown';
import { Navbar, NavbarProps } from './navbar';

export default {
	title: 'Components/Navbar',
	component: Navbar,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [(Story) => <Story />],
} as Meta<typeof Navbar>;

export const NavbarHosting = (props: NavbarProps) => {
	const router = useRouter();
	return (
		<Navbar {...props}>
			<div
				className="inline-flex items-center gap-4"
				onClick={() => router.push('/')}
			>
				<Image src={LOGO} height={32} alt="logo" />
				<h1 className="font-semibold text-base text-[--color-berry-700]">
					Espace Locataire
				</h1>
			</div>
			<div className="inline-flex items-center justify-center">
				<Button variant="light" rounded="full">
					Aujourdhui
				</Button>
				<Button variant="light" rounded="full">
					Messages
				</Button>
				<Button variant="light" rounded="full">
					Informations
				</Button>
				<Button variant="light" rounded="full">
					Calendrier
				</Button>
				<Dropdown>
					<DropdownTrigger>
						<Button
							variant="light"
							rounded="full"
							endContent={
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="m6 9 6 6 6-6" />
								</svg>
							}
						>
							Menu
						</Button>
					</DropdownTrigger>
					<DropdownContent variant="flat" size="md" color="basic">
						<DropdownItem className="font-medium">Dossiers</DropdownItem>
						<DropdownItem className="font-medium">Réservations</DropdownItem>
						<DropdownItem className="font-medium">
							Mon dossier Locataire
						</DropdownItem>
						<DropdownSeparator />
						<DropdownItem>Guides</DropdownItem>
						<DropdownItem>Historique des transactions</DropdownItem>
						<DropdownItem>Forum de la communauté</DropdownItem>
					</DropdownContent>
				</Dropdown>
			</div>
			<div>
				<Dropdown placement="bottom-right">
					<DropdownTrigger>
						<Button variant="outline" rounded="full">
							Mon Compte
						</Button>
					</DropdownTrigger>
					<DropdownContent variant="flat" size="md" color="basic">
						<DropdownItem className="font-medium">Profile</DropdownItem>
						<DropdownItem className="font-medium">Compte</DropdownItem>
						<DropdownItem className="font-medium">
							Obtenir de l`aide
						</DropdownItem>
						<DropdownSeparator />
						<DropdownItem>Français (FR)</DropdownItem>
						<DropdownItem>€ EUR</DropdownItem>
						<DropdownSeparator />
						<DropdownItem>Parrainer un hôte</DropdownItem>
						<DropdownItem color="poppy">Déconnexion</DropdownItem>
					</DropdownContent>
				</Dropdown>
			</div>
		</Navbar>
	);
};
