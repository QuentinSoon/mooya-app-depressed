import type { Meta } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
	title: 'Library/Button',
	component: Button,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="flex items-center justify-center w-full h-full">
				<Story />
			</div>
		),
	],
} as Meta<typeof Button>;

export const Default = (props: ButtonProps) => (
	<Button {...props}>Button</Button>
);

export const Variants = (props: ButtonProps) => (
	<div className="flex flex-row items-center gap-4">
		<Button {...props} variant="solid">
			Button
		</Button>
		<Button {...props} variant="outline">
			Button
		</Button>
	</div>
);

export const Sizes = (props: ButtonProps) => (
	<div className="flex flex-row items-center gap-4">
		<Button {...props} size="sm">
			Button
		</Button>
		<Button {...props} size="md">
			Button
		</Button>
		<Button {...props} size="lg">
			Button
		</Button>
	</div>
);

export const Rounded = (props: ButtonProps) => (
	<div className="flex flex-row items-center gap-4">
		<Button {...props} rounded="full">
			Button
		</Button>
		<Button {...props} rounded="lg">
			Button
		</Button>
		<Button {...props} rounded="md">
			Button
		</Button>
		<Button {...props} rounded="sm">
			Button
		</Button>
		<Button {...props} rounded="none">
			Button
		</Button>
	</div>
);

export const Colors = (props: ButtonProps) => (
	<div className="flex flex-row items-center gap-4">
		<Button {...props} color="basic">
			Button
		</Button>
		<Button {...props} color="berry">
			Button
		</Button>
		<Button {...props} color="paradiso">
			Button
		</Button>
	</div>
);
