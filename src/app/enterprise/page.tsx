'use client';
import MESSAGES from '../../../messages.json';

export default function Home() {
	const DEBUG = [
		{
			title: 'Test',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
				</svg>
			),
		},
		{
			title: 'Test2',
		},
	];
	return (
		<div>
			<div className="bg-gradient-to-r from-indigo-800 to-pink-600 py-14 px-16 flex flex-col gap-4">
				<h3 className="font-medium text-left text-white text-2xl">
					{MESSAGES.HELLO},
				</h3>
				<div className="flex flex-row gap-5">
					{DEBUG.map((item, index) => (
						<button
							key={index}
							className="relative bg-white drop-shadow hover:bg-neutral-100 w-fit h-16 rounded-2xl p-4 min-w-64 text-left overflow-hidden"
						>
							<div className="flex flex-row items-center h-full gap-4">
								<span className="">{item.icon}</span>
								<span className="grow">{item.title}</span>
							</div>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
