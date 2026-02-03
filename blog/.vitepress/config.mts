import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "自进化机器人社区",
  description: "让机器人拥有自进化能力，脱离人类独立完成任务。",
  lang: 'zh-CN',
  outDir: '../company-site/blog',
  base: '/blog/',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '技术路线', link: '/具身智能技术路线' },
      { text: '产品调研', link: '/机器人产品调研' },
      { text: '项目实践', link: '/项目实践' }
    ],

    sidebar: [
      {
        text: '路线图',
        items: [
          { text: '新手起步', link: '/路线图/新手起步' },
          { text: '核心能力', link: '/路线图/核心能力' },
          { text: '项目实践', link: '/路线图/项目实践' }
        ]
      },
      {
        text: '基础课程',
        items: [
          { text: 'Python', link: '/基础课程/Python' },
          { text: 'Linux', link: '/基础课程/Linux' },
          { text: '机器学习', link: '/基础课程/机器学习' },
          { text: '深度学习', link: '/基础课程/深度学习' }
        ]
      },
      {
        text: '核心知识',
        items: [
          { text: '多模态大模型', link: '/核心知识/多模态大模型' },
          { text: '强化学习', link: '/核心知识/强化学习' },
          { text: '世界模型', link: '/核心知识/世界模型' },
          { text: 'VLA', link: '/核心知识/VLA' }
        ]
      },
      {
        text: 'VLA 系列',
        items: [
          { text: 'OpenVLA', link: '/VLA/openvla' },
          { text: 'π0', link: '/VLA/π0' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/selfevolv' }
    ],

    footer: {
      message: '自进化机器人社区',
      copyright: 'Copyright © 2024-present'
    },

    search: {
      provider: 'local'
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
})
