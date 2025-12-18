---
title: NPC_GetCurrentPathPointIndex
sidebar_label: NPC_GetCurrentPathPointIndex
description: 获取 NPC 当前正在移动的路径点索引。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 当前正移动到的路径点索引。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 当前正移动到的路径点索引。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    // 创建路径和在路径上创建点的命令

    if (!strcmp(cmdtext, "/startpatrol", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        new count = NPC_GetPathPointCount(PlayerPatrolPath[playerid]);

        if (NPC_IsValidPath(PlayerPatrolPath[playerid]))
        {
            NPC_MoveByPath(npcid, PlayerPatrolPath[playerid], NPC_MOVE_TYPE_WALK);
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 开始巡逻路线，共 %d 个点", npcid, count);

            PlayerPatrolTimer[playerid] = SetTimerEx("CheckPathProgress", 2000, true, "i", playerid);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "开始巡逻路线失败");
        }
        return 1;
    }
    return 0;
}

forward CheckPathProgress(playerid);
public CheckPathProgress(playerid)
{
    if (!IsPlayerConnected(playerid))
    {
        // 做点什么
        return 0;
    }

    new npcid = PlayerNPC[playerid];
    if (npcid == INVALID_NPC_ID || !NPC_IsValid(npcid))
    {
        // 做点什么
        return 0;
    }

    if (!NPC_IsValidPath(PlayerPatrolPath[playerid]))
    {
        // 做点什么
        return 0;
    }

    new currentPoint = NPC_GetCurrentPathPointIndex(npcid);
    new totalPoints = NPC_GetPathPointCount(PlayerPatrolPath[playerid]);

    if (currentPoint != INVALID_NODE_ID)
    {
        SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 进度：第 %d 个点，共 %d 个", npcid, currentPoint + 1, totalPoints);
    }
    return 1;
}

```

## 注意事项

- 如果 NPC 没有沿路径移动，返回-1
- 这表示 NPC 当前正移动到的点

## 相关函数

- [NPC_MoveByPath](NPC_MoveByPath): 使 NPC 沿路径移动
- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加点
- [NPC_GetPathPointCount](NPC_GetPathPointCount): 获取路径中的总点数

## 相关回调

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成路径时调用
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): NPC 完成移动时调用
