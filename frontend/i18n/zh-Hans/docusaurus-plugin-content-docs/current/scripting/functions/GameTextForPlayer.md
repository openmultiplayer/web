---
title: GameTextForPlayer
sidebar_label: GameTextForPlayer
description: 为指定玩家显示持续特定时间的'游戏文本'（屏幕文本）。
tags: ["玩家", "游戏文本"]
---

## 描述

为指定玩家显示持续特定时间的'游戏文本'（屏幕文本）。

| 参数名           | 说明                                          |
| ---------------- | --------------------------------------------- |
| playerid         | 目标玩家的 ID                                 |
| const format[]   | 要显示的文本内容                              |
| time             | 文本显示持续时间（以毫秒为单位）              |
| style            | 文本显示的[样式](../resources/gametextstyles) |
| OPEN_MP_TAGS:... | 任意数量的不限类型的参数                      |

## 返回值

**true** - 函数执行成功（即使样式/时间参数无效也会返回成功，但不会显示文本，可能引发崩溃）

**false** - 函数执行失败（字符串为空或玩家未连接）

## 示例

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    GameTextForPlayer(playerid, "Wasted", 5000, 2);

    if (killerid != INVALID_PLAYER_ID)
    {
        new name[MAX_PLAYER_NAME];
        GetPlayerName(playerid, name, sizeof(name));

        GameTextForPlayer(killerid, "~w~You killed ~r~%s", 3000, 3, name);
    }
    return 1;
}
```

## 注意事项

:::warning

注意：游戏文本中波浪号(`~`)的数量为奇数可能导致客户端崩溃。颜色代码（如~r~）在超过 255 字符后使用会引发崩溃。

字符串末尾的空格会导致失效。例如：`"爆头 "` 会失败，应改为 `"爆头"` 或 `"爆头_"`（使用下划线替代空格）。

:::

## 相关函数

- [HideGameTextForPlayer](HideGameTextForPlayer): 停止为玩家显示游戏文本样式
- [GameTextForAll](GameTextForAll): 为所有玩家显示游戏文本
- [HideGameTextForAll](HideGameTextForAll): 停止为所有玩家显示游戏文本样式
- [GetGameText](GetGameText): 获取指定游戏文本样式的信息
- [HasGameText](HasGameText): 检查玩家当前是否显示指定样式的游戏文本
- [TextDrawShowForAll](TextDrawShowForAll): 为所有玩家显示文本绘图

## 相关资源

- [游戏文本样式](../resources/gametextstyles)
