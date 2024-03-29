import type { Meta } from '@storybook/react';
import Image from 'next/image';
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

export const Default = (props: NavbarProps) => (
	<Navbar {...props}>
		<div className="inline-flex items-center gap-4">
			<Image src={LOGO} height={32} alt="logo" />
			<h1 className="font-semibold text-base text-[--color-berry-700]">
				Espace Locataire
			</h1>
		</div>
		<div>
			<Dropdown placement="bottom-right">
				<DropdownTrigger>
					<Button variant="outline" rounded="full">
						Mon Compte
					</Button>
				</DropdownTrigger>
				<DropdownContent>
					<DropdownItem className="font-medium">Profile</DropdownItem>
					<DropdownItem className="font-medium">Compte</DropdownItem>
					<DropdownItem className="font-medium">Obtenir de l`aide</DropdownItem>
					<DropdownSeparator />
					<DropdownItem>Français (FR)</DropdownItem>
					<DropdownItem>€ EUR</DropdownItem>
					<DropdownSeparator />
					<DropdownItem>Parrainer un hôte</DropdownItem>
					<DropdownItem color="poppy">Déconnexion</DropdownItem>{' '}
				</DropdownContent>
			</Dropdown>
		</div>
	</Navbar>
);
