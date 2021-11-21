import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'uniapp-vue3',
  description: 'uniapp vue3 typescript搭建基础脚手架  ',

  themeConfig: {
   navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'uni-app',
        children: [
          "/uniapp/test.md"
        ]
      },
    ],
  },
})