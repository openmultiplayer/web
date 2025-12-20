---
title: Kick
sidebar_label: Kick
description: 将玩家踢出服务器，玩家需要退出游戏并重新连接才能继续游玩。
tags: ["玩家", "管理"]
---

## 描述

将指定玩家踢出服务器。被踢出的玩家必须退出游戏并重新连接才能继续游玩。

| 参数名   | 说明            |
| -------- | --------------- |
| playerid | 要踢出的玩家 ID |

## 返回值

此函数总是返回 1，即使执行失败（指定玩家不存在）。

## 注意事项

:::warning

任何在 Kick()之前直接执行的操作（如使用[SendClientMessage](SendClientMessage)发送消息）将无法送达玩家。必须使用定时器延迟踢出操作。

:::

## 示例代码

```c
// 为了在连接关闭前显示消息（例如踢出原因）
// 需要使用定时器创建延迟。这个延迟只需几毫秒，
// 但本示例使用完整的一秒以确保可靠性。

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/kickme", true) == 0)
    {
        // 踢出执行该命令的玩家

        // 首先发送踢出提示
        SendClientMessage(playerid, 0xFF0000FF, "你已被踢出服务器！");

        // 通过定时器在1秒后执行踢出
        SetTimerEx("DelayedKick", 1000, false, "i", playerid);
        return 1;
    }
    return 0;
}

forward DelayedKick(playerid);
public DelayedKick(playerid)
{
    Kick(playerid); // 实际执行踢出操作
    return 1;
}
```

## 相关函数

- [Ban](Ban): 永久封禁玩家
- [BanEx](BanEx): 自定义封禁原因封禁玩家
