import theme from '@nuxt/content-theme-docs'

const createSitemapRoutes = async () => {
  let routes = [];
  
  routes.push('/how-to-use-these-recipes');
  routes.push('/general/packaging-your-plugin-or-theme-with-laravel-mix');
  routes.push('/themes/install-tailwind-css-in-your-wordpress-theme');
  
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
