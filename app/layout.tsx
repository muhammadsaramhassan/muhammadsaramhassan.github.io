import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-merriweather",
});

export const metadata: Metadata = {
	title: "Muhammad Saram Hassan - Personal Website",
	description: "Saram's academic personal website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="min-h-screen flex flex-col">
				<Header />
				<main id="main" className="flex-grow pt-20">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
