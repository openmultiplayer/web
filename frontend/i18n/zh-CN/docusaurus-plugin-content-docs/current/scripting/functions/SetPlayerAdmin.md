---
title: SetPlayerAdmin
sidebar_label: SetPlayerAdmin
description: 设置玩家为RCON管理员。
tags: ["玩家", "远程控制台", "管理"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置玩家为 RCON 管理员。

| 参数       | 说明                                          |
| ---------- | --------------------------------------------- |
| playerid   | 要设置的玩家 ID                               |
| bool:admin | **true**设置为 RCON 管理员，**false**移除权限 |

## 返回值

此函数不返回特定值。

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/admin", true))
    {
        SetPlayerAdmin(playerid, true);
        SendClientMessage(playerid, -1, "服务器：你现在是RCON管理员了！");
        return 1;
    }
    return 0;
}
```

## 相关函数

- [IsPlayerAdmin](IsPlayerAdmin): 检测玩家是否为 RCON 管理员

## 相关回调

- [OnRconLoginAttempt](../callbacks/OnRconLoginAttempt): RCON 登录尝试回调
