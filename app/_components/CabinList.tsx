/**
 * External dependencies.
 */

import CabinCard from "@/app/_components/CabinCard";

/**
 * Internal dependencies.
 */
import { getCabins } from "@/app/_lib/data-service";
import { type Cabin } from "@/app/_types/cabins/cabin";

export default async function CabinList() {
	const cabins: Cabin[] = await getCabins();

	if (cabins.length === 0) return <p>No cabins available</p>;

	return (
		<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
			{cabins.map((cabin) => (
				<CabinCard cabin={cabin} key={cabin.id} />
			))}
		</div>
	);
}
