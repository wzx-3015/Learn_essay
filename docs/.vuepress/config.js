/*
 * @Description: 请输入当前文件描述
 * @Author: WangZhen Xin (834529118@qq.com)
 * @Date: 2019-09-11 11:15:43
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2020-06-30 13:52:37
 */
module.exports = {
  title: '@小鑫',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  base:　'/blogs/',
  dest: 'dist',
  port: '7000',
  themeConfig: {
    nav: [
      // { text: 'Home', link: '/' },
      {
        text: '前端监控',
        items: [
          {
            text: '前端异常监控篇',
            link: '/web/monitoring/'
          }
        ]
      },
      {
        text: 'leetcode 每日一题',
        link: '/leetcode/',
      },
      {
        text: '前端',
        items: [
          {
            text: 'CSS',
            link: '/web/css/'
          },
          {
            text: 'javascript',
            link: '/web/javascript/',
          }
        ]
      },
      {
        text: '学习资源', link: '/learningResource/'
      },
      { text: 'GitHub', link: 'https://github.com/wzx1997/blogs/tree/master' },
    ],
    sidebar: {
      '/web/css/': [
        {
          title: 'CSS奇妙之旅',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['', 'Loading'],
            'CssBorder',
            'CssPseudoElements'
          ]
        }
      ],
      '/web/javascript/': [
        {
          title: 'javascript技巧',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['Skill/', '常用函数'],
          ]
        },
        {
          title: 'javascript执行机制',   
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            'implement/'
          ]
        }
      ],
      '/web/monitoring/': [
        {
          title: '异常监控',
          collapsable: false,
          sidebarDepth: 1,
          children: ['', 'collection']
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true
  }
}
