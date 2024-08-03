---
title: Create3DTextLabel
description: 在世界的特定位置创建一个三维文本标签。
tags: ["3dtextlabel"]
---

## 描述

在世界的特定位置创建一个三维文本标签

| 参数名       | 说明                                             |
| ------------ | ------------------------------------------------ |
| text[]       | 初始文本内容字符串。                             |
| color        | 文本内容颜色，为整数或 RGBA 格式的十六进制颜色。 |
| x            | X 坐标                                           |
| y            | Y 坐标                                           |
| z            | Z 坐标                                           |
| DrawDistance | 你能够看到三维文本标签的距离                     |
| VirtualWorld | 你能够看到三维文本标签的虚拟世界                 |
| testLOS      | 0/1 控制在视线范围内能否透过物体看到             |

## 返回值

新创建的三维文本标签的 ID，如果达到限制(MAX_3DTEXT_GLOBAL)，则为 INVALID_3DTEXT_ID。

## 案例

```c
public OnGameModeInit()
{
    Create3DTextLabel("我在坐标:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, 0);
    return 1;
}
```

## 要点

:::tip

处于观察模式时，绘制距离似乎小了很多。

:::

:::tip

文本标签内容中的多种颜色请以嵌入格式指定。

:::

:::warning

如果 text[] 参数是空的，服务端或位于文本标签旁的玩家客户端可能会崩溃!
如果虚拟世界被设置为-1，文本标签将不会出现。

:::

## 相关函数

- [Delete3DTextLabel](Delete3DTextLabel): 删除一个三维文本标签。
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): 将三维文本标签附加到玩家身上。
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): 将一个三维文本标签附加到载具。
- [Update3DTextLabelText](Update3DTextLabelText): 改变三维文本标签的文本内容和颜色。
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): 为玩家创建一个三维文本标签。
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): 删除一个为玩家创建的三维文本标签。
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): 改变玩家的三维文本标签的文本内容和颜色。
