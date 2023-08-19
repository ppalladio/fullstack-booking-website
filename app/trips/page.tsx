import EmptyState from '../components/EmptyState';
import ClientOnly from '../components/ClientOnly';
import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';
import TripsClient from './TripsClient';
const TripsPage = async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return (
            <ClientOnly>
                <div className="capitalize">
                    <EmptyState title="unauthorized" subtitle="please login" />
                </div>
            </ClientOnly>
        );
    }

    const reservations = await getReservations({
        userId: currentUser.id,
    });
    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <div className="capitalize">
                    <EmptyState
                        title="no trips found"
                        subtitle="looks like you have not reserved any trips"
                    />
                </div>
            </ClientOnly>
        );
    }

	return (
		<ClientOnly>
			<TripsClient reservations={reservations} currentUser={currentUser} />
		</ClientOnly>
	)
};
export default TripsPage;