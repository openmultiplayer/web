---
title: OnPlayerSpawn
description: 这个回调函数在玩家重生时被调用。
tags: ["player"]
---

## 描述

这个回调函数在玩家重生时被调用。(即调用 SpawnPlayer 函数后)

| 参数名   | 描述              |
| -------- | ----------------- |
| playerid | 重生的玩家的 ID。 |

## 返回值

0 - 将阻止其他过滤脚本接收到这个回调。

1 - 表示这个回调函数将被传递给下一个过滤脚本。

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME],
    string[40];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));
    format(string, sizeof(string), "%s 已成功重生。", PlayerName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## 要点

:::tip

有时游戏会在玩家重生后扣除\$100。

:::

## 相关函数

- [SpawnPlayer](../functions/SpawnPlayer): 强制玩家重生。
- [AddPlayerClass](../functions/AddPlayerClass): 添加一个类。
- [SetSpawnInfo](../functions/SetSpawnInfo): 设置玩家的重生设置。
