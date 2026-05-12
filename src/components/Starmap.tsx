export default function Starmap() {
	return (
		<div className="starmap-svg" aria-hidden="true">
			<svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg">
				{/* background stars */}
				<g fill="#F5EFE0">
					<circle cx="28" cy="42" r="0.7" opacity="0.5" />
					<circle cx="72" cy="90" r="0.9" opacity="0.7" />
					<circle cx="310" cy="28" r="0.8" opacity="0.6" />
					<circle cx="370" cy="100" r="1.1" opacity="0.9" />
					<circle cx="200" cy="58" r="0.6" opacity="0.5" />
					<circle cx="60" cy="220" r="0.7" opacity="0.5" />
					<circle cx="120" cy="300" r="0.9" opacity="0.7" />
					<circle cx="350" cy="280" r="0.8" opacity="0.6" />
					<circle cx="380" cy="200" r="1.0" opacity="0.8" />
					<circle cx="20" cy="300" r="0.6" opacity="0.4" />
					<circle cx="240" cy="310" r="0.7" opacity="0.5" />
					<circle cx="300" cy="200" r="0.5" opacity="0.4" />
					<circle cx="160" cy="30" r="0.8" opacity="0.6" />
				</g>
				{/* constellation lines */}
				<g
					stroke="#D4A574"
					strokeWidth="0.8"
					fill="none"
					opacity="0.55"
					strokeLinecap="round">
					<line x1="130" y1="90" x2="180" y2="120" />
					<line x1="180" y1="120" x2="220" y2="155" />
					<line x1="220" y1="155" x2="270" y2="130" />
					<line x1="270" y1="130" x2="300" y2="80" />
					<line x1="180" y1="120" x2="170" y2="180" />
					<line x1="220" y1="155" x2="210" y2="220" />
					<line x1="270" y1="130" x2="285" y2="200" />
					<line x1="170" y1="180" x2="210" y2="220" />
					<line x1="210" y1="220" x2="285" y2="200" />
				</g>
				{/* primary stars */}
				<g fill="#F5EFE0">
					<circle cx="130" cy="90" r="2.2" />
					<circle cx="180" cy="120" r="2.8" />
					<circle cx="220" cy="155" r="3" />
					<circle cx="270" cy="130" r="2.6" />
					<circle cx="300" cy="80" r="2.1" />
					<circle cx="170" cy="180" r="2.2" />
					<circle cx="210" cy="220" r="2.4" />
					<circle cx="285" cy="200" r="2.3" />
				</g>
				{/* halos */}
				<circle cx="220" cy="155" r="9" fill="#D4A574" opacity="0.18" />
				<circle cx="180" cy="120" r="7" fill="#D4A574" opacity="0.15" />
				{/* star labels */}
				<g
					fontFamily="JetBrains Mono, monospace"
					fontSize="8"
					fill="#D4A574"
					opacity="0.75"
					letterSpacing="0.5">
					<text x="232" y="154">
						α Orionis
					</text>
					<text x="305" y="80">
						Bellatrix
					</text>
					<text x="297" y="202">
						Saiph
					</text>
					<text x="105" y="90">
						Rigel
					</text>
				</g>
				{/* caption */}
				<g
					fontFamily="JetBrains Mono, monospace"
					fontSize="7"
					fill="#F5EFE0"
					opacity="0.5"
					letterSpacing="0.5">
					<text x="20" y="325">
						{" "}
						Sharan Forest · RECORDED 2025.11.16
					</text>
					<text x="246" y="325">
						OBS. FROM NAGAR
					</text>
				</g>
			</svg>
		</div>
	);
}
