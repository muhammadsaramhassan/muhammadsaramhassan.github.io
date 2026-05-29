"use client";

import { useState, useCallback, useEffect } from "react";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";

type Intensity = "soft" | "default" | "bold";
type Mood = "editorial" | "modern";
type Noise = "on" | "off";

interface TweakState {
	intensity: Intensity;
	mood: Mood;
	noise: Noise;
}

const INTENSITY_VARS: Record<Intensity, Record<string, string>> = {
	soft: {
		"--maroon": "#9B4753",
		"--gold": "#C99A38",
		"--ink": "#3A2618",
	},
	default: {
		"--maroon": "#7A1F2B",
		"--gold": "#B8860B",
		"--ink": "#2A1A0E",
	},
	bold: {
		"--maroon": "#6A141F",
		"--gold": "#A6790A",
		"--ink": "#1E110A",
	},
};

export default function TweaksPanel() {
	const [open, setOpen] = useState(false);
	const [state, setState] = useState<TweakState>({
		intensity: "default",
		mood: "editorial",
		noise: "on",
	});

	// Apply CSS variable tweaks to :root
	useEffect(() => {
		const root = document.documentElement;

		// Intensity
		const vars = INTENSITY_VARS[state.intensity];
		Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));

		// Mood
		document.body.style.fontFamily =
			state.mood === "modern"
				? "var(--font-inter-tight), sans-serif"
				: "var(--font-fraunces), Georgia, serif";

		// Noise
		let noiseEl = document.getElementById(
			"tw-noise",
		) as HTMLStyleElement | null;
		if (!noiseEl) {
			noiseEl = document.createElement("style");
			noiseEl.id = "tw-noise";
			document.head.appendChild(noiseEl);
		}
		noiseEl.textContent =
			state.noise === "off" ? "body::before { opacity: 0 !important; }" : "";
	}, [state]);

	const toggle = useCallback(() => setOpen((o) => !o), []);

	useKeyboardShortcuts({
		t: toggle,
		"/": () => {
			/* future: open search */
		},
	});

	function set<K extends keyof TweakState>(key: K, value: TweakState[K]) {
		setState((prev) => ({ ...prev, [key]: value }));
	}

	if (!open) return null;

	return (
		<div className="tweaks">
			<h6>
				Tweaks
				<span className="cl" onClick={() => setOpen(false)}>
					close
				</span>
			</h6>

			<div className="tw-row">
				<label>palette intensity</label>
				<div className="seg">
					{(["soft", "default", "bold"] as Intensity[]).map((v) => (
						<button
							key={v}
							className={state.intensity === v ? "on" : ""}
							onClick={() => set("intensity", v)}>
							{v}
						</button>
					))}
				</div>
			</div>

			<div className="tw-row">
				<label>type mood</label>
				<div className="seg">
					{(["editorial", "modern"] as Mood[]).map((v) => (
						<button
							key={v}
							className={state.mood === v ? "on" : ""}
							onClick={() => set("mood", v)}>
							{v}
						</button>
					))}
				</div>
			</div>

			<div className="tw-row">
				<label>noise</label>
				<div className="seg">
					{(["on", "off"] as Noise[]).map((v) => (
						<button
							key={v}
							className={state.noise === v ? "on" : ""}
							onClick={() => set("noise", v)}>
							{v}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
