---
title: IsPlayerConnected
sidebar_label: IsPlayerConnected
description: 检查玩家是否已连接
tags: ["玩家"]
---

## 描述

检测指定玩家 ID 是否对应已连接玩家。

| 参数     | 说明              |
| -------- | ----------------- |
| playerid | 需要检查的玩家 ID |

## 返回值

**true** - 玩家已连接  
**false** - 玩家未连接

## 示例

```c
KillPlayer(playerid)
{
    if (!IsPlayerConnected(playerid))
    {
        printf("玩家ID %i 未连接！", playerid);
    }
    else
    {
        SetPlayerHealth(playerid, 0.0);
    }
}
```

## 注意事项

:::tip

许多其他函数已内置连接状态检查，实际开发中可酌情省略本函数调用

:::

## 相关函数

- [IsPlayerAdmin](IsPlayerAdmin): 检查玩家是否具有 RCON 管理员权限

## 相关回调

- [OnPlayerConnect](../callbacks/OnPlayerConnect): 玩家连接服务器时触发
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect): 玩家断开连接时触发
