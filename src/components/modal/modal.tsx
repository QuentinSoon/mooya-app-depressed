'use client';

import { cn } from '@/libs/cn';
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { BackdropProps } from '../overlay';
import { Overlay } from '../overlay/overlay';
import { PopoverPlacementsProps } from '../popover/types';
import './modal.scss';

type ModalProps = PropsWithChildren<{
	open?: boolean;
	setOpen?: (newValue: boolean) => void;
	backdrop?: BackdropProps;
	placement?: PopoverPlacementsProps;
}>;

type UseModalProps = Omit<HTMLAttributes<HTMLDivElement>, keyof ModalProps> &
	ModalProps;

const Modal = forwardRef<HTMLButtonElement, UseModalProps>(
	(
		{
			open = false,
			setOpen = () => {},
			backdrop,
			placement,
			children,
			className,
			...otherProps
		},
		ref
	) => {
		return (
			<div>
				{open && (
					<Overlay
						open={open}
						setOpen={setOpen}
						backdrop={backdrop}
						placement={placement}
					>
						<div
							className={cn(
								'absolute z-10 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2',
								className
							)}
						>
							{children}
						</div>
					</Overlay>
				)}
			</div>
		);
	}
);
Modal.displayName = 'Modal';

export { Modal };

export type { ModalProps, UseModalProps };
