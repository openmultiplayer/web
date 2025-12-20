---
title: NPC_MoveByPath
sidebar_label: NPC_MoveByPath
description: 使 NPC 沿预定义路径移动
tags: ["npc", "移动", "路径"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

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
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        new count = NPC_GetPathPointCount(PlayerPatrolPath[playerid]);

        if (NPC_IsValidPath(PlayerPatrolPath[playerid]))
        {
            NPC_MoveByPath(npcid, PlayerPatrolPath[playerid], NPC_MOVE_TYPE_WALK);
            SendClientMessage(playerid, 0x00FF00FF, "开始巡逻路线，共 %d 个点", npcid, count);

            StopPlayerPatrolTimer(playerid);
            PlayerPatrolTimer[playerid] = SetTimerEx("CheckPathProgress", 2000, true, "i", playerid);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "开始巡逻失败");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 路径必须通过 `NPC_CreatePath` 创建，且调用此函数前路径至少需包含一个路径点
- 使用 `NPC_AddPointToPath` 构建行进路线，若需重置路径请调用 `NPC_ClearPath`
- 设置 `reversed = true` 可使 NPC 按相反顺序遍历路径
- 当 NPC 无效、正在执行不兼容动作或路径无法被跟随时，返回 `false`

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加点
- [NPC_ClearPath](NPC_ClearPath): 清除路径中的所有点
- [NPC_StopMove](NPC_StopMove): 停止路径移动
- [NPC_GetCurrentPathPointIndex](NPC_GetCurrentPathPointIndex): 获取当前点

## 相关回调

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成路径移动时调用
- [OnNPCFinishMovePathPoint](../callbacks/OnNPCFinishMovePathPoint): NPC 到达每个路径点时调用
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): NPC 完成移动时调用
