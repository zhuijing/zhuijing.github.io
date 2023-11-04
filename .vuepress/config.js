const path = require('path')
const getsidebar = require('./siderbar')
const sidebar = getsidebar()
const webpack = require('webpack')
console.log(`sidebar1`, sidebar)
module.exports = {
  title: '追境的笔记',
  description: '追境的笔记，曹泽鹏读书笔记,VUE,Vue,JS,REACT,React,TypeScript,TS,Node,NodeJs,Mongodb,Koa,算法',
  configureWebpack: {
    resolve: {
      alias: {
        '@imgs': path.join(__dirname ,'/assets/imgs')
      }
    }
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // logo: './assets/imgs/czp.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '联系我', href: 'tel:13545253491' ,link:'tel:13545253491'},
      { text: 'Vue', link: '/view/Vue/' },
      { text: 'React', link: '/view/React/' },
      { text: 'Vue3.0.0', link: '/view/Vue3.0/' },
      { text: '网站分类', link: '/view/Other/16' },
      { text: '工具', link: '/view/Tools' },


      // { text: 'React', link: 'https://google.com' },
      // {
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // }
    ],
    displayAllHeaders: true, // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#显示所有页面的标题链接
    sidebar
  },
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-active-header-links','@vuepress/plugin-nprogress']
}