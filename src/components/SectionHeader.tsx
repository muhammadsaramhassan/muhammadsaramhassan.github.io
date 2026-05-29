import Link from "next/link";

interface SectionHeaderProps {
	num: string; // e.g. "§ I · Research"
	title: React.ReactNode;
	moreLabel?: string;
	moreHref?: string;
}

export default function SectionHeader({
	num,
	title,
	moreLabel,
	moreHref,
}: SectionHeaderProps) {
	return (
		<div className="sec-head">
			<div className="sec-num">{num}</div>
			<h2 className="sec-title">{title}</h2>
			{moreLabel && moreHref && (
				<Link href={moreHref} className="more">
					{moreLabel}
				</Link>
			)}
		</div>
	);
}
