'use client';

import { cn } from '@/libs/cn';
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import './navbar.scss';

type NavbarProps = PropsWithChildren<{}>;

type UseNavbarProps = Omit<HTMLAttributes<HTMLDivElement>, keyof NavbarProps> &
	NavbarProps;

const Navbar = forwardRef<HTMLButtonElement, UseNavbarProps>(
	({ children }, ref) => {
		return <div className={cn('navbar')}>{children}</div>;
	}
);
Navbar.displayName = 'Navbar';

export { Navbar };

export type { NavbarProps, UseNavbarProps };
