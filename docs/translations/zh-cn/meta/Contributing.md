---
title: 贡献
description: 如何为 SA-MP 维基和 open.mp 文档做出贡献.
---

本文档源代码开放，任何人都可以对其进行修改! 您只需要一个 [GitHub](https://github.com) 账号和花一些业余的时间. 你甚至不需要了解 Git，就能在网页界面上完成所有操作!

如果您想帮助维护一种特定的语言, 可以在 [`CODEOWNERS`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS) 文件打开一个拉取请求, 并为语言目录添加一行，其中包含您的用户名.

## 编辑内容

在每个页面上，都有一个按钮可以带你进入 GitHub 页面进行编辑:

![Edit this page link present on each wiki page](images/contributing/edit-this-page.png)

例如，点击 [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) 上的链接会将你带到 [此页面](https://github.com/openmultiplayer/web/blob/master/docs/scripting/functions/SetVehicleAngularVelocity.md) 在那里你可以看到一个文本编辑器用于对文件进行更改（前提是你已登录 GitHub）。

进行编辑并提交“Pull Request”，这意味着 Wiki 维护者和其他社区成员可以审查你的更改，讨论是否需要额外的更改，然后将其合并。

## 添加新内容

添加新内容稍微复杂一些。你可以通过以下两种方式进行操作：

### GitHub 界面

在 GitHub 上浏览目录时，文件列表右上角有一个“添加文件”按钮：

![Add file button](images/contributing/add-new-file.png)

你可以上传已经编写好的 Markdown 文件，或者直接在 GitHub 文本编辑器中编写。

文件 必须 以 `.md` 扩展名结尾，并且包含 Markdown 格式的内容。关于 Markdown 的更多信息，请查看 [此指南](https://guides.github.com/features/mastering-markdown/).

完成后，点击“Propose new file”按钮，一个 Pull Request 将被打开以供审查。  

### Git

如果你想使用 Git，你只需克隆 Wiki 仓库：

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

在你喜欢的编辑器中打开它。我推荐使用 Visual Studio Code，因为它提供了很好的工具来编辑和格式化 Markdown 文件。如你所见，我正在使用 Visual Studio Code 编写这篇文章！

![Visual Studio Code markdown preview](images/contributing/vscode.png)

我推荐两个扩展程序来改善你的编辑体验：

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) by David Anson - 这是一个扩展程序，可确保你的 Markdown 格式正确。它可以防止一些语法和语义上的错误。并非所有警告都是重要的，但有些可以帮助提高可读性。请根据具体情况判断，如果有疑问，请咨询审查者！
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) by the Prettier.js Team - 这是一个格式化工具，它会自动格式化你的 Markdown 文件，使其使用一致的样式。Wiki 仓库中的 package.json 文件包含了一些设置，扩展程序应自动使用这些设置。确保在编辑器设置中启用“保存时格式化”功能，这样每次保存时，Markdown 文件都会自动格式化！

## 注意事项、提示和约定

### 内部链接

不要使用绝对 URL 来进行站内链接。请使用相对路径。

- ❌

  ```md
  To be used with [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  To be used with [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

`../` 表示“返回上一级目录”，因此如果你正在编辑的文件位于 `functions` 目录中，而你要链接到 `callbacks`，就使用 `../` 返回到 `scripting/`，然后进入 `callbacks/` 目录，接着输入回调函数的文件名（不包含 `.md`）。

### 图片

图片应放在 `/static/images` 的子目录中。然后，当你在 `![]()` 中链接图片时，只需使用 `/images/` 作为基础路径（不需要 `static`，那只是为了仓库结构）。

如果不确定，可以参考其他使用图片的页面并模仿其用法。

### 元数据

任何 文档的第一部分都应该是元数据：

```mdx
---
title: My Documentation
description: This is a page about stuff and things and burgers, yay!
---
```

每个页面都应该包含标题和描述。

关于 `---` 之间可以包含的完整列表，请查看 [Docusaurus 文档](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).

### 标题

不要使用 `#` 创建一级标题 (`<h1>`)，因为这会自动生成。你的第一个标题应始终为 `##`。

- ❌

  ```md
  # 我的标题

  这是一个关于 ... 的文档

  # 分节
  ```

- ✔

  ```md
  这是一个关于 ... 的文档

  ## 分节
  ```

### 使用 `Code` 片段进行技术引用

在编写包含函数名、数字、表达式或其他非标准书面语言的段落时，使用 `反引号` 将它们包围起来。这样可以更容易地将描述性语言与技术元素（如函数名和代码片段）区分开来。

- ❌

  > 函数 fopen 将返回一个标签类型为 File: 的值，这一行没有问题，因为返回值被存储到一个标签也是 File: 的变量中（注意情况也是一样的）。但在下一行中，4 的值被添加到文件句柄中。4 没有标签 [...]

- ✔

  > 函数 `fopen` 将返回一个标签类型为 `File:` 的值，这一行没有问题，因为返回值被存储到一个标签也是 `File:` 的变量中（注意情况也是一样的）。但在下一行中，`4` 的值被添加到文件句柄中。`4` 没有标签

在上面的示例中，`fopen` 是一个函数名，而不是英文单词，因此用 `代码` 片段标记将其与其他内容区分开来。

此外，如果段落引用了示例代码块，这有助于读者将文字与示例关联起来。

### 表格

如果表格有标题行，它们应放在顶部：

- ❌

  ```md
  |         |                                      |
  | ------- | ------------------------------------ |
  | 耐久度  | 引擎状态                        |
  | 650     | 未损坏                            |
  | 650-550 | 白色烟雾                          |
  | 550-390 | 灰色烟雾                           |
  | 390-250 | 黑色烟雾                          |
  | < 250   | 着火 (将在几秒后爆炸) |
  ```

- ✔

  ```md
  | 耐久度  | 引擎状态                        |
  | ------- | ------------------------------------ |
  | 650     | 未损坏                            |
  | 650-550 | 白色烟雾                          |
  | 550-390 | 灰色烟雾                           |
  | 390-250 | 黑色烟雾                          |
  | < 250   | 着火 (将在几秒后爆炸) |
  ```

## 从 SA-MP Wiki 迁移

大部分内容已被迁移，但如果你发现某个页面缺失，以下是将内容转换为 Markdown 的简短指南.

### 获取 HTML

1. 点击此按钮

   (Firefox)

   ![image](images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](images/contributing/f62bb8112543.png)

2. 将鼠标悬停在 Wiki 页面左上角的左边距或角落，直到看到 `#content`

   ![image](images/contributing/65761ffbc429.png)

   或搜索 `<div id=content>`

   ![image](images/contributing/77befe2749fd.png)

3. 复制该元素的内部 HTML

   ![image](images/contributing/8c7c75cfabad.png)

   现在你只有页面实际内容的 HTML 代码，这是我们关心的部分，你可以将其转换为 Markdown.

### 将 HTML 转换为 Markdown

要将基本 HTML（无表格）转换为 Markdown，请使用：

https://mixmark-io.github.io/turndown/

![image](images/contributing/77f4ea555bbb.png)

^^ 请注意，它完全搞砸了表格...

### 将 HTML 表格转换为 Markdown 表格

由于上述工具不支持表格，请使用以下工具：

https://jmalarcon.github.io/markdowntables/

并仅复制 `<table>` 元素：

![image](images/contributing/57f171ae0da7.png)

### 清理

转换可能不完美。因此，你可能需要手动进行一些清理。上面列出的格式化扩展程序应该有所帮助，但你可能仍需花时间手动调整。

如果你没有时间，不要担心！提交一个未完成的草稿，其他人可以继续完成它！

## 许可协议

所有 open.mp 项目都有一个 [贡献者许可协议](https://cla-assistant.io/openmultiplayer/homepage). 这基本上意味着你同意让我们使用你的作品，并将其置于开源许可下。当你第一次打开 Pull Request 时，CLA-Assistant 机器人会发布一个链接，你可以在此签署协议。
