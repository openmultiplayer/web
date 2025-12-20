---
title: NPC_SetVirtualWorld
sidebar_label: NPC_SetVirtualWorld
description: 设置 NPC 的虚拟世界。
tags: ["npc", "虚拟世界", "维度"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

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
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setvirtualworld ", true, 16))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new vw = strval(cmdtext[16]);
        if (vw < 0)
            return SendClientMessage(playerid, 0xFF0000FF, "虚拟世界必须为非负整数。");

        NPC_SetVirtualWorld(npcid, vw);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 虚拟世界设置为 %d", npcid, vw);

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
