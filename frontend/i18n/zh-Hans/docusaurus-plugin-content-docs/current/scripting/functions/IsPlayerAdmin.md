---
title: IsPlayerAdmin
sidebar_label: IsPlayerAdmin
description: 检查玩家是否以RCON管理员身份登录
tags: ["玩家", "远程控制台", "管理"]
---

## 描述

检测指定玩家是否已登录为 RCON 管理员。

| 参数     | 说明              |
| -------- | ----------------- |
| playerid | 需要检查的玩家 ID |

## 返回值

**true** - 玩家具有 RCON 管理员权限  
**false** - 玩家未获得 RCON 权限

## 示例

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerAdmin(playerid))
    {
        SendClientMessageToAll(0xDEEE20FF, "管理员已生成");
    }
    return 1;
}
```

## 相关函数

- [SetPlayerAdmin](SetPlayerAdmin): 授予玩家 RCON 管理员权限
- [SendRconCommand](SendRconCommand): 通过脚本发送 RCON 指令

## 相关回调

- [OnRconLoginAttempt](../callbacks/OnRconLoginAttempt): 当玩家尝试登录 RCON 时触发
