const withOffline = require('next-offline');

const nextConfig = {
	poweredByHeader: false,
	swcMinify: true,
  output: "export",
  basePath: "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig

