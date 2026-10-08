/**
 * External dependencies.
 */
import { getCountries } from "@/app/_lib/data-service";

/**
 * Internal dependencies.
 */

type SelectCountryProps = {
	id?: string;
	className?: string;
	name: string;
	defaultCountry?: string;
};

export default async function SelectCountry({
	defaultCountry = "",
	name,
	id,
	className,
}: SelectCountryProps) {
	const countries = await getCountries();

	return (
		<select
			id={id}
			name={name}
			className={className}
			defaultValue={defaultCountry}
		>
			<option value="" disabled>
				Select country...
			</option>

			{countries.map((country) => (
				<option key={country.name} value={country.name}>
					{country.name}
				</option>
			))}
		</select>
	);
}
