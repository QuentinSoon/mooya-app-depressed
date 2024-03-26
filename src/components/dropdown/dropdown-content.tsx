'use client';

import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { MenuColorProps, MenuSizeProps, MenuVariantProps } from '../menu';
import { Menu } from '../menu/menu';
import { PopoverContent } from '../popover/popover-content';

export type DropdownContentProps = PropsWithChildren<{
	/**
	 * The variant of the menu.
	 * @default solid
	 */
	variant?: MenuVariantProps;
	/**
	 * The size of the menu.
	 * @default sm
	 */
	size?: MenuSizeProps;
	/**
	 * The color of the menu.
	 * @default basic
	 */
	color?: MenuColorProps;
}>;

export type UseDropdownContentProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof DropdownContentProps
> &
	DropdownContentProps;

const DropdownContent = forwardRef<HTMLDivElement, UseDropdownContentProps>(
	(
		{ variant = 'flat', size = 'sm', color = 'basic', children, className },
		ref
	) => {
		return (
			<PopoverContent className={className ?? 'popover-defaultContent'}>
				<Menu variant={variant} size={size} color={color}>
					{children}
				</Menu>
			</PopoverContent>
		);
	}
);
DropdownContent.displayName = 'DropdownContent';

export { DropdownContent };
