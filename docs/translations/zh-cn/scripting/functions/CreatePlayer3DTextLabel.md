---
title: CreatePlayer3DTextLabel
description: 只为某个特定的玩家创建一个三维文本标签。
tags: ["player", "3dtextlabel"]
---

## 描述

只为某个特定的玩家创建一个三维文本标签。

| 参数名          | 说明                                                              |
| --------------- | ----------------------------------------------------------------- |
| playerid        | 新创建的三维文本标签想给哪个玩家 ID 看到。                        |
| text[]          | 用于显示的文本内容。                                              |
| color           | 文本内容颜色。                                                    |
| x               | X 坐标 (如果用于附加则为偏移量)                                   |
| y               | Y 坐标 (如果用于附加则为偏移量)                                   |
| z               | Z 坐标 (如果用于附加则为偏移量)                                   |
| DrawDistance    | 你能够看到三维文本标签的距离                                      |
| attachedplayer  | 你想把三维文本标签附加在哪个玩家身上。(不附加: INVALID_PLAYER_ID) |
| attachedvehicle | 你想把三维文本标签附加在哪个载具上。 (不附加: INVALID_VEHICLE_ID) |
| testLOS         | 0/1 控制在视线范围内能否透过物体看到                              |

## 返回值

新创建的玩家三维文本标签的 ID，如果达到限制(MAX_3DTEXT_PLAYER)，则为 INVALID_3DTEXT_ID。

## 案例

```c
if (strcmp(cmd, "/playerlabel", true) == 0)
{
    new
        PlayerText3D: playerTextId,
        Float: X, Float: Y, Float: Z;

    GetPlayerPos(playerid, X, Y, Z);
    playerTextId = CreatePlayer3DTextLabel(playerid, "你好\n我就在你当前的坐标上", 0x008080FF, X, Y, Z, 40.0);
    return 1;
}
```

## 要点

:::tip

处于观察模式时，绘制距离似乎小了很多。

:::

:::warning

如果 text[] 参数是空的，服务端或位于文本标签旁的玩家客户端可能会崩溃!

:::

## 相关函数

- [Create3DTextLabel](Create3DTextLabel): 创建一个三维文本标签。
- [Delete3DTextLabel](Delete3DTextLabel): 删除一个三维文本标签。
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): 将三维文本标签附加到玩家身上。
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): 将一个三维文本标签附加到载具。
- [Update3DTextLabelText](Update3DTextLabelText): 改变三维文本标签的文本内容和颜色。
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): 删除一个为玩家创建的三维文本标签。
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): 改变玩家的三维文本标签的文本内容和颜色。
