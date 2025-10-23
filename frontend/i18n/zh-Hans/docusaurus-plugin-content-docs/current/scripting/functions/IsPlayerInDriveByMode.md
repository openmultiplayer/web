---
title: IsPlayerInDriveByMode
sidebar_label: IsPlayerInDriveByMode
description: 检测玩家是否处于驾驶扫射模式
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测玩家是否处于驾驶扫射模式

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要检测的玩家 ID |

## 返回值

**true** - 玩家处于驾驶扫射模式

**false** - 玩家未处于驾驶扫射模式

## 示例代码

```c
if (IsPlayerInDriveByMode(playerid))
{
    // 执行相关操作
}
```
