---
title: IsAdminTeleportAllowed
sidebar_label: IsAdminTeleportAllowed
description: 检查是否允许远程控制台管理员通过右键点击地图传送
tags: []
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检查远程控制台管理员是否被允许通过右键点击地图进行传送。

## 返回值

**true** - 允许传送  
**false** - 禁止传送

## 示例

```c
if (IsAdminTeleportAllowed())
{
    // 执行相关操作
}
```

## 相关函数

- [AllowAdminTeleport](AllowAdminTeleport): 设置远程控制台管理员的传送权限
- [AllowPlayerTeleport](AllowPlayerTeleport): 控制玩家传送功能开关
- [IsPlayerAdmin](IsPlayerAdmin): 检查玩家是否具有远程控制台权限
