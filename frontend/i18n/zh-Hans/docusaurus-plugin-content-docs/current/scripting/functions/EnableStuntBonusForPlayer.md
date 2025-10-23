---
title: EnableStuntBonusForPlayer
sidebar_label: EnableStuntBonusForPlayer
description: 切换玩家的特技奖励功能。
tags: ["玩家"]
---

## 描述

切换指定玩家的车辆特技奖励（默认启用）。

| 名称        | 描述                    |
| ----------- | ----------------------- |
| playerid    | 要设置特技奖励的玩家 ID |
| bool:enable | true 启用 / false 禁用  |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家未连接）

## 示例

```c
public OnPlayerConnect(playerid)
{
    EnableStuntBonusForPlayer(playerid, false); // 玩家连接时禁用其特技奖励
    return 1;
}
```

## 相关函数

- [EnableStuntBonusForAll](EnableStuntBonusForAll): 为所有玩家切换特技奖励功能
