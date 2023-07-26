import Container from '@/app/components/Container';
import ListingHead from '@/app/components/listings/ListingHead';
import ListingInfo from '@/app/components/listings/ListingInfo';
import { categories } from '@/app/components/navbar/Categories';
import useLoginModal from '@/app/hooks/useLoginModal';
import { SafeListing, SafeUser } from '@/app/types';
import { Reservation } from '@prisma/client';
import { eachDayOfInterval } from 'date-fns';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';

const initialDateRange = {
	startDate: new Date(),
	endDate: new Date(),
	key:'selection'
}
interface ListingClientProps {
    reservation?: Reservation[];
    listing: SafeListing & {
        user: SafeUser;
    };
    currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
    listing,
	reservation=[],
    currentUser,
}) => {

	const loginModal = useLoginModal();
	const route = useRouter();

	const disabledDates = useMemo(() => 
	{let dates:Date[]=[]
	
		reservation.forEach((reservation:any) => {
			const range = eachDayOfInterval(
				{start: new Date(reservation.start)}
			);
		})
	}
	, [second])
    const category = useMemo(() => {
        return categories.find((item) => {
            item.label === listing.category;
        });
    }, [listing]);

    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <ListingHead
                        title={listing.title}
                        imageSrc={listing.imageSrc}
                        locationValue={listing.locationValue}
                        id={listing.id}
                        currentUser={currentUser}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                        <ListingInfo
                            user={listing.user}
                            category={category}
                            description={listing.description}
                            roomCount={listing.roomCount}
                            guestCount={listing.guestCount}
                            bathroomCount={listing.bathroomCount}
                            locationValue={listing.locationValue}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ListingClient;
