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
	{ word: "vellichor", meaning: "the strange wistfulness of used bookstores" },
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
	{ word: "kuebiko", meaning: "exhaustion from acts of senseless violence" },
	{ word: "lachesism", meaning: "the desire to be struck by disaster" },
	{ word: "mauerbauertraurigkeit", meaning: "the urge to push people away" },
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
}

export default function ObscureWordBubbles() {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [wordBubblesEnabled, setWordBubblesEnabled] = useState(true);
	const [showMeaning, setShowMeaning] = useState(false);
	const [currentWord, setCurrentWord] = useState(obscureWords[0]);
	const [floatingWords, setFloatingWords] = useState<FloatingWord[]>([]);
	const wordIdRef = useRef(0);

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
		if (!wordBubblesEnabled) {
			setFloatingWords([]);
			return;
		}

		const interval = setInterval(() => {
			const randomWord =
				obscureWords[Math.floor(Math.random() * obscureWords.length)];
			const newWord: FloatingWord = {
				id: wordIdRef.current++,
				word: randomWord.word,
				meaning: randomWord.meaning,
				x: mousePos.x + (Math.random() - 0.5) * 100,
				y: mousePos.y + (Math.random() - 0.5) * 100,
				opacity: 1,
			};

			setFloatingWords((prev) => [...prev.slice(-8), newWord]);
			setCurrentWord(randomWord);
		}, 2000);

		return () => clearInterval(interval);
	}, [wordBubblesEnabled, mousePos]);

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
					<div className="bg-gradient-to-br from-[#c45c4c] to-[#a84838] text-white px-4 py-2 rounded-md text-sm font-sans font-medium tracking-wide shadow-lg">
						{currentWord.word}
						<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#c45c4c]" />
					</div>
				</div>
			)}

			{/* Floating word bubbles */}
			{floatingWords.map((word) => (
				<div
					key={word.id}
					className="fixed pointer-events-none z-[999] text-[#c45c4c] text-[13px] font-sans transition-opacity duration-300"
					style={{
						left: word.x,
						top: word.y,
						opacity: word.opacity * 0.6,
						textShadow: "0 0 10px rgba(196, 92, 76, 0.3)",
					}}>
					{word.word}
				</div>
			))}

			{/* Meaning tooltip (shown when 'm' is pressed) */}
			{showMeaning && wordBubblesEnabled && (
				<div className="fixed bottom-20 left-5 z-[100] p-4 bg-[rgba(196,92,76,0.1)] rounded-lg border border-[rgba(196,92,76,0.3)] max-w-xs">
					<p className="text-sm font-semibold text-[#c45c4c] mb-2 font-sans">
						{currentWord.word}
					</p>
					<p className="text-[13px] text-[#a08070] italic leading-relaxed">
						{currentWord.meaning}
					</p>
				</div>
			)}

			{/* Status indicator */}
			<div
				className={`fixed bottom-5 left-5 z-[100] rounded-full px-4 py-2 text-xs font-sans border transition-colors ${
					wordBubblesEnabled
						? "bg-[rgba(196,92,76,0.2)] border-[#c45c4c] text-[#c45c4c]"
						: "bg-[rgba(100,80,60,0.2)] border-[#605040] text-[#806050]"
				}`}>
				Word bubbles: {wordBubblesEnabled ? "ON" : "OFF"}
			</div>
		</>
	);
}
