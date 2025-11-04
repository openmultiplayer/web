---
title: NPC_SetVirtualWorld
sidebar_label: NPC_SetVirtualWorld
description: 设置 NPC 的虚拟世界。
tags: ["npc", "虚拟世界", "维度"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 的虚拟世界，控制哪些玩家可以看到并与之互动。

| 参数  | 说明                  |
| ----- | --------------------- |
| npcid | NPC 的 ID。           |
| vw    | 要设置的虚拟世界 ID。 |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new const npcid = NPC_Create("Isolated");
    NPC_Spawn(npcid);

    // 将 NPC 放入虚拟世界 1
    NPC_SetVirtualWorld(npcid, 1);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/moveworld", true))
    {
        new const playerWorld = GetPlayerVirtualWorld(playerid);
        NPC_SetVirtualWorld(0, playerWorld);

        SendClientMessage(playerid, 0x00FF00FF, "已将 NPC 0 移动到您的世界（%d）", playerWorld);
        return 1;
    }

    if (!strcmp(cmdtext, "/isolatenpc", true))
    {
        // 将 NPC 0 移动到单独的世界
        NPC_SetVirtualWorld(0, 100);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 已移动到世界 100");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 虚拟世界 0 是默认世界，所有玩家都在此开始。
- 不同虚拟世界中的 NPC 无法看到或相互互动。
- 玩家必须与 NPC 在相同的虚拟世界中才能看到它们。
- 使用 [NPC_GetVirtualWorld](NPC_GetVirtualWorld) 检查当前虚拟世界。

:::

## 相关函数

- [NPC_GetVirtualWorld](NPC_GetVirtualWorld): 获取 NPC 的虚拟世界。
- [SetPlayerVirtualWorld](SetPlayerVirtualWorld): 设置玩家的虚拟世界。
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): 获取玩家的虚拟世界。
- [NPC_SetInterior](NPC_SetInterior): 设置 NPC 的室内。
