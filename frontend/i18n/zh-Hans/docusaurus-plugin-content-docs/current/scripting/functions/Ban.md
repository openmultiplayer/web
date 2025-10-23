---
title: Ban
sidebar_label: Ban
description: 封禁当前在线的玩家。
tags: ["玩家", "管理"]
---

## 描述

封禁当前在线的玩家。被禁玩家将无法再次连接服务器。

封禁将基于 IP 地址，并保存在服务器根目录的 **bans.json** 文件中。

使用[BanEx](BanEx)可以指定封禁原因。

可通过 RCON 命令`banip`和`unbanip`管理 IP 封禁（需配合[SendRconCommand](SendRconCommand)使用）。

| 名称     | 说明            |
| -------- | --------------- |
| playerid | 要封禁的玩家 ID |

## 返回值

本函数没有特定返回值。

## 注意事项

:::warning

在 Ban()之前立即执行的操作（如使用[SendClientMessage](SendClientMessage)发送消息）将无法送达玩家。必须使用定时器延迟封禁操作。

:::

## 示例

```c
// 为了在连接关闭前显示消息（如封禁原因）
// 必须使用定时器延迟操作。延迟仅需数毫秒，
// 本示例使用1秒确保可靠性

forward DelayedBan(playerid);
public DelayedBan(playerid)
{
    Ban(playerid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // 封禁执行此命令的玩家

        // 第一步：发送提示信息
        SendClientMessage(playerid, 0xFF0000FF, "您已被封禁!");

        // 通过定时器在1秒后执行封禁
        SetTimerEx("DelayedBan", 1000, false, "d", playerid);
        return 1;
    }
    return 0;
}
```

## 相关函数

- [BanEx](BanEx): 封禁玩家并指定原因
- [Kick](Kick): 踢出服务器
- [BlockIpAddress](BlockIpAddress): 临时封禁 IP 地址
- [UnBlockIpAddress](UnBlockIpAddress): 解除 IP 封禁
