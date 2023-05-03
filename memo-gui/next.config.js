/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: "http://127.0.0.1:8000/graphql",
      },
    ]
  }
}

module.exports = nextConfig
