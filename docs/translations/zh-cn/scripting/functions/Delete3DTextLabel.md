---
title: Delete3DTextLabel
description: 删除一个三维文本标签（用Create3DTextLabel创建）。
tags: ["3dtextlabel"]
---

## 描述

删除一个三维文本标签（用 Create3DTextLabel 创建）。

| 参数名    | 说明                        |
| --------- | --------------------------- |
| Text3D:textid | 要删除的三维文本标签的 ID。 |

## 返回值

如果三维文本标签被删除，则为 1，否则为 0。

## 案例

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel(...);

Delete3DTextLabel(gMyLabel);
```

## 相关函数

- [Create3DTextLabel](Create3DTextLabel): 创建一个三维文本标签。
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): 将三维文本标签附加到玩家身上。
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): 将一个三维文本标签附加到载具。
- [Update3DTextLabelText](Update3DTextLabelText): 改变三维文本标签的文本内容和颜色。
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): 为玩家创建一个三维文本标签。
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): 删除一个为玩家创建的三维文本标签。
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): 改变玩家的三维文本标签的文本内容和颜色。
