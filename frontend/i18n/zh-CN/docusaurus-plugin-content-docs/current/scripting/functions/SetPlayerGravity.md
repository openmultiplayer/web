---
title: SetPlayerGravity
sidebar_label: SetPlayerGravity
description: 设置玩家的重力。
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置玩家的重力参数。

| 参数          | 说明                                  |
| ------------- | ------------------------------------- |
| playerid      | 要设置重力的玩家 ID                   |
| Float:gravity | 要设置的重力值（有效范围：-50 至 50） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定玩家不存在）

## 示例代码

```c
public OnPlayerConnect(playerid)
{
    // 设置月球般的低重力环境
    SetPlayerGravity(playerid, 0.001);

    return 1;
}
```

## 注意事项

:::warning

默认重力值为 0.008

:::

## 相关函数

- [GetPlayerGravity](GetPlayerGravity): 获取玩家的重力参数
- [SetGravity](SetGravity): 设置全局重力参数
- [GetGravity](GetGravity): 获取当前全局重力参数
