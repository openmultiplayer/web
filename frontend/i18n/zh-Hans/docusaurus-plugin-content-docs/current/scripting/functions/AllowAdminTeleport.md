---
title: AllowAdminTeleport
sidebar_label: AllowAdminTeleport
description: 控制远程控制台管理员是否可通过设置路径点传送
tags: []
---

:::warning

本函数自 0.3d 版本起已弃用，请使用[OnPlayerClickMap](../callbacks/OnPlayerClickMap)回调替代。

:::

## 描述

本函数用于控制远程控制台(RCON)管理员在设置路径点时是否会被传送到该位置。

| 参数名     | 说明                            |
| ---------- | ------------------------------- |
| bool:allow | 'false'禁用功能，'true'启用功能 |

## 返回值

本函数无特定返回值。

## 示例

```c
public OnGameModeInit()
{
    AllowAdminTeleport(true); // 启用管理员传送功能
    // 其他初始化代码
    return 1;
}
```

## 相关函数

- [IsAdminTeleportAllowed](IsAdminTeleportAllowed): 检测是否允许管理员通过地图右键传送
- [IsPlayerAdmin](IsPlayerAdmin): 验证玩家是否具有管理员权限
- [AllowPlayerTeleport](AllowPlayerTeleport): 控制玩家路径点传送功能开关
