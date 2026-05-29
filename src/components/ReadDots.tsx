interface ReadDotsProps {
	minutes: number;
	max?: number;
}

export default function ReadDots({ minutes, max = 5 }: ReadDotsProps) {
	// map read time to dot count (1-5 scale, bucketed by minutes)
	const filled = Math.min(Math.ceil(minutes / 3), max);

	return (
		<span className="post-read">
			<span className="dots">
				{Array.from({ length: max }, (_, i) => (
					<span key={i} className={i < filled ? "on" : ""} />
				))}
			</span>
			{minutes} min
		</span>
	);
}
