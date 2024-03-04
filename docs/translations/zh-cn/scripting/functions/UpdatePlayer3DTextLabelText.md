---
title: UpdatePlayer3DTextLabelText
description: 更新玩家的三维文本标签的文本和颜色。
tags: ["player", "3dtextlabel"]
---

## 描述

更新玩家的三维文本标签的文本和颜色。

| 参数名          | 说明                               |
| --------------- | ---------------------------------- |
| playerid        | 三维文本标签所对应的玩家 ID。      |
| PlayerText3D:id | 您想要更新的三维文本标签的 ID。    |
| color           | 从现在起，三维文本标签的颜色。     |
| text[]          | 从现在起，三维文本标签的文本内容。 |

## 返回值

该函数不返回任何特定的值。

## 要点

:::warning

如果 text[] 参数是空的，服务端或位于文本标签旁的玩家客户端可能会崩溃!

:::

## 相关函数

- [Create3DTextLabel](Create3DTextLabel): 创建一个三维文本标签。
- [Delete3DTextLabel](Delete3DTextLabel): 删除一个三维文本标签。
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): 将三维文本标签附加到玩家身上。
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): 将一个三维文本标签附加到载具。
- [Update3DTextLabelText](Update3DTextLabelText): 改变三维文本标签的文本内容和颜色。
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): 为玩家创建一个三维文本标签。
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): 删除一个为玩家创建的三维文本标签。
