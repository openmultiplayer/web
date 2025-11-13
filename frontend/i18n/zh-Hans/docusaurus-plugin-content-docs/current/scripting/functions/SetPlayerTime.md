---
title: SetPlayerTime
sidebar_label: SetPlayerTime
description: 设置玩家的游戏时间。
tags: ["玩家"]
---

## 描述

设置玩家的游戏时间。若玩家时钟已启用([TogglePlayerClock](TogglePlayerClock))，其显示的时间将自动更新。

| 参数     | 说明                    |
| -------- | ----------------------- |
| playerid | 要设置游戏时间的玩家 ID |
| hour     | 小时值 (0-23)           |
| minute   | 分钟值 (0-59)           |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。指定的玩家不存在。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/noon", true))
    {
        SetPlayerTime(playerid, 12, 0); // 正午
        return 1;
    }
    if (!strcmp(cmdtext, "/midnight", true))
    {
        SetPlayerTime(playerid, 0, 0); // 午夜
        return 1;
    }
    return 0;
}
```

## 注意

:::warning

在[OnPlayerConnect](../callbacks/OnPlayerConnect)回调中使用此函数无效。

:::

## 相关函数

- [SetWorldTime](SetWorldTime): 设置全局服务器时间
- [GetPlayerTime](GetPlayerTime): 获取玩家时间
- [TogglePlayerClock](TogglePlayerClock): 切换玩家时钟显示
