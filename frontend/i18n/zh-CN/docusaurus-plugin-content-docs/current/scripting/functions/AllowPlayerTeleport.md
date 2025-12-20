---
title: AllowPlayerTeleport
sidebar_label: AllowPlayerTeleport
description: 启用/禁用玩家通过右键点击地图进行传送的能力
tags: ["玩家"]
---

:::warning

此函数自 0.3d 版本起已弃用，请使用[OnPlayerClickMap](../callbacks/OnPlayerClickMap)回调替代。

:::

## 描述

启用/禁用玩家通过右键点击地图进行传送的能力

| 参数       | 说明                            |
| ---------- | ------------------------------- |
| playerid   | 需要启用传送功能的玩家 ID       |
| bool:allow | 'false'禁用功能，'true'启用功能 |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnPlayerConnect(playerid)
{
    // 允许玩家通过右键点击地图传送
    // 由于在OnPlayerConnect回调中，将对所有玩家生效
    AllowPlayerTeleport(playerid, true);
    return 1;
}
```

## 注意事项

:::warning

需先启用[AllowAdminTeleport](AllowAdminTeleport)且玩家具有管理员权限，此函数方可生效。

:::

## 相关函数

- [IsPlayerTeleportAllowed](IsPlayerTeleportAllowed): 检测玩家是否允许通过地图右键传送
- [AllowAdminTeleport](AllowAdminTeleport): 控制管理员路径点传送功能开关
