---
title: IsPlayerTeleportAllowed
sidebar_label: IsPlayerTeleportAllowed
description: 该玩家是否可以通过右键点击地图进行传送？
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定玩家是否拥有地图右键传送权限。

| 参数名   | 说明            |
| -------- | --------------- |
| playerid | 要检测的玩家 ID |

## 返回值

**true** - 允许地图传送

**false** - 禁止地图传送

## 示例代码

```c
public OnPlayerConnect(playerid)
{
    AllowPlayerTeleport(playerid, true);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsPlayerTeleportAllowed(playerid))
    {
        // 执行相关操作
    }
    return 1;
}
```

## 相关函数

- [AllowPlayerTeleport](AllowPlayerTeleport): 设置玩家的地图传送权限
