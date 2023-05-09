/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: "http://host.docker.internal.:8000/graphql",
      },
    ]
  }
}

module.exports = nextConfig
