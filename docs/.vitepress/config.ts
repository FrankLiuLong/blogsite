import {
  defineConfig,
  resolveSiteDataByRoute,
  type HeadConfig
} from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader
} from 'vitepress-plugin-group-icons'
import llmstxt from 'vitepress-plugin-llms'

const prod = !!process.env.NETLIFY

export default defineConfig({
  title: '赛音电子',
  lang: 'zh-CN', //语言，可选 en-US

  rewrites: {
    'zh/:rest*': ':rest*'
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ],
    config(md) {
      //--代码复制框提示
      // TODO: remove when https://github.com/vuejs/vitepress/issues/4431 is fixed
      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = 'root' } = env
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case 'en':
              return 'Copy code'
            default:
              return '复制代码'
          }
        })()
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`
        )
      }
      md.use(groupIconMdPlugin)
    }
  },

  sitemap: {
    hostname: 'https://vitepress.dev',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }
    ],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'VitePress' }],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://vitepress.dev/vitepress-og.jpg'
      }
    ],
    ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'AZBRSFGG',
        'data-spa': 'auto',
        defer: ''
      }
    ]
  ],

  themeConfig: {
    /*logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },*/
    logo: { src: '/sin-no-background-128.svg', width: 24, height: 24 },
    /*socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],*/

    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: '52f578a92b88ad6abde815aae2b0ad7c',
        indexName: 'vitepress',
        askAi: 'YaVSonfX5bS8'
      }
    },

    carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
  },

  locales: {
    root: { label: '简体中文', lang: 'zh-Hans', dir: 'ltr' }
    //en: { label: 'English', lang: 'en-US', dir: 'ltr' },
  },

  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          vitepress: localIconLoader(
            import.meta.url,
            '../public/vitepress-logo-mini.svg'
          ),
          firebase: 'logos:firebase'
        }
      }),
      prod &&
        llmstxt({
          workDir: 'zh',
          ignoreFiles: ['index.md']
        })
    ],
    experimental: {
      enableNativePlugin: true
    }
  },

  transformPageData: prod
    ? (pageData, ctx) => {
        const site = resolveSiteDataByRoute(
          ctx.siteConfig.site,
          pageData.relativePath
        )
        const title = `${pageData.title || site.title} | ${pageData.description || site.description}`
        ;((pageData.frontmatter.head ??= []) as HeadConfig[]).push(
          ['meta', { property: 'og:locale', content: site.lang }],
          ['meta', { property: 'og:title', content: title }]
        )
      }
    : undefined
})
