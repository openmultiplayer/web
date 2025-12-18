---
title: NPC_SetSurfingPlayerObject
sidebar_label: NPC_SetSurfingPlayerObject
description: 设置 NPC 正在冲浪的玩家物体。
tags: ["npc", "冲浪"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 正在冲浪的玩家物体。

| 参数     | 说明        |
| -------- | ----------- |
| npcid    | NPC 的 ID   |
| objectid | 玩家物体 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setsurfingplayerobject ", true, 24))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new objectid = strval(cmdtext[24]);

        NPC_SetSurfingPlayerObject(npcid, objectid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 冲浪的玩家物体设置为 %d", npcid, objectid);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 如果玩家物体移动，NPC 将随之移动
- 玩家物体是专门为单个玩家创建的客户端物体
- 玩家物体必须存在才能正常冲浪

## 相关函数

- [NPC_GetSurfingPlayerObject](NPC_GetSurfingPlayerObject): 获取 NPC 正在冲浪的玩家物体
- [NPC_SetSurfingObject](NPC_SetSurfingObject): 设置 NPC 正在冲浪的物体
- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): 设置 NPC 正在冲浪的车辆
- [NPC_SetSurfingOffsets](NPC_SetSurfingOffsets): 设置 NPC 的冲浪偏移
- [NPC_ResetSurfingData](NPC_ResetSurfingData): 重置 NPC 的所有冲浪数据

## 相关回调

_此函数不会触发任何特定的回调。_
