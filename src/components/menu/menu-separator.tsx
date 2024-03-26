'use client';

import { LiHTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { useMenuContext } from './menu-context';
import './menu.scss';

export type MenuSeparatorProps = PropsWithChildren<{}>;

export type UseMenuSeparatorProps = Omit<
	LiHTMLAttributes<HTMLLIElement>,
	keyof MenuSeparatorProps
> &
	MenuSeparatorProps;

const MenuSeparator = forwardRef<HTMLLIElement, UseMenuSeparatorProps>(
	({ children, className }, ref) => {
		const context = useMenuContext();
		return <li className="menu-separator" />;
	}
);
MenuSeparator.displayName = 'MenuSeparator';

export { MenuSeparator };
