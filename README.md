# anpenghhh.github.io

个人网站。纯静态：一个 HTML、一份 CSS、一小段 JS，没有构建步骤，没有第三方依赖。

## 改内容

所有文案都在 `index.html` 里，搜 `TODO` 就能找到要替换的地方：

| 改什么 | 在哪 |
| --- | --- |
| 名字 | 侧栏 `<h1>` |
| 一句话定位 | 侧栏 `<h2>` 和 `.tagline` |
| 自我介绍 | `<section id="about">` |
| 项目（3 个） | `<ul class="project-list">` |
| 技术栈 | `<dl class="stack">` |
| 邮箱 / GitHub | `.social` 和 `#contact` 两处都要改 |

改颜色或字号只需要动 `style.css` 顶部的变量。

## 本地预览

直接双击 `index.html` 就能看，或者起个本地服务：

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 上线

推送到 `main` 分支即可，GitHub Pages 会自动更新，通常一两分钟。

```bash
git add .
git commit -m "update"
git push
```
