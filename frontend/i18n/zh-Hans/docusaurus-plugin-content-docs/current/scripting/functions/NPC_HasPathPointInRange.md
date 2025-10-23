---
title: NPC_HasPathPointInRange
sidebar_label: NPC_HasPathPointInRange
description: 检查路径中是否有任何点在给定坐标的指定范围内。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

检查路径中是否有任何点在给定坐标的指定范围内。

| 名称   | 描述                 |
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
new g_PatrolPath;

public OnGameModeInit()
{
    // 为NPC创建巡逻路线
    g_PatrolPath = NPC_CreatePath();
    NPC_AddPointToPath(g_PatrolPath, 1958.33, 1343.12, 15.36, 1.0);
    NPC_AddPointToPath(g_PatrolPath, 1968.33, 1353.12, 15.36, 1.0);
    NPC_AddPointToPath(g_PatrolPath, 1978.33, 1363.12, 15.36, 1.0);
    NPC_AddPointToPath(g_PatrolPath, 1988.33, 1373.12, 15.36, 1.0);

    printf("巡逻路径已创建，包含%d个点", NPC_GetPathPointCount(g_PatrolPath));

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkarea", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        // 检查巡逻路线是否经过玩家位置附近
        if (NPC_HasPathPointInRange(g_PatrolPath, x, y, z, 50.0))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC巡逻路线经过你的位置附近！");

            // 生成NPC跟随路径
            new npcid = NPC_Create("Patrol");
            NPC_Spawn(npcid);
            NPC_MoveByPath(npcid, g_PatrolPath, NPC_MOVE_TYPE_WALK);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "该区域内没有巡逻路线");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/safezone", true))
    {
        // 检查路径是否与安全区域相交
        if (!NPC_HasPathPointInRange(g_PatrolPath, 1500.0, 1500.0, 10.0, 100.0))
        {
            SendClientMessage(playerid, 0x00FF00FF, "安全区域没有巡逻路线");
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "警告：巡逻路线经过安全区域");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 此函数用于在开始路径移动前检查 NPC 路径是否与特定区域或位置相交
- 函数检查给定位置与每个路径点之间的 3D 距离
- 只有至少有一个点的有效路径才能返回`true`
- 对区域控制、安全区域和动态路径验证很有用

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建 NPC 移动的新路径
- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加点
- [NPC_GetPathPoint](NPC_GetPathPoint): 获取路径中特定点的信息
- [NPC_MoveByPath](NPC_MoveByPath): 使 NPC 跟随预定义路径

## 相关回调

_此函数不会触发任何特定的回调。_
