import { PropertyCard } from "./PropertyCard"

export const Results = ({ properties }) => {
	console.log("Properties", properties);
	return (
		<div className="grid max-w-5xl grid-cols-3 gap-5 mx-auto mb-10">
			{/* Property Card */}
			{properties.map((property) => (
				<PropertyCard
					key={property.databaseId}
					title={property.title}
					destination={property.uri}
					bedrooms={property.PropertyFeatures.bedrooms}
					bathrooms={property.PropertyFeatures.bathrooms}
					price={property.PropertyFeatures.price}
					hasParking={property.PropertyFeatures.hasParking}
					petFriendly={property.PropertyFeatures.petFriendly}
					image={property.featuredImage?.node?.sourceUrl}
				/>
			))}
		</div>
	)
}