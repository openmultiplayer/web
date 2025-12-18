---
title: NPC_ResetSurfingData
sidebar_label: NPC_ResetSurfingData
description: 重置 NPC 的所有冲浪数据。
tags: ["npc", "冲浪"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

重置 NPC 的所有冲浪数据。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/resetsurfing", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        NPC_ResetSurfingData(npcid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 冲浪数据已重置。", npcid);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 此函数清除 NPC 的所有冲浪相关数据，包括冲浪物体/车辆和偏移
- 调用此函数后，NPC 将不再附着在任何表面上
- NPC 的位置不会改变，只是重置其冲浪状态

## 相关函数

- [NPC_SetSurfingObject](NPC_SetSurfingObject): 设置 NPC 冲浪的物体
- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): 设置 NPC 冲浪的车辆
- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): 设置 NPC 冲浪的玩家物体
- [NPC_SetSurfingOffsets](NPC_SetSurfingOffsets): 设置 NPC 的冲浪偏移
- [NPC_GetSurfingObject](NPC_GetSurfingObject): 获取 NPC 冲浪的物体
- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): 获取 NPC 冲浪的车辆

## 相关回调

_此函数不会触发任何特定的回调。_
