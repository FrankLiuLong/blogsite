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
      '/blog/': { base: '/blog/', items: sidebarBlog() },
      '/contact/': { base: '/blog/', items: sidebarContact() }
    },
    /*
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },*/

    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2019-至今 刘清斌'
    }
  }
})

//-顶部菜单栏配置
function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '产品选型',
      link: '/product/00-Contents',
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
      text: '技术博客',
      link: '/blog/10-Arinc429',
      activeMatch: '/blog/'
    },
    {
      text: '联系我们',
      link: '/blog/10-Arinc429',
      activeMatch: '/contact/'
    }
  ]
}

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '产品选型',
      items: [
        { text: '选型目录', link: '00-Contents' }
        
      ]
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
    }    
  ]
}

function sidebarCustomCase(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '非标测试设备',
      collapsed: false,
      items: [     
        { text: '某型号联试测试系统', link: 'site-config' },
        { text: '某型号DD测试系统', link: 'site-config' },
        { text: '某武器系统地面系统模拟单元', link: 'site-config' },        
        //{ text: '图像数据记录及控制组件', link: 'site-config' },
        { text: '引信宽带信号处理与评估设备', link: 'site-config' }
      ]
    },
    {
      text: '定制板卡',
      collapsed: false,
      items: [     
        { text: 'SX24C01.UG-PXI程控电阻桥板卡', link: 'site-config' },
        { text: 'SS25001-多路复用开关板', link: 'site-config' } ,
        { text: '基于K7的PXI&PXIe数据处理板', link: 'site-config' } ,
        { text: '基于PCI9054的通用CPCI/PXI开发板', link: 'site-config' }
      ]
    },
    {
      text: '定制模块',
      collapsed: false,
      items: [     
        { text: '数据采集模块', link: 'site-config' },
        { text: 'CML图像数据记录仪', link: 'site-config' },
        { text: '数据存储分析模块', link: 'site-config' }
      ]
    }
  ]
}

function sidebarBlog(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '总线通信',
      collapsed: false,
      items: [     
        { text: 'Arinc429总线解析', link: '10-Arinc429' },
        { text: 'BU-61865/61580使用手册', link: '11-BU61580' }  
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
        { text: 'ZYNQ7035、7045电源设计', link: '30-ZYQN7035_45_POWER' }
 
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

function sidebarContact(): DefaultTheme.SidebarItem[] {
  return [
    { text: '什么是 VitePress？', link: 'what-is-vitepress' }   
  ]
}