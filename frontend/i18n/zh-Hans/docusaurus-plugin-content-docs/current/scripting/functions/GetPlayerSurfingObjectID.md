---
title: GetPlayerSurfingObjectID
sidebar_label: GetPlayerSurfingObjectID
description: 获取玩家正在“冲浪”的物体ID。
tags: ["玩家"]
---

## 描述

获取玩家当前正在“冲浪”的物体 ID。

| 参数     | 说明                     |
| -------- | ------------------------ |
| playerid | 正在冲浪物体的玩家标识符 |

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
            szMessage[30];

        format(szMessage, sizeof(szMessage), "你正在冲浪物体 #%d。", GetPlayerSurfingObjectID(playerid));
        SendClientMessage(playerid, 0xA9C4E4FF, szMessage);
    }
    return 0;
}
```

## 相关函数

- [GetPlayerSurfingPlayerObjectID](GetPlayerSurfingPlayerObjectID): 获取玩家正在“冲浪”的玩家私有物体 ID
- [GetPlayerSurfingVehicleID](GetPlayerSurfingVehicleID): 获取玩家正在“冲浪”（停留在车顶）的车辆 ID
- [GetPlayerSurfingOffsets](GetPlayerSurfingOffsets): 获取玩家“冲浪”时的坐标偏移量
