import theme from '@nuxt/content-theme-docs'

const createSitemapRoutes = async () => {
  const { $content } = require('@nuxt/content')
  let routes = [];

  const posts = await $content({ deep: true })
    .only(['to'])
    .fetch()

  posts.forEach( function( post, index ){
    if( post.extension == '.md' ){
      routes.push( post.to );
    }
  });

  return routes;
}

export default theme({
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  },
  loading: { color: '#00CD81' },
  i18n: {
    defaultLocale: 'en'
  },
  modules: [
    '@nuxtjs/sitemap'
  ],
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-20130511-3'
    }]
  ],
  sitemap: {
    hostname: 'https://wp-dev-recipes.serversideup.net',
    gzip: true,
    routes: createSitemapRoutes,
    lastmod: '2020-09-28'
  },
})
