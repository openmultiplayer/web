---
title: NPC_GetSurfingPlayerObject
sidebar_label: NPC_GetSurfingPlayerObject
description: 获取 NPC 正在冲浪的玩家物体。
tags: ["npc", "冲浪"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 正在冲浪的玩家物体。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回玩家物体 ID，若未在玩家物体上冲浪则返回 `INVALID_OBJECT_ID`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checksurfingplayerobject", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new objectid = NPC_GetSurfingPlayerObject(npcid);

        if (objectid == INVALID_OBJECT_ID)
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 没有在任何玩家物体上冲浪。", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在玩家物体上冲浪: %d", npcid, objectid);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 若 NPC 未在任何玩家物体上冲浪则返回 INVALID_OBJECT_ID
- 此函数仅检查玩家特定物体，不检查全局物体

## 相关函数

- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): 设置 NPC 正在冲浪的玩家物体
- [NPC_GetSurfingObject](NPC_GetSurfingObject): 获取 NPC 正在冲浪的物体
- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): 获取 NPC 正在冲浪的车辆
- [NPC_GetSurfingOffsets](NPC_GetSurfingOffsets): 获取 NPC 的冲浪偏移
- [NPC_ResetSurfingData](NPC_ResetSurfingData): 重置 NPC 的所有冲浪数据

## 相关回调

_此函数不会触发任何特定的回调。_
