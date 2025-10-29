---
title: NPC_MoveByPath
sidebar_label: NPC_MoveByPath
description: 使 NPC 沿预定义路径移动
tags: ["npc", "移动", "路径"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

使 NPC 沿预定义路径移动，支持多种移动选项。

| 参数      | 说明                                  |
| --------- | ------------------------------------- |
| npcid     | NPC 的 ID                             |
| pathid    | 要跟随的路径 ID                       |
| moveType  | 移动类型（默认：NPC_MOVE_TYPE_JOG）   |
| moveSpeed | 移动速度（默认：NPC_MOVE_SPEED_AUTO） |
| reversed  | 是否反向跟随路径（默认：false）       |

## 返回值

如果 NPC 开始跟随路径返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/startpatrol", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "您没有在调试NPC。");

        new count = NPC_GetPathPointCount(g_PatrolPath);

        if (NPC_IsValidPath(g_PatrolPath))
        {
            NPC_MoveByPath(npcid, g_PatrolPath, NPC_MOVE_TYPE_WALK);
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 开始巡逻路线，共 %d 个点", npcid, count);
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 路径必须在使用前通过 NPC_CreatePath 创建
- 使用 NPC_AddPointToPath 向路径添加路径点
- 路径类型包括循环、单次和往返模式
- 移动标志可以组合使用以实现不同行为

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加点
- [NPC_StopMove](NPC_StopMove): 停止路径移动
- [NPC_GetCurrentPathPointIndex](NPC_GetCurrentPathPointIndex): 获取当前点

## 相关回调

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成路径移动时调用
