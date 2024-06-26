import { NavbarHosting } from '@/library/navbar/navbar.stories';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Espace locataire - Mooya',
	description:
		'Mooya est une plateforme de location et gestion de biens immobiliers nouvelle génération. Trouvez votre prochain logement en quelques clics !',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<NavbarHosting />
			{children}
		</div>
	);
}
