import { Modal } from '@/components/modal/modal';

export const LogModal = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: (newValue: boolean) => void;
}) => {
	return (
		<Modal open={open} setOpen={setOpen} className="p-4 w-96">
			Test
		</Modal>
	);
};
