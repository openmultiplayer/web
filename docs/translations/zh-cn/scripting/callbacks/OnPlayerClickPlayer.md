---
title: OnPlayerClickPlayer
description: 当一个玩家在记分板上双击另一个玩家时调用。
tags: ["player"]
---

## 描述

当一个玩家在记分板上双击另一个玩家时调用。

| 参数名          | 描述                            |
| --------------- | ------------------------------- |
| playerid        | 在记分板上点击玩家的玩家的 ID。 |
| clickedplayerid | 被点击的玩家的 ID。             |
| source          | 玩家点击的来源。                |

## 返回值

1 - 将阻止其他过滤脚本接收到这个回调。

0 - 表示这个回调函数将被传递给下一个过滤脚本。

它在游戏模式中总是先被调用。

## 案例

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, CLICK_SOURCE:source)
{
    new message[32];
    format(message, sizeof(message), "你点击了玩家 %d", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, message);
    return 1;
}
```

## 要点

:::tip

目前只有一个“来源”(0 - CLICK_SOURCE_SCOREBOARD(点击\_源\_计分板))。这一论点的存在表明，未来可能会有更多的来源得到支持。

:::

## 相关回调

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): 当玩家点击文本绘制时调用。
