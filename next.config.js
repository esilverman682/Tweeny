 
   
  module.exports = ({
    
    images: {
      domains: ['assets.localhost:3000'],
      disableStaticImages: true
    },
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
    },
    experimental: { esmExternals: true },
    webpack: (config, { dev, isServer }) => {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
      })
  
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
  
 
  
      return config
    },
    
  })
  