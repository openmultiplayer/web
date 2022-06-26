---
title: OnPlayerDisconnect
description: 当玩家从服务器断开连接时，这个回调函数被调用。
tags: ["player"]
---

## 描述

当玩家从服务器断开连接时，这个回调函数被调用。

| 参数名   | 描述                            |
| -------- | ------------------------------- |
| playerid | 从服务器断开连接的该玩家的 ID。 |
| reason   | 断开连接的原因。见下表。        |

## 返回值

0 - 将阻止其他过滤脚本接收到这个回调。

1 - 表示这个回调函数将被传递给下一个过滤脚本。

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerDisconnect(playerid, reason)
{
    new
        szString[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    new szDisconnectReason[3][] =
    {
        "超时/崩溃",
        "正常退出",
        "踢出/封禁"
    };

    format(szString, sizeof szString, "%s 离开了服务器 (%s).", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

## 要点

:::tip

有些函数不能在这个回调函数中使用，因为当调用回调函数时，玩家已经断开了连接。这样，您就不能从诸如 GetPlayerIp 和 GetPlayerPos 等类似的函数得到明确的信息。

:::

## 相关回调
