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

推荐使用 Visual Studio Code 编辑，安装以下扩展提升效率：

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) - 语法规范检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 自动格式化工具

启用"保存时格式化"功能确保风格统一。

## 格式规范

### 内部链接

使用相对路径：

```md
✅ [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
❌ [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
```

### 图片资源

存放路径：`/static/images/子目录`

引用方式：`![描述](/images/文件名.png)`

### 元数据头

每个文档开头必须包含：

```mdx
---
title: 文档标题
sidebar_label: 侧边栏标签
description: 页面描述
---
```

### 标题层级

禁止使用一级标题（由系统自动生成），从二级标题开始：

```md
✅ ## 子章节
❌ # 主标题
```

### 技术术语标注

函数名、参数等技术要素使用反引号标注：

```md
`fopen`函数返回带`File:`标签的值
```

### 表格规范

必须包含表头：

```md
| 生命值 | 引擎状态 |
| ------ | -------- |
| 650    | 完好无损 |
```

## SA-MP Wiki 迁移指南

### HTML 内容提取

1. 使用浏览器开发者工具定位`<div id=content>`元素
2. 复制内部 HTML 代码

### 格式转换工具

- 基础 HTML 转 Markdown：[Turndown](https://mixmark-io.github.io/turndown/)
- 表格转换：[Markdown Tables](https://jmalarcon.github.io/markdowntables/)

### 内容清理

转换后需人工校验格式，未完成稿件可提交 PR 由社区协作完善。

## 贡献者协议

所有贡献需签署[贡献者许可协议(CLA)](https://cla-assistant.io/openmultiplayer/homepage)，首次提交 PR 时系统将自动提示签署流程。
