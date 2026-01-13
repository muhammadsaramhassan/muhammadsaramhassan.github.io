"use client";

import { useEffect, useState, useRef } from "react";

// Dictionary of Obscure Sorrows-style words with meanings
const obscureWords = [
	{ word: "onism", meaning: "the frustration of being stuck in just one body" },
	{
		word: "sonder",
		meaning:
			"the realization that each passerby has a life as vivid as your own",
	},
	{
		word: "kenopsia",
		meaning:
			"the eerie atmosphere of a place that's usually bustling but is now empty",
	},
	{ word: "liberosis", meaning: "the desire to care less about things" },
	{
		word: "énouement",
		meaning: "the bittersweetness of having arrived in the future",
	},
	{
		word: "vellichor",
		meaning: "the strange wistfulness of used bookstores",
	},
	{
		word: "rubatosis",
		meaning: "the unsettling awareness of your own heartbeat",
	},
	{
		word: "nodus tollens",
		meaning: "when your life doesn't fit into a story anymore",
	},
	{
		word: "altschmerz",
		meaning: "weariness with the same old issues you've always had",
	},
	{
		word: "occhiolism",
		meaning: "the awareness of the smallness of your perspective",
	},
	{
		word: "chrysalism",
		meaning: "the amniotic tranquility of being indoors during a storm",
	},
	{
		word: "ellipsism",
		meaning: "sadness that you'll never know how history turns out",
	},
	{
		word: "exulansis",
		meaning: "the tendency to give up trying to explain an experience",
	},
	{
		word: "jouska",
		meaning: "a hypothetical conversation you compulsively play in your head",
	},
	{
		word: "kuebiko",
		meaning: "exhaustion from acts of senseless violence",
	},
	{ word: "lachesism", meaning: "the desire to be struck by disaster" },
	{
		word: "mauerbauertraurigkeit",
		meaning: "the urge to push people away",
	},
	{
		word: "monachopsis",
		meaning: "the subtle but persistent feeling of being out of place",
	},
	{
		word: "opia",
		meaning: "the ambiguous intensity of looking someone in the eye",
	},
	{ word: "anemoia", meaning: "nostalgia for a time you've never known" },
];

interface FloatingWord {
	id: number;
	word: string;
	meaning: string;
	x: number;
	y: number;
	opacity: number;
	scale: number;
}

export default function WordBubbles() {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [wordBubblesEnabled, setWordBubblesEnabled] = useState(true);
	const [showMeaning, setShowMeaning] = useState(false);
	const [currentWord, setCurrentWord] = useState(obscureWords[0]);
	const [floatingWords, setFloatingWords] = useState<FloatingWord[]>([]);
	const wordIdRef = useRef(0);

	// Set daily word based on date
	useEffect(() => {
		const today = new Date();
		const start = new Date(today.getFullYear(), 0, 0);
		const diff = today.getTime() - start.getTime();
		const oneDay = 1000 * 60 * 60 * 24;
		const dayOfYear = Math.floor(diff / oneDay);
		const wordIndex = dayOfYear % obscureWords.length;
		setCurrentWord(obscureWords[wordIndex]);
	}, []);

	// Handle mouse movement
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePos({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	// Handle keyboard shortcuts
	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (e.key === "e" || e.key === "E") {
				setWordBubblesEnabled((prev) => !prev);
			}
			if (e.key === "m" || e.key === "M") {
				setShowMeaning((prev) => !prev);
			}
		};
		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, []);

	// Spawn floating words periodically
	useEffect(() => {
		if (!wordBubblesEnabled) return;

		const interval = setInterval(() => {
			const newWord: FloatingWord = {
				id: wordIdRef.current++,
				...currentWord,
				x: mousePos.x + (Math.random() - 0.5) * 100,
				y: mousePos.y + (Math.random() - 0.5) * 100,
				opacity: 1,
				scale: 1,
			};

			setFloatingWords((prev) => [...prev.slice(-8), newWord]);
		}, 2000);

		return () => clearInterval(interval);
	}, [wordBubblesEnabled, mousePos, currentWord]);

	// Animate and remove old floating words
	useEffect(() => {
		const fadeInterval = setInterval(() => {
			setFloatingWords((prev) =>
				prev
					.map((w) => ({ ...w, opacity: w.opacity - 0.02, y: w.y - 0.5 }))
					.filter((w) => w.opacity > 0)
			);
		}, 50);
		return () => clearInterval(fadeInterval);
	}, []);

	return (
		<>
			{/* Mouse follower word */}
			{wordBubblesEnabled && (
				<div
					className="fixed pointer-events-none z-[1000] transition-transform duration-100"
					style={{
						left: mousePos.x + 20,
						top: mousePos.y - 10,
					}}>
					<div className="bg-gradient-to-br from-primary to-[#a84838] text-white px-4 py-2 rounded-md text-sm font-medium font-sans tracking-wide shadow-[0_4px_20px_rgba(196,92,76,0.4)]">
						{currentWord.word}
						{/* Small dot below */}
						<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
					</div>
				</div>
			)}

			{/* Floating word bubbles */}
			{floatingWords.map((word) => (
				<div
					key={word.id}
					className="fixed pointer-events-none z-[999] text-primary text-[13px] font-sans transition-opacity duration-300"
					style={{
						left: word.x,
						top: word.y,
						opacity: word.opacity * 0.6,
						textShadow: "0 0 10px rgba(196, 92, 76, 0.3)",
					}}>
					{word.word}
				</div>
			))}

			{/* Meaning tooltip */}
			{showMeaning && (
				<div className="fixed bottom-20 left-5 z-[100] p-4 bg-primary/10 rounded-lg border border-primary/30 max-w-[300px]">
					<p className="text-sm font-semibold text-primary mb-1.5">
						{currentWord.word}
					</p>
					<p className="text-[13px] text-text-tertiary italic leading-[1.5] m-0">
						{currentWord.meaning}
					</p>
				</div>
			)}

			{/* Status indicator for word bubbles */}
			<div
				className={`fixed bottom-5 left-5 rounded-[20px] px-4 py-2 text-xs z-[100] border ${
					wordBubblesEnabled
						? "bg-primary/20 border-primary text-primary"
						: "bg-[#645040]/20 border-text-muted text-text-muted"
				}`}>
				Word bubbles: {wordBubblesEnabled ? "ON" : "OFF"}
			</div>
		</>
	);
}
