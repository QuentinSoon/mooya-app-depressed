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
		return <PopoverContent className="w-32">{children}</PopoverContent>;
	}
);
DropdownContent.displayName = 'DropdownContent';

export { DropdownContent };
