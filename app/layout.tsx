import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WordBubbles from "@/components/WordBubbles";
import QuoteSidebar from "@/components/QuoteSidebar";

export const metadata: Metadata = {
	title: "M Saram Hassan",
	description: "Personal portfolio & blogsite",
	authors: [{ name: "M. Saram Hassan" }],
	keywords: ["research", "academia", "portfolio", "publications"],
	openGraph: {
		title: "M Saram Hassan",
		description: "Personal portfolio & blogsite",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
				<Navigation />
				<WordBubbles />
				<QuoteSidebar />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
