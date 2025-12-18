---
title: NPC_HasPathPointInRange
sidebar_label: NPC_HasPathPointInRange
description: 检查路径中是否有任何点在给定坐标的指定范围内。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查路径中是否有任何点在给定坐标的指定范围内。

| 参数   | 说明                 |
| ------ | -------------------- |
| pathId | 要检查的路径 ID      |
| x      | 中心位置的 X 坐标    |
| y      | 中心位置的 Y 坐标    |
| z      | 中心位置的 Z 坐标    |
| radius | 检查路径点的半径范围 |

## 返回值

如果路径在指定范围内至少有一个点则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpathpointinrange ", true, 23))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new pathid = strval(cmdtext[23]);

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        new bool:hasPoint = NPC_HasPathPointInRange(pathid, x, y, z, 50.0);

        SendClientMessage(playerid, 0x00FF00FF, "路径 %d 是否有点在你附近 (%.2f, %.2f, %.2f): %s", pathid, x, y, z, hasPoint ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 此函数用于在开始路径移动前检查 NPC 路径是否与特定区域或位置相交
- 函数检查给定位置与每个路径点之间的 3D 距离
- 只有至少有一个点的有效路径才能返回`true`

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建 NPC 移动的新路径
- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加点
- [NPC_GetPathPoint](NPC_GetPathPoint): 获取路径中特定点的信息
- [NPC_MoveByPath](NPC_MoveByPath): 使 NPC 跟随预定义路径

## 相关回调

_此函数不会触发任何特定的回调。_
