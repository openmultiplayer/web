---
title: GameTextForAll
sidebar_label: GameTextForAll
description: 为所有玩家显示指定持续时间的'游戏文本'（屏幕文本）。
tags: ["游戏文本"]
---

## 描述

为所有玩家显示指定持续时间的'游戏文本'（屏幕文本）。

| 参数             | 说明                                          |
| ---------------- | --------------------------------------------- |
| const format[]   | 要显示的文本内容                              |
| time             | 文本显示持续时间（以毫秒为单位）              |
| style            | 文本显示的[样式](../resources/gametextstyles) |
| OPEN_MP_TAGS:... | 任意数量的不限类型的参数                      |

## 返回值

此函数总是返回 1。

## 示例

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // 此示例在玩家死亡后，为所有玩家显示白色大字体的"[玩家昵称] 已死亡"
    // 使用3号文本类型，持续5秒（5000毫秒）
    new name[MAX_PLAYER_NAME];
    GetPlayerName(playerid, name, sizeof(name));

    // 正确格式化死亡消息并显示给所有玩家：
    new string[64];
    format(string, sizeof(string), "~w~%s has passed away", name);
    GameTextForAll(string, 5000, 3);

    // 专业提示：在open.mp中无需使用`format`
    GameTextForAll("~w~%s has passed away", 5000, 3, name);
    return 1;
}
```

## 注意事项

:::warning

注意：如果游戏文本中使用的波浪号(`~`)符号数量为奇数，可能导致玩家客户端崩溃。在超过 255 个字符后使用颜色代码（例如~r~）会导致客户端崩溃。

:::

## 相关函数

- [HideGameTextForAll](HideGameTextForAll): 停止为所有玩家显示游戏文本样式
- [GameTextForPlayer](GameTextForPlayer): 为单个玩家显示游戏文本
- [HideGameTextForPlayer](HideGameTextForPlayer): 停止为单个玩家显示游戏文本样式
- [TextDrawShowForAll](TextDrawShowForAll): 为所有玩家显示文本绘图

## 相关资源

- [游戏文本样式](../resources/gametextstyles)
