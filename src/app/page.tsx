'use client';

import { Button } from '@/components/button';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();
	return (
		<main className="h-screen w-screen flex flex-col">
			{/* <div className="h-16 border flex flex-row items-center justify-between px-8 z-10">
				<div className="flex flex-row items-center gap-4">
					<div>
						<Image src={LOGO} height={32} alt="logo" />
					</div>
					<div className="font-semibold">Mooya</div>
				</div>
				<div>
					<Popover placement="bottom-right">
						<PopoverTrigger>
							<Button>Mon Compte</Button>
						</PopoverTrigger>
						<PopoverContent>
							<ul>
								<li>Bientot ...</li>
							</ul>
						</PopoverContent>
					</Popover>
				</div>
			</div> */}
			<div className="grow flex items-center justify-center flex-col space-y-0.5">
				<div className="font-semibold">
					Des ajustements sont en cours sur la plateforme.
				</div>
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
