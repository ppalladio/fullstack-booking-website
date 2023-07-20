import getListingById from '@/app/actions/getListingById'
import React from 'react'

interface getListingByIdProps{
	listingId: string
}

const ListingPage = async ({params}:{params:getListingByIdProps}) => {
	const listing = await getListingById(params)
  return (
	<div>
		{listing.title}
	</div>
  )
}

export default ListingPage