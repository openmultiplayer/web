---
title: PlayerHasClockEnabled
sidebar_label: PlayerHasClockEnabled
description: 检测玩家是否启用游戏内时钟
tags: ["玩家"]
---

## 描述

用于检测玩家是否启用了游戏内时钟显示（参见[TogglePlayerClock](TogglePlayerClock)）

| 参数     | 说明            |
| -------- | --------------- |
| playerid | 要检测的玩家 ID |

## 返回值

**true** - 时钟显示已启用

**false** - 未启用或指定玩家不存在

## 示例

```c
public OnPlayerConnect(playerid)
{
    TogglePlayerClock(playerid, true); // 显示时钟

    if (PlayerHasClockEnabled(playerid))
    {
        SendClientMessage(playerid, COLOR_WHITE, "已启用游戏时钟显示");
    }
    return 1;
}
```

## 注意事项

:::tip

玩家时间不会与其他玩家同步！如需同步时间请使用[SetPlayerTime](SetPlayerTime)

:::

## 相关函数

- [SetPlayerTime](SetPlayerTime): 设置玩家个人时间
- [SetWorldTime](SetWorldTime): 设置全局服务器时间
- [TogglePlayerClock](TogglePlayerClock): 切换右上角时钟显示
