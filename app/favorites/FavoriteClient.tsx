import Container from '../components/Container';
import Heading from '../components/Heading';
import ListingCard from '../components/listings/ListingCard';
import { SafeListing, SafeUser } from '../types';

interface FavoriteClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}
const FavoriteClient: React.FC<FavoriteClientProps> = ({
    listings,
    currentUser,
}) => {
    return (
        <Container>
            <Heading
                title="Favorites"
                subtitle="list of places you added to favorites"
            />
            <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {listings.map((listing) => (
                    <ListingCard
                        currentUser={currentUser}
                        data={listing}
                        key={listing.id}
                    />
                ))}
            </div>
        </Container>
    );
};
export default FavoriteClient;
