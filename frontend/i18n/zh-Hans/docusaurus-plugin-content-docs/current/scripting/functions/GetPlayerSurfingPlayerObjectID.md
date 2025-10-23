---
title: GetPlayerSurfingPlayerObjectID
sidebar_label: GetPlayerSurfingPlayerObjectID
description: 获取玩家正在“冲浪”的玩家私有物体ID。
tags: ["玩家", "物体", "玩家私有物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家当前正在“冲浪”的玩家私有物体 ID。

| 参数名   | 描述                       |
| -------- | -------------------------- |
| playerid | 正在“冲浪”物体的玩家标识符 |

## 返回值

成功返回被“冲浪”的移动物体 ID。若玩家未在任何移动的物体上方“冲浪”，返回`INVALID_OBJECT_ID`。

## 示例

```c
/* 当玩家在聊天框中输入 'objectsurfing' 时触发 */
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "objectsurfing", true) == 0)
    {
        new
            szMessage[46];

        format(szMessage, sizeof(szMessage), "你正在“冲浪”玩家私有物体 #%d。", GetPlayerSurfingPlayerObjectID(playerid));
        SendClientMessage(playerid, 0xA9C4E4FF, szMessage);
    }
    return 0;
}
```

## 相关函数

- [GetPlayerSurfingObjectID](GetPlayerSurfingObjectID): 获取玩家正在“冲浪”的物体 ID
- [GetPlayerSurfingVehicleID](GetPlayerSurfingVehicleID): 获取玩家正在“冲浪”（停留在车顶）的车辆 ID
- [GetPlayerSurfingOffsets](GetPlayerSurfingOffsets): 获取玩家“冲浪”时的坐标偏移量
