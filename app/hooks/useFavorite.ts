import { useRouter } from 'next/navigation';
import { SafeUser } from '../types';
import useLoginModal from './useLoginModal';
import { useCallback, useMemo } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

interface IUseFavoriteProps {
    listingId: string;
    currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavoriteProps) => {
    const route = useRouter();
    const loginModal = useLoginModal();

    const hasFavorited = useMemo(() => {
        const list = currentUser?.favoriteIds || [];
        return list.includes(listingId);
    }, [listingId, currentUser]);

    const toggleFavorite = useCallback(
        async (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();

            if (!currentUser) {
                return loginModal.onOpen();
            }

            try {
                let request;
                if (hasFavorited) {
                    request = () => {
                        axios.delete(`api/favorites/${listingId}`);
                    };
                } else {
                    request = () => {
                        axios.post(`api/favorites/${listingId}`);
                    };
                }
                await request();
                route.refresh();
                toast.success('Success');
            } catch (error) {
                toast.error('Something Went Wrong');
            }
        },
        [currentUser, listingId, loginModal, route, hasFavorited],
    );
    return {
        hasFavorited,
        toggleFavorite,
    };
};

export default useFavorite;
