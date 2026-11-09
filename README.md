# Stage 官网

Stage 的双语产品官网，介绍活动发现、选票、支付和电子票体验。页面中的活动与票券均为示意，不连接真实售票系统。

## 本地预览

无需安装依赖。在项目目录运行：

```sh
python3 -m http.server 4173
```

然后访问 <http://localhost:4173>。网站由静态 HTML、CSS 和 JavaScript 构成，可直接部署到 Vercel，无需构建步骤。

`assets/stage-icon.png` 和 `assets/favicon.png` 使用 Stage 应用的品牌资源；`assets/live-stage.jpg` 为官网生成的演出氛围图。网站没有嵌入应用商店链接或真实活动数据。

演出图使用内置 ImageGen 生成。提示词：从现场观众后方拍摄室内演出，远处的表演者被蓝色、青色及少量紫色舞台光照亮，电影感、暗色边缘、真实现场氛围，不含文字、标志或水印。
