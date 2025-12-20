---
title: NPC_GetInterior
sidebar_label: NPC_GetInterior
description: 获取 NPC 的室内场景ID。
tags: ["npc", "室内场景"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 的室内场景 ID。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 当前所在的室内场景 ID。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkinterior", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new interior = NPC_GetInterior(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 的室内场景： %d", npcid, interior);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 室内场景 0 是主世界（室外）

## 相关函数

- [NPC_SetInterior](NPC_SetInterior): 设置 NPC 室内场景
- [NPC_GetVirtualWorld](NPC_GetVirtualWorld): 获取 NPC 虚拟世界
- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): 设置 NPC 虚拟世界
- [NPC_GetPos](NPC_GetPos): 获取 NPC 位置

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): 当 NPC 生成时调用
