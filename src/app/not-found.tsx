import Link from "next/link";
import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
	title: "Not found",
	description: "That page doesn't exist.",
};

export default function NotFound() {
	return (
		<>
			<Masthead />
			<main className="wrap pad-bottom">
				<div className="page-head">
					<h1>Not found</h1>
					<p>
						That page doesn&apos;t exist. Try the{" "}
						<Link href="/">homepage</Link>.
					</p>
				</div>
			</main>
			<SiteFooter />
		</>
	);
}
