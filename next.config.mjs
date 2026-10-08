/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "gxacchlhhzelxmbmxggr.supabase.co",
				port: "",
				pathname: "/storage/v1/object/public/cabins-images/**",
			},
		],
	},
	webpack: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		};
		return config;
	},
};

export default nextConfig;
