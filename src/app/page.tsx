import Image from 'next/image';

import LOGO from '../../public/arrière-plan.png';

export default function Home() {
	return (
		<main className="h-screen w-screen flex flex-col">
			<div className="h-16 border flex flex-row items-center gap-4 px-8">
				<div>
					<Image src={LOGO} height={32} alt="logo" />
				</div>
				<div className="font-semibold">Mooya</div>
			</div>
			<div className="grow flex items-center justify-center flex-col">
				<div className="font-semibold">Mooya</div>
				<div>Site en construction</div>
				<div>Update: 1.0.3 (GoogleAnalytics)</div>
			</div>
		</main>
	);
}
