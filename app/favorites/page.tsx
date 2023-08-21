import getCurrentUser from '../actions/getCurrentUser';
import getFavoriteListings from '../actions/getFavoriteListings';
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
import FavoriteClient from './FavoriteClient';

const ListingPage = async () => {
    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No Favorites Found"
                    subtitle="looks like you have favorites listings"
                />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <FavoriteClient listings={listings} currentUser={currentUser} />
        </ClientOnly>
    );
};
export default ListingPage;
