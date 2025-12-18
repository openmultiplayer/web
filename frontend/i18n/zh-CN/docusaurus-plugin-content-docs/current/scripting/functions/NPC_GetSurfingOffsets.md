---
title: NPC_GetSurfingOffsets
sidebar_label: NPC_GetSurfingOffsets
description: 获取 NPC 的冲浪偏移。
tags: ["npc", "冲浪"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 的冲浪偏移。

| 参数  | 说明                                |
| ----- | ----------------------------------- |
| npcid | NPC 的 ID                           |
| &x    | 用于存储 X 偏移的变量，通过引用传递 |
| &y    | 用于存储 Y 偏移的变量，通过引用传递 |
| &z    | 用于存储 Z 偏移的变量，通过引用传递 |

## 返回值

若操作成功则返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checksurfingoffset", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:offsetX, Float:offsetY, Float:offsetZ;
        NPC_GetSurfingOffset(npcid, offsetX, offsetY, offsetZ);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 冲浪偏移: X=%.2f, Y=%.2f, Z=%.2f", npcid, offsetX, offsetY, offsetZ);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 冲浪偏移表示 NPC 相对于其正在冲浪的物体/车辆的相对位置
- 所有偏移值都以浮点数形式返回

## 相关函数

- [NPC_SetSurfingOffsets](NPC_SetSurfingOffsets): 设置 NPC 的冲浪偏移
- [NPC_GetSurfingObject](NPC_GetSurfingObject): 获取 NPC 正在冲浪的物体
- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): 获取 NPC 正在冲浪的车辆
- [NPC_GetSurfingPlayerObject](NPC_GetSurfingPlayerObject): 获取 NPC 正在冲浪的玩家物体
- [NPC_ResetSurfingData](NPC_ResetSurfingData): 重置 NPC 的所有冲浪数据

## 相关回调

_此函数不会触发任何特定的回调。_
