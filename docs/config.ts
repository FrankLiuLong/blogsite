import { createRequire } from 'module'
import { defineAdditionalConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineAdditionalConfig({
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: nav(),

    //-顶部菜单栏配置
    sidebar: {
      '/product/': { base: '/product/', items: sidebarProduct() },
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/CustomCase/': { base: '/CustomCase/', items: sidebarCustomCase() },
      '/blog/': { base: '/blog/', items: sidebarBlog() }
    },
    /*
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },*/

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present 刘清斌'
    }
  }
})

//-顶部菜单栏配置
function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '产品选型',
      link: '/product/site-config',
      activeMatch: '/product/'
    },
    {
      text: '用户手册',
      link: '/guide/what-is-vitepress',
      activeMatch: '/guide/'
    },    
    {
      text: '定制案例',
      link: '/CustomCase/site-config',
      activeMatch: '/CustomCase/'
    },
    {
      text: '博客',
      link: '/blog/site-config',
      activeMatch: '/blog/'
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '什么是 VitePress？', link: 'what-is-vitepress' },
        { text: '快速开始', link: 'getting-started' },
        { text: '路由', link: 'routing' },
        { text: '部署', link: 'deploy' }
      ]
    },
    {
      text: '写作',
      collapsed: false,
      items: [
        { text: 'Markdown 扩展', link: 'markdown' },
        { text: '资源处理', link: 'asset-handling' },
        { text: 'frontmatter', link: 'frontmatter' },
        { text: '在 Markdown 使用 Vue', link: 'using-vue' },
        { text: '国际化', link: 'i18n' }
      ]
    },
    {
      text: '自定义',
      collapsed: false,
      items: [
        { text: '自定义主题', link: 'custom-theme' },
        { text: '扩展默认主题', link: 'extending-default-theme' },
        { text: '构建时数据加载', link: 'data-loading' },
        { text: 'SSR 兼容性', link: 'ssr-compat' },
        { text: '连接 CMS', link: 'cms' }
      ]
    },
    {
      text: '实验性功能',
      collapsed: false,
      items: [
        { text: 'MPA 模式', link: 'mpa-mode' },
        { text: 'sitemap 生成', link: 'sitemap-generation' }
      ]
    },
    { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '参考',
      items: [
        { text: '站点配置', link: 'site-config' },
        { text: 'frontmatter 配置', link: 'frontmatter-config' },
        { text: '运行时 API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: '默认主题',
          base: '/zh/reference/default-theme-',
          items: [
            { text: '概览', link: 'config' },
            { text: '导航栏', link: 'nav' },
            { text: '侧边栏', link: 'sidebar' },
            { text: '主页', link: 'home-page' },
            { text: '页脚', link: 'footer' },
            { text: '布局', link: 'layout' },
            { text: '徽章', link: 'badge' },
            { text: '团队页', link: 'team-page' },
            { text: '上下页链接', link: 'prev-next-links' },
            { text: '编辑链接', link: 'edit-link' },
            { text: '最后更新时间戳', link: 'last-updated' },
            { text: '搜索', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}

function sidebarCustomCase(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '非标测试设备',
      collapsed: false,
      items: [     
        { text: '某型号联试测试系统', link: '10-Arinc429' },
        { text: '某型号DD测试系统', link: 'site-config' },
        { text: '某武器系统地面系统模拟单元', link: 'site-config' },
        { text: '数据存储分析模块', link: 'site-config' },
        { text: '图像数据记录及控制组件', link: 'site-config' },
        { text: '引信宽带信号处理与评估设备', link: 'site-config' }
      ]
    },
    {
      text: '定制板卡',
      collapsed: false,
      items: [     
        { text: 'SX24C01.UG-PXI程控电阻桥板卡', link: '10-Arinc429' },
        { text: 'SS25001-多路复用开关板', link: 'site-config' } ,
        { text: '基于K7的PXI&PXIe数据处理板（Kintex-7 FMC载板）', link: 'site-config' } 
        { text: '基于PCI9054的通用CPCI/PXI开发板', link: 'site-config' }
      ]
    },
  ]
}

function sidebarBlog(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '总线通信',
      collapsed: false,
      items: [     
        { text: 'Arinc429总线解析', link: '10-Arinc429' },
        { text: '站点配置', link: 'site-config' }  
      ]
    },
    {
      text: 'FPGA',
      collapsed: false,
      items: [     
        { text: 'Arinc429总线解析', link: '10-Arinc429' },
        { text: '站点配置', link: 'site-config' }  
      ]
    },
    {
      text: '硬件电路',
      collapsed: false,
      items: [     
        { text: 'Arinc429总线解析', link: '10-Arinc429' },
        { text: '站点配置', link: 'site-config' }  
      ]
    },
    {
      text: '软件编程',
      collapsed: false,
      items: [     
        { text: 'Arinc429总线解析', link: '10-Arinc429' },
        { text: '站点配置', link: 'site-config' }  
      ]
    }
  ]
}
