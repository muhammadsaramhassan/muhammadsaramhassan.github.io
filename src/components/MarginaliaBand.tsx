interface Fact {
	label: string;
	value: string;
}

interface MarginaliaBandProps {
	note: React.ReactNode;
	facts: Fact[];
	downloadLabel?: string;
	downloadHref?: string;
}

export default function MarginaliaBand({
	note,
	facts,
	downloadLabel = "↓ download cv.pdf",
	downloadHref = "#",
}: MarginaliaBandProps) {
	return (
		<section className="marginalia-band container">
			<aside className="margin-wide">
				<div className="mw-head">
					<span className="mw-sym">§</span>
					<span className="mw-label">Marginalia</span>
					<span className="mw-rule"></span>
				</div>
				<div className="mw-body">
					<p className="mw-note">{note}</p>
					<ul className="mw-facts">
						{facts.map((f) => (
							<li key={f.label}>
								<span>{f.label}</span>
								<b>{f.value}</b>
							</li>
						))}
					</ul>
					<a href={downloadHref} className="mw-dwn">
						{downloadLabel}
					</a>
				</div>
			</aside>
		</section>
	);
}
