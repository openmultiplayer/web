---
title: SetPlayerAdmin
sidebar_label: SetPlayerAdmin
description: 设置玩家为RCON管理员。
tags: ["玩家", "rcon", "管理"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置玩家为 RCON 管理员。

| 参数名     | 说明                                          |
| ---------- | --------------------------------------------- |
| playerid   | 要设置的玩家 ID                               |
| bool:admin | **true**设置为 RCON 管理员，**false**移除权限 |

## 返回值

本函数没有返回值。

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/admin", true))
    {
        SetPlayerAdmin(playerid, true);
        SendClientMessage(playerid, -1, "SERVER: You are now RCON admin!");
        return 1;
    }
    return 0;
}
```

## 相关函数

- [IsPlayerAdmin](IsPlayerAdmin): 检测玩家是否为 RCON 管理员

## 相关回调

- [OnRconLoginAttempt](OnRconLoginAttempt): RCON 登录尝试回调

```

```
