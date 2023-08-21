'use client';
import { useCallback, useState } from 'react';
import Container from '../components/Container';
import Heading from '../components/Heading';
import { SafeListing, SafeUser } from '../types';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import ListingCard from '../components/listings/ListingCard';
interface PropertiesClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}
const PropertiesClient: React.FC<PropertiesClientProps> = ({
    listings,
    currentUser,
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');
    const onCancel = useCallback(
        (id: string) => {
            setDeletingId(id);
            axios
                .delete(`/api/listings/${id}`)
                .then(() => {
                    toast.success('Listing deleted');
                    router.refresh();
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err?.response?.data?.error);
                })
                .finally(() => {
                    setDeletingId('');
                });
        },
        [router],
    );

    return (
        <Container>
            <Heading
                title="Properties"
                subtitle="List of your Properties"
            />
            <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
                {listings.map((listing) => (
                    <ListingCard
                        key={listing.id}
                        data={listing}
                        actionId={listing.id}
                        onAction={onCancel}
                        disabled={deletingId === listing.id}
                        actionLabel="Delete Property"
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    );
};
export default PropertiesClient;
