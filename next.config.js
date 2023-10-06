const withOffline = require('next-offline');

const nextConfig = {
	poweredByHeader: false,
	swcMinify: true,
  output: "standalone",
  basePath: "",
  images: {
    unoptimized: true,
  },
};

module.exports = withOffline(nextConfig);

