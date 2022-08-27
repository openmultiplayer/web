---
title: AllowAdminTeleport
description: 这个函数将决定RCON管理员在设置导航点时是否会被传送。
tags: []
---

:::warning

从 0.3d 版本开始，这个函数已被废弃。请看[OnPlayerClickMap](../callbacks/OnPlayerClickMap).

:::

## 描述

这个函数将决定 RCON 管理员在设置导航点时是否会被传送。

| 参数名 | 说明             |
| ------ | ---------------- |
| allow  | 0 禁用，1 启用。 |

## 返回值

该函数不返回任何特定的值。

## 案例

```c
public OnGameModeInit()
{
    AllowAdminTeleport(1);
    // 其他的代码
    return 1;
}
```

## 相关函数

- [IsPlayerAdmin](IsPlayerAdmin): 检查玩家是否已经登录到 RCON。
- [AllowPlayerTeleport](AllowPlayerTeleport): 为玩家启用/禁用在地图上点击右键传送的功能。
