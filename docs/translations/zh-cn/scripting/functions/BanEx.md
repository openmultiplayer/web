---
title: BanEx
description: 以某个原因封禁玩家。
tags: ["管理员"]
---

## 描述

以某个原因封禁玩家。

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 要封禁的玩家 ID。 |
| reason   | 要封禁的原因。    |

## 返回值

该函数不返回任何特定的值。

## 案例

```c
public OnPlayerCommandText( playerid, cmdtext[] )
{
    if (!strcmp(cmdtext, "/banme", true))
    {
        // 封禁执行此命令的玩家，并包括一个理由（"请求"）。
        BanEx(playerid, "请求");
        return 1;
    }
}
/*为了在连接关闭前为玩家显示一个信息（例如原因），你必须使用一个计时器来创建一个延迟，这个延迟只需要几毫秒的时间。
这里的案例为了安全起见，延迟了整整一秒钟。*/

forward BanExPublic(playerid, reason[]);

public BanExPublic(playerid, reason[])
{
    BanEx(playerid, reason);
}

stock BanExWithMessage(playerid, color, message[], reason[])
{
    // reason - 用于BanEx的封禁原因。
    SendClientMessage(playerid, color, message);
    SetTimerEx("BanExPublic", 1000, false, "ds", playerid, reason);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // 封禁执行此命令的玩家。
        BanExWithMessage(playerid, 0xFF0000FF, "你被封禁了！", "请求");
        return 1;
    }
    return 0;
}
```

## 要点

:::warning

从 SA-MP 0.3x 开始，在 BanEx() 之前的任何发送给玩家的代码（比如用 SendClientMessage 发送消息）都不会送达给玩家。必须使用计时器来延迟封禁玩家。

:::

## 相关函数

- [Ban](Ban): 封禁目前在服务器中的某个玩家。
- [Kick](Kick): 将玩家踢出服务器。
