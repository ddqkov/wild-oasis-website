/**
 * External dependencies.
 */
import { type ReactNode } from "react";

/**
 * Internal dependencies.
 */
import "@/app/_styles/globals.css";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

export const metadata = {
	title: "The Wild Oasis",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html>
			<body className="bg-primary-900 text-primary-100 min-h-screen">
				<header>
					<Logo />

					<Navigation />
				</header>

				<main>{children}</main>

				<footer>Copyright by The Wild Oasis</footer>
			</body>
		</html>
	);
}
