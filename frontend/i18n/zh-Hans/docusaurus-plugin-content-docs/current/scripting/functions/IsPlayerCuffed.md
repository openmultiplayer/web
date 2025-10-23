---
title: IsPlayerCuffed
sidebar_label: IsPlayerCuffed
description: 检查玩家是否被手铐铐住
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检查玩家是否处于手铐束缚的特殊动作状态。

| 参数     | 说明              |
| -------- | ----------------- |
| playerid | 需要检查的玩家 ID |

## 返回值

**true** - 玩家处于被铐状态  
**false** - 玩家未被束缚

## 示例

```c
SetPlayerSpecialAction(playerid, SPECIAL_ACTION_CUFFED);

if (IsPlayerCuffed(playerid))
{
    // 执行相关逻辑
}
```
