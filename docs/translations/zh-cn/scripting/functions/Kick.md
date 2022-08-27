---
title: Kick
description: 将玩家踢出服务器。如果他想继续玩，就必须退出游戏并重新连接。
tags: ["管理员"]
---

## 描述

将玩家踢出服务器。如果他想继续玩，就必须退出游戏并重新连接。

| 参数名   | 说明                    |
| -------- | ----------------------- |
| playerid | 要踢出服务器的玩家 ID。 |

## 返回值

这个函数总是返回 1，即使函数执行失败（指定的玩家不存在）。

## 要点

:::warning

从 SA-MP 0.3x 开始，在 Kick() 之前的任何发送给玩家的代码（比如用 SendClientMessage 发送消息）都不会送达给玩家。必须使用计时器来延迟封禁玩家。

:::

## 案例

```c
// 为了在连接关闭前给玩家显示一条信息（例如原因），你必须使用一个计时器来创建一个延迟，这个延迟只需要几毫秒的时间。
// 这里的案例为了安全起见，延迟了整整一秒钟。

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/kickme", true) == 0)
    {
        // 踢出执行这个命令的玩家。
        // 首先，给他发个消息。
        SendClientMessage(playerid, 0xFF0000FF, "你被踢了!");

        // 实际上是在一秒钟后用计时器踢的他。
        SetTimerEx("DelayedKick", 1000, false, "i", playerid);
        return 1;
    }
    return 0;
}

forward DelayedKick(playerid);
public DelayedKick(playerid)
{
    Kick(playerid);
    return 1;
}
```

## 相关函数

- [Ban](Ban): 封禁目前在服务器中的某个玩家。
- [BanEx](BanEx): 以某个原因封禁玩家。
