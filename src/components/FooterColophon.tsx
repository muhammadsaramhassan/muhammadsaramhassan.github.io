import Link from "next/link";

interface FooterColophonProps {
	variant?: "portfolio" | "blog";
}

export default function FooterColophon({
	variant = "portfolio",
}: FooterColophonProps) {
	return (
		<footer className="colophon">
			<div className="colophon-inner">
				{variant === "portfolio" ? (
					<div>
						<h4>About this page</h4>
						<p>
							A hand-built folio, set in{" "}
							<a
								href="https://fonts.google.com/specimen/Fraunces"
								target="_blank"
								rel="noopener noreferrer">
								Fraunces
							</a>{" "}
							and JetBrains Mono.
						</p>
					</div>
				) : (
					<div>
						<h4>About this page</h4>
						<p>
							A slow-writing blog by me set in{" "}
							<a
								href="https://fonts.google.com/specimen/Fraunces"
								target="_blank"
								rel="noopener noreferrer">
								Fraunces
							</a>{" "}
							and{" "}
							<a
								href="https://fonts.google.com/specimen/JetBrains+Mono"
								target="_blank"
								rel="noopener noreferrer">
								JetBrains Mono
							</a>
							. always open for <em>correspondence</em>; reply button is just my
							email.
						</p>
					</div>
				)}
				<div>
					<h4>Colophon</h4>
					<dl>
						<div>
							<dt>Fonts</dt> <dd>Fraunces · JetBrains Mono · Inter Tight</dd>
						</div>
						<div>
							<dt>Palette</dt>{" "}
							<dd>Parchment &amp; Maroon, with antique gold</dd>
						</div>
						{variant === "portfolio" ? (
							<></>
						) : (
							<>
								<div>
									<dt>Publishing</dt> <dd>Monthly-ish · edited after</dd>
								</div>
								<div>
									<dt>License</dt> <dd>CC BY-NC 4.0</dd>
								</div>
							</>
						)}
					</dl>
				</div>
				<div>
					{variant === "portfolio" ? (
						<>
							<h4>Index of pages</h4>
							<p>
								<Link href="/">Portfolio</Link> - this page
								<br />
								<Link href="/writing">Writing</Link> - notes &amp; essays
								<br />
								<a
									href="/Muhammad_Saram_Hassan_s_Resume.pdf"
									target="_blank"
									rel="noopener noreferrer">
									CV ↗
								</a>{" "}
								- the professional resume
							</p>
						</>
					) : (
						<>
							<h4>Found a typo?</h4>
							<p>
								Write to me at{" "}
								<a href="mailto:saram.hassan1412@gmail.com">
									saram.hassan1412 [at] gmail
								</a>
								. I keep a running thanks file for every reader who caught one.
							</p>
						</>
					)}
				</div>
			</div>
			<div className="colo-foot">
				<span>© 2026 · Muhammad Saram Hassan · all rights reserved</span>
				<span className="socs">
					<a
						href="https://github.com/msaramhassan"
						target="_blank"
						rel="noopener noreferrer">
						gh
					</a>
					<a
						href="https://linkedin.com/in/msaramhassan"
						target="_blank"
						rel="noopener noreferrer">
						li
					</a>
					<a
						href="https://scholar.google.com/scholar?q=Muhammad+Saram+Hassan"
						target="_blank"
						rel="noopener noreferrer">
						scholar
					</a>
					<a href="mailto:saram.hassan1412@gmail.com">email</a>
				</span>
			</div>
		</footer>
	);
}
