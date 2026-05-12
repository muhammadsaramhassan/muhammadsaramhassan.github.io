/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	pageExtensions: ["ts", "tsx", "mdx"],
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
