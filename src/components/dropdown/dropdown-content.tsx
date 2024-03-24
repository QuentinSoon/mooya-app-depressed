'use client';

import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
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
				{children}
			</PopoverContent>
		);
	}
);
DropdownContent.displayName = 'DropdownContent';

export { DropdownContent };
