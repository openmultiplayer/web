---
title: ClearPlayerWorldBounds
sidebar_label: ClearPlayerWorldBounds
description: 重置玩家的世界边界至默认状态
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

将指定玩家的自定义世界边界恢复为系统默认设置

| 参数名   | 说明                      |
| -------- | ------------------------- |
| playerid | 需要重置世界边界的玩家 ID |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败

## 示例代码

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerWorldBounds(playerid, 20.0, 0.0, 20.0, 0.0);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    ClearPlayerWorldBounds(playerid);
    return 1;
}
```

## 注意事项

:::tip

系统默认边界值为 20000.0000, -20000.0000, 20000.0000, -20000.0000。建议使用本函数进行重置以确保代码可读性

:::

## 相关函数

- [SetPlayerWorldBounds](SetPlayerWorldBounds): 设置玩家活动范围边界（越界会被自动推回）
- [GetPlayerWorldBounds](GetPlayerWorldBounds): 获取玩家当前世界边界配置
