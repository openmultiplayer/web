---
title: GetPlayerSpecialAction
sidebar_label: GetPlayerSpecialAction
description: 获取玩家当前的特殊动作状态
tags: ["玩家"]
---

## 描述

获取玩家当前激活的特殊动作状态

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要查询的玩家 ID |

## 返回值

返回玩家的特殊动作状态（参见：[特殊动作 ID 列表](../resources/specialactions)）

## 示例代码

```c
public OnPlayerUpdate(playerid)
{
    // 检测玩家是否使用喷气背包并封禁
    if (GetPlayerSpecialAction(playerid) == SPECIAL_ACTION_USEJETPACK)
    {
        Ban(playerid);
    }
    return 1;
}
```

## 相关函数

- [SetPlayerSpecialAction](SetPlayerSpecialAction): 设置玩家特殊动作
- [GetPlayerState](GetPlayerState): 获取玩家当前状态

## 扩展资源

- [特殊动作 ID 列表](../resources/specialactions)
