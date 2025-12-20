---
title: GetPlayerTime
sidebar_label: GetPlayerTime
description: 获取玩家当前的游戏时间
tags: ["玩家"]
---

## 描述

获取玩家当前的游戏时间。该时间通过[SetWorldTime](SetWorldTime)设置，或当使用[TogglePlayerClock](TogglePlayerClock)时由游戏自动设置。

| 参数     | 说明                       |
| -------- | -------------------------- |
| playerid | 需要获取游戏时间的玩家 ID  |
| &hour    | 存储小时的变量（引用传递） |
| &minute  | 存储分钟的变量（引用传递） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定玩家不存在）

当前游戏时间将存储在指定变量中

## 示例代码

```c
new hour, minutes;
GetPlayerTime(playerid, hour, minutes);
if (hour == 13 && minutes == 37)
{
    SendClientMessage(playerid, COLOR_WHITE, "当前时间为13点37分！");
}
```

## 相关函数

- [SetPlayerTime](SetPlayerTime): 设置玩家时间
- [SetWorldTime](SetWorldTime): 设置全局服务器时间
- [TogglePlayerClock](TogglePlayerClock): 切换右上角时钟显示
