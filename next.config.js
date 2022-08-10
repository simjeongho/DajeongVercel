const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
	compress: true,
	images: {
		domains: ["localhost", "*", process.env.IMAGE_AMAZON, "simbwatda.com", "api.simbwatda.com"],
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "5000",
				pathname: "/account123/**",
			},
			{
				protocol: "http",
				hostname: "api.simbwatda.com",
			},
		],
	},
});
