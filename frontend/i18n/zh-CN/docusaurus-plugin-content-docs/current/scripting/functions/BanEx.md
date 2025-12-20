---
title: BanEx
sidebar_label: BanEx
description: 封禁玩家并指定原因。
tags: ["玩家", "管理"]
---

## 描述

封禁玩家并指定原因。

| 参数           | 说明            |
| -------------- | --------------- |
| playerid       | 要封禁的玩家 ID |
| const reason[] | 封禁原因        |

## 返回值

此函数不返回特定值。

## 注意事项

:::warning

在 BanEx()之前立即执行的操作（如使用[SendClientMessage](SendClientMessage)发送消息）将无法送达玩家。必须使用定时器延迟封禁操作。

:::

## 示例

```c
public OnPlayerCommandText( playerid, cmdtext[] )
{
    if (!strcmp(cmdtext, "/banme", true))
    {
        // 封禁执行此命令的玩家并指定原因（"Request"）
        BanEx(playerid, "Request");
        return 1;
    }
}
```

<br />

```c
// 为了在连接关闭前显示消息（如封禁原因）
// 必须使用定时器延迟操作。延迟仅需数毫秒，
// 本示例使用1秒确保可靠性

forward BanExPublic(playerid, reason[]);
public BanExPublic(playerid, reason[])
{
    BanEx(playerid, reason);
}

stock BanExWithMessage(playerid, color, message[], reason[])
{
    // reason - 用于BanEx的封禁原因
    SendClientMessage(playerid, color, message);
    SetTimerEx("BanExPublic", 1000, false, "ds", playerid, reason);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // 封禁执行此命令的玩家
        BanExWithMessage(playerid, 0xFF0000FF, "你已被封禁!", "Request");
        return 1;
    }
    return 0;
}
```

## 相关函数

- [Ban](Ban): 永久封禁玩家
- [Kick](Kick): 踢出服务器
