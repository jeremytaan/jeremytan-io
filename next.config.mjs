import createMDX from '@next/mdx'

const withMDX = createMDX({})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
}

export default withMDX(nextConfig)