---
title: NPC_GetVirtualWorld
sidebar_label: NPC_GetVirtualWorld
description: 获取 NPC 所在的虚拟世界。
tags: ["npc"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 所在的虚拟世界。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回虚拟世界 ID，出错时返回 0。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvirtualworld", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new vw = NPC_GetVirtualWorld(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 的虚拟世界: %d", npcid, vw);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 虚拟世界允许分离 NPC 和玩家。
- 不同虚拟世界中的 NPC 无法互相看到。
- 虚拟世界 0 是默认世界。

:::

## 相关函数

- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): 设置 NPC 虚拟世界。
- [NPC_GetInterior](NPC_GetInterior): 获取 NPC 室内。
- [NPC_SetInterior](NPC_SetInterior): 设置 NPC 室内。

## 相关回调

- [../callbacks/OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 生成时调用。
