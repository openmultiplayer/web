---
title: 游戏文本样式
sidebar_label: 游戏文本样式
description: 文本绘图与游戏文本的样式说明
---

本文详细说明在文本绘图（TextDraw）和玩家游戏文本（GameText）中使用的样式规则，主要应用于[GameTextForPlayer](../functions/GameTextForPlayer)和[GameTextForAll](../functions/GameTextForAll)函数。

---

## 文本颜色

通过颜色代码可以实现文本分段着色。使用格式为：\~颜色代码\~文本内容\~颜色代码\~（例如：\~y\~黄色文本\~y\~）

| 代码                             | 颜色示例                                                        | 描述                         |
| -------------------------------- | --------------------------------------------------------------- | ---------------------------- |
| 无                               | ![](https://assets.open.mp/assets/images/gameTextStyles/-.png)  | 默认颜色，无需代码           |
| `~h~`                            | ![](https://assets.open.mp/assets/images/gameTextStyles/h.png)  | 默认色的浅色版本             |
| `~h~~h~`                         | ![](https://assets.open.mp/assets/images/gameTextStyles/hh.png) | 默认色的更浅版本             |
| `~r~`                            | ![](https://assets.open.mp/assets/images/gameTextStyles/r.png)  | 红色（支持 5 级亮度调节）    |
| `~r~~h~` 至 `~r~~h~~h~~h~~h~~h~` | 多级示例图                                                      | 逐步增亮的红色变体           |
| `~g~`                            | ![](https://assets.open.mp/assets/images/gameTextStyles/g.png)  | 绿色（支持 4 级亮度调节）    |
| `~g~~h~` 至 `~g~~h~~h~~h~~h~`    | 多级示例图                                                      | 逐步增亮的绿色变体           |
| `~b~`                            | ![](https://assets.open.mp/assets/images/gameTextStyles/b.png)  | 蓝色（支持 3 级亮度调节）    |
| `~b~~h~` 至 `~b~~h~~h~~h~`       | 多级示例图                                                      | 逐步增亮的蓝色变体           |
| `~p~`                            | ![](https://assets.open.mp/assets/images/gameTextStyles/p.png)  | 紫色（支持 2 级亮度调节）    |
| `~p~~h~` 至 `~p~~h~~h~`          | 多级示例图                                                      | 逐步增亮的紫色变体           |
| `~y~`                            | ![](https://assets.open.mp/assets/images/gameTextStyles/y.png)  | 黄色（支持 2 级亮度调节）    |
| `~y~~h~` 至 `~y~~h~~h~`          | 多级示例图                                                      | 逐步增亮的黄色变体           |
| `~l~`                            | ![](https://assets.open.mp/assets/images/gameTextStyles/l.png)  | 灰色（不可调节亮度）         |
| `~w~` 或 `~s~`                   | ![](https://assets.open.mp/assets/images/gameTextStyles/w.png)  | 白色（支持 1 级亮度调节）    |
| `~w~~h~` 或 `~s~~h~`             | ![](https://assets.open.mp/assets/images/gameTextStyles/wh.png) | 所有颜色过度提亮后的最终状态 |

---

## 特殊字符

以下符号无需闭合标签，直接插入文本即可生效：

| 代码  | 功能说明                                                                                                 |
| ----- | -------------------------------------------------------------------------------------------------------- |
| `~n~` | 换行符                                                                                                   |
| `~h~` | 颜色提亮标记（可在颜色代码中间使用，例如`~r~红色~h~提亮部分`）                                           |
| `~u~` | 灰色上箭头符号 ↑                                                                                         |
| `~d~` | 灰色下箭头符号 ↓                                                                                         |
| `~<~` | 灰色左箭头符号 ←                                                                                         |
| `~>~` | 灰色右箭头符号 →                                                                                         |
| `~]~` | 星号符号 \*（仅限样式 3/4/5 使用）                                                                       |
| `~k~` | 键盘按键映射（例如`~k~~VEHICLE_TURRETLEFT~`显示左炮塔键位），完整列表请查看[按键代码](keys) |

:::danger

警告：单个游戏文本中使用过多颜色代码或特殊字符可能导致玩家客户端崩溃。同时避免波浪号`~`的不对称使用，错误示例：`~~r~错误~g~示例`

:::

## 基础文本样式

| 样式   | 预览图                                                              | 特性说明                                                               |
| ------ | ------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 样式 0 | ![](https://assets.open.mp/assets/images/gameTextStyles/style0.png) | 固定显示 9 秒（无视时间设置），会覆盖其他文本（通过 fixes.inc 修复）   |
| 样式 1 | ![](https://assets.open.mp/assets/images/gameTextStyles/style1.png) | 8 秒后淡出，若设置时间更长将循环显示（通过 fixes.inc 修复）            |
| 样式 2 | ![](https://assets.open.mp/assets/images/gameTextStyles/style2.png) | 无特殊说明                                                             |
| 样式 3 | ![](https://assets.open.mp/assets/images/gameTextStyles/style3.png) | 无特殊说明                                                             |
| 样式 4 | ![](https://assets.open.mp/assets/images/gameTextStyles/style4.png) | 无特殊说明                                                             |
| 样式 5 | ![](https://assets.open.mp/assets/images/gameTextStyles/style5.png) | 固定显示 3 秒（无视时间设置），频繁调用会被屏蔽（通过 fixes.inc 修复） |
| 样式 6 | ![](https://assets.open.mp/assets/images/gameTextStyles/style6.png) | 无特殊说明                                                             |

---

## fixes.inc 扩展样式

通过[fixes.inc](https://github.com/pawn-lang/sa-mp-fixes)扩展的样式：

| 样式    | 预览图                                                               | 原型参照                       |
| ------- | -------------------------------------------------------------------- | ------------------------------ |
| 样式 7  | ![](https://assets.open.mp/assets/images/gameTextStyles/style7.png)  | 《圣安地列斯》车辆名称风格     |
| 样式 8  | ![](https://assets.open.mp/assets/images/gameTextStyles/style8.png)  | 《圣安地列斯》地点名称风格     |
| 样式 9  | ![](https://assets.open.mp/assets/images/gameTextStyles/style9.png)  | 《圣安地列斯》电台选择完成样式 |
| 样式 10 | ![](https://assets.open.mp/assets/images/gameTextStyles/style10.png) | 《圣安地列斯》电台切换中样式   |
| 样式 11 | ![](https://assets.open.mp/assets/images/gameTextStyles/style11.png) | 《圣安地列斯》资金增加提示     |
| 样式 12 | ![](https://assets.open.mp/assets/images/gameTextStyles/style12.png) | 《圣安地列斯》资金减少提示     |
| 样式 13 | ![](https://assets.open.mp/assets/images/gameTextStyles/style13.png) | 《圣安地列斯》特技奖励样式     |
| 样式 14 | ![](https://assets.open.mp/assets/images/gameTextStyles/style14.png) | 《圣安地列斯》游戏内时钟样式   |
| 样式 15 | ![](https://assets.open.mp/assets/images/gameTextStyles/style15.png) | 《圣安地列斯》系统通知弹窗样式 |
