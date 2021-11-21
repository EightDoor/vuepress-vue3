export const data = {
  "key": "v-2d0aa66a",
  "path": "/my/",
  "title": "我是谁",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "my/README.md",
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
