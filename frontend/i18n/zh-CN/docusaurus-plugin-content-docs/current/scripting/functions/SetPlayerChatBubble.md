---
title: SetPlayerChatBubble
sidebar_label: SetPlayerChatBubble
description: 在玩家名牌上方创建聊天气泡。
tags: ["玩家"]
---

## 描述

在玩家名牌上方创建聊天气泡。

| 参数               | 说明                                       |
| ------------------ | ------------------------------------------ |
| playerid           | 要显示聊天气泡的玩家 ID                    |
| const text[]       | 要显示的文本内容                           |
| colour             | 文本颜色（RGBA 格式）                      |
| Float:drawDistance | 其他玩家可见该气泡的距离（单位：游戏单位） |
| expireTime         | 气泡显示持续时间（单位：毫秒）             |
| OPEN_MP_TAGS:...   | 可变参数列表（支持任意标签类型）           |

## 返回值

该函数没有特定返回值。

## 示例代码

```c
public OnPlayerText(playerid, text[])
{
    SetPlayerChatBubble(playerid, text, 0xFF0000FF, 100.0, 10000);
    return 1;
}
```

## 注意事项

:::tip

玩家无法看到自己的聊天气泡，此规则同样适用于附加的 3D 文本标签

:::

:::tip

- 支持在文本中使用颜色嵌入代码实现多色文字效果
- 使用"-1"作为颜色值将显示为白色（因为-1 的十六进制表示为 0xFFFFFFFF）

:::

## 相关函数

- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): 为玩家附加 3D 文本标签
