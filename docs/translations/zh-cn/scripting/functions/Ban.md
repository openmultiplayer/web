---
title: Ban
description: 封禁目前在服务器中的某个玩家。
tags: ["管理员"]
---

## 描述

封禁目前在服务器中的某个玩家。他将无法再次加入服务器。封禁基于 IP，并保存在服务器根目录下的 samp.ban 文件中。BanEx 可以用来给出封禁的原因。可以使用 RCON 的 banip 和 unbanip 命令（SendRconCommand）添加/移除 IP。

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 要封禁的玩家 ID。 |

## 返回值

该函数不返回任何特定的值。

## 案例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // 封禁输入此命令的玩家。
        Ban(playerid);
        return 1;
    }
}
// 为了在连接关闭前给玩家显示一条信息（例如原因），你必须使用一个计时器来创建一个延迟，这个延迟只需要几毫秒的时间。
// 这里的案例为了安全起见，延迟了整整一秒钟。

forward DelayedBan(playerid);
public DelayedBan(playerid)
{
    Ban(playerid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // 封禁执行此命令的玩家。

        // 首先，给他发一个信息。
        SendClientMessage(playerid, 0xFF0000FF, "你被封禁了！");

        // 实际上是在一秒钟后用计时器封禁的他。
        SetTimerEx("DelayedBan", 1000, false, "d", playerid);
        return 1;
    }
    return 0;
}
```

## 要点

:::warning

从 SA-MP 0.3x 开始，在 Ban() 之前的任何发送给玩家的代码（比如用 SendClientMessage 发送消息）都不会送达给玩家。必须使用计时器来延迟封禁玩家。

:::

## 相关函数

- [BanEx](BanEx): 以某个原因封禁玩家。
- [Kick](Kick): 将玩家踢出服务器。
