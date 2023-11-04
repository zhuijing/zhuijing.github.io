module.exports = function () {
  const glob = require('glob')
  const path = require('path')
  //      sidebarDepth: 2, 
  // collapsable: true, 
  const siderbar = [
    {
      title: 'Vue3.0',
      path: '/view/Vue3.0/',
    },
    {
      title: 'React',
      path: '/view/React/',
    },
    {
      title: 'Young',
      path: '/view/Young/',
    },
    {
      title: 'Rust',
      path: '/view/Rust/',
    },
    {
      title: 'Vue',
      path: '/view/Vue/',
    },
    {
      title: 'Webpack',
      path: '/view/Webpack/',
    },
    {
      title: 'TS',
      path: '/view/TS/',
    },
    {
      title: 'JS',
      path: '/view/JS/',
    },
    {
      title: 'Node',
      path: '/view/Nodejs/',
    },
    {
      title: '设计模式',
      path: '/view/DesignPattern/',
    },
    {
      title: '算法',
      path: '/view/Algorithm/',
    },
    {
      title: 'Linux',
      path: '/view/Linux/',
    },
    {
      title: 'Docker',
      path: '/view/Docker/',
    },
    {
      title: 'Http协议',
      path: '/view/Http/',
    },
    {
      title: 'MongoDB数据库',
      path: '/view/MongoDB/',
    },
    {
      title: '小程序',
      path: '/view/MiniApp/',
    },
    {
      title: 'Git',
      path: '/view/Git/',
    },
    {
      title: 'Css',
      path: '/view/Css/',
    },
    {
      title: 'Less',
      path: '/view/Less/',
    },
    {
      title: 'Scss',
      path: '/view/Scss/',
    },
    {
      title: 'Vs Code 插件',
      path: '/view/Vscode/',
    },
    {
      title: '杂记',
      path: '/view/Other/',
    }
  ]
  siderbar.forEach(item => {
    item.sidebarDepth = 0
    item.collapsable = true;
    const children = glob.sync('*.md', {
      cwd: path.join(__dirname, '..', item.path)
    }).filter(item => {
      return !/README/.test(item)
    })
    item.children = children.map(file => item.path + file)
  })
  return siderbar
}