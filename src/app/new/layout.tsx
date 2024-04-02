import { Button } from '@/components/button';
import type { Metadata } from 'next';
import './new.scss';

export const metadata: Metadata = {
	title: 'Créer une annonce - Mooya',
	description:
		'Mooya est une plateforme de location et gestion de biens immobiliers nouvelle génération. Trouvez votre prochain logement en quelques clics !',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="h-screen w-screen grid grid-cols-2">
			<div className="bg-color-gradient-btn"></div>
			<div className="flex flex-col">
				<div className="border-b h-16 flex flex-row items-center justify-between px-4">
					<div></div>
					<div>
						<Button variant="faded" size="sm" className="font-medium">
							Sortir
						</Button>
					</div>
				</div>
				<div className="grow"></div>
				<div className="border-t-2 h-16 flex flex-row items-center justify-between px-4">
					<Button variant="light">Retour</Button>
					<Button>Continuer</Button>
				</div>
			</div>
		</div>
	);
}
