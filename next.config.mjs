/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/aryan-manandhar" : "",
  images: { unoptimized: true },
};

export default nextConfig;
