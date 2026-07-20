---
title: 贡献指南
sidebar_label: 贡献指南
description: 参与SA-MP Wiki与open.mp文档贡献的完整指南
---

本文档源码向所有人开放贡献！你只需拥有[GitHub](https://github.com)账号即可参与，无需掌握 Git 技术，所有操作均可通过网页界面完成！

如需维护特定语言版本，请向[`CODEOWNERS`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS)文件提交 PR，在对应语言目录添加你的 GitHub 用户名。

## 内容编辑

每个页面顶部均设有编辑入口：

![每个Wiki页面上的"编辑此页面"链接](https://assets.open.mp/assets/images/contributing/edit-this-page.png)

以[SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity)页面为例，点击编辑按钮将跳转至[GitHub 编辑界面](https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetVehicleAngularVelocity.md)，登录后可直接在线修改内容。

提交修改后创建"Pull Request"，Wiki 维护者与社区成员将审核你的变更，经讨论确认后合并至主分支。

## 新增内容

### GitHub 网页端

在 GitHub 目录页点击右上角"Add file"按钮：

![新增文件按钮](https://assets.open.mp/assets/images/contributing/add-new-file.png)

支持直接上传 Markdown 文件或在线编辑。文件扩展名必须为`.md`，格式规范参考[Markdown 指南](https://guides.github.com/features/mastering-markdown/)。

### Git 本地操作

克隆仓库至本地：

```sh
git clone https://github.com/openmultiplayer/web.git
```

在你喜欢的编辑器中打开它。我推荐使用Visual Studio Code，因为它提供了出色的Markdown文件编辑和格式化工具。如你所见，我正在使用Visual Studio Code撰写本文！

![Visual Studio Code Markdown预览](https://assets.open.mp/assets/images/contributing/vscode.png)

我推荐安装两个扩展以提升体验：

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) by David Anson - 该扩展可确保Markdown格式正确，防止语法和语义错误。并非所有警告都至关重要，但有些有助于提高可读性。请运用最佳判断，如有疑问，直接咨询审阅者！
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) by Prettier.js团队 - 这是一个格式化工具，可自动格式化Markdown文件，使其风格统一。维基仓库的`package.json`中包含一些设置，扩展应能自动应用。请务必在编辑器设置中启用"保存时格式化"，这样每次保存时Markdown文件都会自动格式化！

## 注释、提示与约定

### 内部链接

站点内链接请勿使用绝对URL，应使用相对路径。

- ❌

  ```md
  需配合[OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)使用
  ```

- ✔

  ```md
  需配合[OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)使用
  ```

`../`表示"返回上一级目录"。因此，如果你正在编辑的文件位于`functions`目录下，且要链接到`callbacks`，则使用`../`回到`scripting/`目录，再进入`callbacks/`目录，最后指定目标回调的文件名（不含`.md`）。

### 图片

图片应放置在`/static/images`内的子目录中。在`![]()`中引用图片时，只需使用`/images/`作为基础路径（无需添加`static`，该目录仅为仓库内部使用）。

如有疑问，请查阅其他使用了图片的页面，复制其实现方式。

### 元数据

此处**任何**文档的第一部分应为元数据：

```mdx
---
title: 我的文档
sidebar_label: 我的文档
description: 这是一个关于事物、汉堡等内容的页面，耶！
---
```

每个页面都应包含标题和描述。

关于`---`之间可包含的内容完整列表，请查看[Docusaurus文档](https://docusaurus.io/docs/markdown-features#markdown-headers)。

### 标题

请勿使用`#`创建一级标题（`<h1>`），因为这会由系统自动生成。你的第一个标题**始终**应为`##`

- ❌

  ```md
  # 我的标题

  这是关于...的文档

  # 子章节
  ```

- ✔

  ```md
  这是关于...的文档

  ## 子章节
  ```

### 技术引用使用`代码`片段

在撰写包含函数名、数字、表达式或任何非标准书面语言的段落时，请使用反引号\`\`将它们括起来。这有助于区分描述性语言与技术元素的引用，如函数名和代码片段。

- ❌

  > fopen函数将返回一个带有File:标签的值，该行没有问题，因为返回值被存储到一个同样带有File:标签的变量中（注意大小写也相同）。然而在下一行，值4被添加到文件句柄中。4没有标签[...]

- ✔

  > `fopen`函数将返回一个带有`File:`标签的值，该行没有问题，因为返回值被存储到一个同样带有`File:`标签的变量中（注意大小写也相同）。然而在下一行，值`4`被添加到文件句柄中。`4`没有标签

在上述示例中，`fopen`是一个函数名而非英语单词，因此用`代码`片段标记有助于将其与其他内容区分。

此外，如果段落引用了示例代码块，这有助于读者将文字与示例关联起来。

### 表格

如果表格有表头，它们应位于顶部：

- ❌

  ```md
  |         |                      |
  | ------- | -------------------- |
  | 生命值  | 引擎状态             |
  | 650     | 完好无损             |
  | 650-550 | 白色烟雾             |
  | 550-390 | 灰色烟雾             |
  | 390-250 | 黑色烟雾             |
  | < 250   | 起火（数秒后将爆炸） |
  ```

- ✔

  ```md
  | 生命值  | 引擎状态             |
  | ------- | -------------------- |
  | 650     | 完好无损             |
  | 650-550 | 白色烟雾             |
  | 550-390 | 灰色烟雾             |
  | 390-250 | 黑色烟雾             |
  | < 250   | 起火（数秒后将爆炸） |
  ```

## 许可协议

所有open.mp项目均设有[贡献者许可协议](https://cla-assistant.io/openmultiplayer/homepage)。这基本上意味着你同意让我们使用你的作品，并将其置于开源许可之下。当你首次发起拉取请求时，CLA-Assistant机器人将发布一个链接，供你签署协议。
