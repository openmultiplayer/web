---
title: AllowPlayerTeleport
description: 为玩家启用/禁用在地图上点击右键传送的功能。
tags: ["player"]
---

## 描述

为玩家启用/禁用在地图上点击右键传送的功能。

| 参数名   | 说明                  |
| -------- | --------------------- |
| playerid | 允许传送的玩家的 ID。 |
| allow    | 1-启用，0-禁用        |

## 返回值

该函数不返回任何特定的值。

## 案例

```c
public OnPlayerConnect(playerid)
{
    // 启用玩家在地图上点击右键传送的功能。
    // 因为代码放在玩家连接的回调中，所以每个玩家都能传送。
    AllowPlayerTeleport(playerid, 1);
}
```

## 要点

:::warning

这个函数只有在[AllowAdminTeleport](AllowAdminTeleport)被启用时才会起作用，而且你必须是管理员。

:::

## 相关函数

- [AllowAdminTeleport](AllowAdminTeleport): 控制 RCON 管理员在设置导航点时是否会被传送。
