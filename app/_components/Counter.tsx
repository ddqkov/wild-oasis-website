"use client";
/**
 * External dependencies.
 */

import { useState } from "react";

/**
 * Internal dependencies.
 */
import { type UserData } from "../cabins/page";

type CounterProps = {
	users: UserData[];
};

export default function Counter({ users }: CounterProps) {
	const [count, setCount] = useState(0);

	return (
		<div>
			{count}

			<button onClick={() => setCount((c) => c + 1)}>+</button>
		</div>
	);
}
