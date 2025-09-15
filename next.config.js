/** @type {import('next').NextConfig} */

let url = "";

if (process.env.NEXT_PUBLIC_ENV === "dev") {
  url = process.env.NEXT_PUBLIC_DEV_URL || ""
} else {
  url = process.env.NEXT_PUBLIC_LOCAL_URL || ""
}


const nextConfig = {
  reactStrictMode: false,
  output: "export",
  images: { unoptimized: true },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/auth/:path*",
  //       destination: `${url}/auth/:path*`,
  //     },
  //     {
  //       source: "/api/:path*",
  //       destination: `${url}/api/:path*`,
  //     },
  //     {
  //       source: "/json/:path*",
  //       destination: `${googleUrl}/json/:path*`,
  //     },
  //   ];
  // },

  compiler: {
    styledComponents: true,
  },

}



module.exports = nextConfig

