/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: `${process.env.MEMO_SERVICE}/graphql`,
      },
    ]
  }
}

module.exports = nextConfig
