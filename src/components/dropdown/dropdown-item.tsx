'use client';

import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { MenuItem } from '../menu/menu-item';

export type DropdownItemProps = PropsWithChildren<{}>;

export type UseDropdownItemProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof DropdownItemProps
> &
	DropdownItemProps;

const DropdownItem = forwardRef<HTMLDivElement, UseDropdownItemProps>(
	({ children, className }, ref) => {
		return <MenuItem>{children}</MenuItem>;
	}
);
DropdownItem.displayName = 'DropdownItem';

export { DropdownItem };
