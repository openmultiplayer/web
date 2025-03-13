---
title: GetPlayerSkin
sidebar_label: GetPlayerSkin
description: 获取玩家的皮肤ID
tags: ["玩家"]
---

## 描述

获取玩家当前使用的皮肤 ID

| 参数名   | 说明                   |
| -------- | ---------------------- |
| playerid | 需要获取皮肤 ID 的玩家 |

## 返回值

返回玩家的[皮肤 ID](../resources/skins)

**0** 表示获取失败（玩家无效）

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myskin", true))
    {
        new string[32];
        new playerSkin = GetPlayerSkin(playerid);

        format(string, sizeof(string), "你的皮肤ID: %d", playerSkin);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

在调用[SetSpawnInfo](SetSpawnInfo)后但玩家尚未重生时，返回的是新设置的皮肤 ID。若通过[SpawnPlayer](SpawnPlayer)重生玩家，会返回旧的皮肤 ID

:::

## 相关函数

- [SetPlayerSkin](SetPlayerSkin): 设置玩家皮肤

## 扩展资源

- [皮肤 ID 列表](../resources/skins)
