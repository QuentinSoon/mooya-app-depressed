import type { Meta } from '@storybook/react';
import { Avatar, AvatarProps } from '.';

export default {
	title: 'Components/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="flex items-center justify-center w-full h-full">
				<Story />
			</div>
		),
	],
} as Meta<typeof Avatar>;

export const Default = (props: AvatarProps) => <Avatar {...props} />;
