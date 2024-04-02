'use client';

import { cn } from '@/libs/cn';
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import './card.scss';

export type CardProps = PropsWithChildren<{}>;

export type UseCardProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof CardProps
> &
	CardProps;

const Card = forwardRef<HTMLDivElement, UseCardProps>(({ children }, ref) => {
	return <div className={cn('card')}>{children}</div>;
});
Card.displayName = 'Card';

export { Card };
