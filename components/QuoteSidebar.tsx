"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const quotes = [
	{
		text: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
		author: "Jean-Paul Sartre",
	},
	{
		text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
		author: "Albert Camus",
	},
	{
		text: "We do not see things as they are, we see them as we are.",
		author: "Anaïs Nin",
	},
	{
		text: "The task is not to see what has never been seen before, but to think what has never been thought before about what you see every day.",
		author: "Erwin Schrödinger",
	},
	{ text: "Language is the house of Being.", author: "Martin Heidegger" },
	{
		text: "A concept is a brick. It can be used to build a courthouse of reason. Or it can be thrown through the window.",
		author: "Gilles Deleuze",
	},
	{
		text: "Where there is power, there is resistance.",
		author: "Michel Foucault",
	},
	{
		text: "The limits of my language mean the limits of my world.",
		author: "Ludwig Wittgenstein",
	},
];

export default function QuoteSidebar() {
	const [currentQuote, setCurrentQuote] = useState(quotes[0]);

	// Set daily quote based on date
	useEffect(() => {
		const today = new Date();
		const start = new Date(today.getFullYear(), 0, 0);
		const diff = today.getTime() - start.getTime();
		const oneDay = 1000 * 60 * 60 * 24;
		const dayOfYear = Math.floor(diff / oneDay);
		const quoteIndex = dayOfYear % quotes.length;
		setCurrentQuote(quotes[quoteIndex]);
	}, []);

	return (
		<div
			className="fixed right-10 top-1/2 -translate-y-1/2 w-[280px] z-[100] hidden lg:block"
			style={{
				animation: "fadeSlideIn 1s ease-out",
			}}>
			<div className="border-l-[3px] border-[#c45c4c] pl-5 py-2.5">
				<p className="italic text-[15px] leading-[1.7] text-[#d4a574] mb-3">
					"{currentQuote.text}"
				</p>
				<p className="text-[13px] text-[#a08070] mb-2">
					— {currentQuote.author}
				</p>
				<p className="text-xs text-[#806050]">
					from{" "}
					<Link
						href="/me-like"
						className="text-[#c45c4c] hover:underline cursor-pointer">
						me like
					</Link>
				</p>
			</div>

			{/* Keyboard hints */}
			<div className="mt-8 text-xs text-[#605040]">
				<p className="my-1">
					press{" "}
					<span className="inline-block border border-[#c45c4c] rounded px-2 py-0.5 text-[#c45c4c] text-[11px] mx-1">
						e
					</span>{" "}
					to toggle word bubbles
				</p>
				<p className="my-1">
					press{" "}
					<span className="inline-block border border-[#c45c4c] rounded px-2 py-0.5 text-[#c45c4c] text-[11px] mx-1">
						m
					</span>{" "}
					to show meaning
				</p>
			</div>
		</div>
	);
}
