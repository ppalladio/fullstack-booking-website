'use client';

import useRentModal from '../hooks/useRentModal';
import Modal from './modals/Modal';

const RentModal = () => {
    const rentModal = useRentModal();

    return (
        <Modal
            isOpen={rentModal.isOpen}
            title="airbnb your home!"
            onClose={rentModal.onClose}
            onSubmit={rentModal.onClose}
            actionLabel="Submit"
        />
    );
};

export default RentModal;
