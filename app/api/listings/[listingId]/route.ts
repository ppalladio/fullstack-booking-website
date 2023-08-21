import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

interface ParamsProps {
    listingId: string;
}
export async function DELETE(
    request: Request,
    { params }: { params: ParamsProps },
) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return NextResponse.error();
    }
    const { listingId } = params;
    if (!listingId || typeof listingId !== 'string') {
        throw new Error('Invalid ID');
    }

    const listing = await prisma?.listing.deleteMany({
        where: {
            id: listingId,
            userId: currentUser.id,
        },
    });
    return NextResponse.json(listing);
}
