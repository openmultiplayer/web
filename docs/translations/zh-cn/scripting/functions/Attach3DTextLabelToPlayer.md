---
title: Attach3DTextLabelToPlayer
description: 将三维文本标签附加到玩家身上。
tags: ["player", "3dtextlabel"]
---

## 描述

将三维文本标签附加到玩家身上。

| 参数名    | 说明                                                   |
| --------- | ------------------------------------------------------ |
| Text3D:textid | 要附加的三维文本标签的 ID。由 Create3DTextLabel 返回。 |
| playerid  | 要附加的玩家 ID。                                      |
| OffsetX   | 距离玩家的 X 坐标偏移量。                              |
| OffsetY   | 距离玩家的 Y 坐标偏移量。                              |
| OffsetZ   | 距离玩家的 Z 坐标偏移量。                              |

## 返回值

1:函数执行成功。

0:函数执行失败。这意味着玩家(和/或标签)不存在。

## 案例

```c
public OnPlayerConnect(playerid)
{
    new Text3D:textLabel = Create3DTextLabel("你好，我是新来的！", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);
    Attach3DTextLabelToPlayer(textLabel, playerid, 0.0, 0.0, 0.7);
    return 1;
}
```

## 相关函数

- [Create3DTextLabel](Create3DTextLabel): 创建一个三维文本标签。
- [Delete3DTextLabel](Delete3DTextLabel): 删除一个三维文本标签。
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): 将一个三维文本标签附加到载具。
- [Update3DTextLabelText](Update3DTextLabelText): 改变三维文本标签的文本内容和颜色。
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): 为玩家创建一个三维文本标签。
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): 删除一个为玩家创建的三维文本标签。
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): 改变玩家的三维文本标签的文本内容和颜色。
