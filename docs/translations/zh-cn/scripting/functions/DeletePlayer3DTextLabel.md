---
title: DeletePlayer3DTextLabel
description: 删除由CreatePlayer3DTextLabel创建的三维文本标签。
tags: ["player", "3dtextlabel"]
---

## 描述

删除由 CreatePlayer3DTextLabel 创建的三维文本标签。

| 参数名          | 说明                              |
| --------------- | --------------------------------- |
| playerid        | 要删除的三维文本标签的玩家的 ID。 |
| PlayerText3D:textid | 要删除的玩家的三维文本标签的 ID。 |

## 返回值

1:函数执行成功。

0:函数执行失败。这意味着指定的标签不存在。

## 案例

```c
new PlayerText3D:labelid = CreatePlayer3DTextLabel(...);

// 晚些时候...
DeletePlayer3DTextLabel(playerid, labelid);
```

## 相关函数

- [Create3DTextLabel](Create3DTextLabel): 创建一个三维文本标签。
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): 将三维文本标签附加到玩家身上。
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): 将一个三维文本标签附加到载具。
- [Update3DTextLabelText](Update3DTextLabelText): 改变三维文本标签的文本内容和颜色。
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): 为玩家创建一个三维文本标签。
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): 改变玩家的三维文本标签的文本内容和颜色。
