'use client';

import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { Menu } from '../menu/menu';
import { PopoverContent } from '../popover/popover-content';

export type DropdownContentProps = PropsWithChildren<{}>;

export type UseDropdownContentProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof DropdownContentProps
> &
	DropdownContentProps;

const DropdownContent = forwardRef<HTMLDivElement, UseDropdownContentProps>(
	({ children, className }, ref) => {
		return (
			<PopoverContent className={className ?? 'popover-defaultContent'}>
				<Menu>{children}</Menu>
			</PopoverContent>
		);
	}
);
DropdownContent.displayName = 'DropdownContent';

export { DropdownContent };
