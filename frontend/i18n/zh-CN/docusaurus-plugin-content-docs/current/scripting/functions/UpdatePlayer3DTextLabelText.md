---
title: UpdatePlayer3DTextLabelText
sidebar_label: UpdatePlayer3DTextLabelText
description: 更新玩家3D文本标签的文本内容及颜色。
tags: ["玩家", "3D文本标签"]
---

## 描述

更新指定玩家 3D 文本标签的文本内容及颜色。

| 参数                | 说明                                         |
| ------------------- | -------------------------------------------- |
| playerid            | 创建该 3D 文本标签的玩家 ID                  |
| PlayerText3D:textid | 需要更新的 3D 文本标签 ID                    |
| colour              | 3D 文本标签的新颜色值（十六进制格式）        |
| const text[]        | 3D 文本标签的新文本内容                      |
| OPEN_MP_TAGS:...    | 用于格式化文本的可变参数（类似 printf 语法） |

## 返回值

此函数不返回特定值。

## 注意事项

:::warning

若 text[]为空字符串，原版 SA-MP 中附近客户端/服务端可能崩溃！（该问题在 open.mp 中已修复）

:::

## 相关函数

- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): 为指定玩家创建 3D 文本标签
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): 删除玩家的 3D 文本标签
- [GetPlayer3DTextLabelText](GetPlayer3DTextLabelText): 获取玩家 3D 文本标签的文本内容
- [GetPlayer3DTextLabelColour](GetPlayer3DTextLabelColour): 获取玩家 3D 文本标签的颜色值
- [Update3DTextLabelText](Update3DTextLabelText): 更新全局 3D 文本标签的显示内容
