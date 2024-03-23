'use client';
import Image from 'next/image';

import { Button } from '@/components/button';
import { useRouter } from 'next/navigation';
import LOGO from '../../public/arrière-plan.png';

export default function Home() {
	const router = useRouter();
	return (
		<main className="h-screen w-screen flex flex-col">
			<div className="h-16 border flex flex-row items-center gap-4 px-8">
				<div>
					<Image src={LOGO} height={32} alt="logo" />
				</div>
				<div className="font-semibold">Mooya</div>
			</div>
			<div className="grow flex items-center justify-center flex-col space-y-0.5">
				<div className="font-semibold">Mooya</div>
				<div>Site en construction</div>
				<div>Update: 1.0.5 (Component Builder)</div>
				<div className="flex flex-row gap-3 pt-0.5">
					<Button
						color="foreground"
						onClick={() =>
							router.push('https://www.instagram.com/mooyafrance/')
						}
					>
						Instagram
					</Button>
					<Button
						color="foreground"
						onClick={() => router.push('https://twitter.com/MooyaFrance/')}
					>
						X / Twitter
					</Button>
				</div>
			</div>
		</main>
	);
}
