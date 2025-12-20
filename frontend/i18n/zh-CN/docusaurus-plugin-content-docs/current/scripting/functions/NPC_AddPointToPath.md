---
title: NPC_AddPointToPath
sidebar_label: NPC_AddPointToPath
description: 向 NPC 路径添加路径点。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

向 NPC 路径添加一个路径点。

| 参数      | 说明                     |
| --------- | ------------------------ |
| pathid    | 要添加路径点的路径 ID    |
| x         | 路径点的 X 坐标          |
| y         | 路径点的 Y 坐标          |
| z         | 路径点的 Z 坐标          |
| stopRange | 认为到达该点时的距离阈值 |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/addpatrolpos", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        // 尝试添加巡逻点
        if (NPC_AddPointToPath(PlayerPatrolPath[playerid], x, y, z, 1.5))
        {
            SendClientMessage(playerid, 0x00FF00FF, "已在你的当前位置向路径 %d 添加路径点", PlayerPatrolPath[playerid]);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "向路径添加路径点失败");
        }
        return 1;
    }
    return 0;
}

```

## 注意事项

- 路径点按顺序添加以形成路径路线
- `stopRange` 参数定义 NPC 需要距离点多近才能移动到下一个点
- 较小的 `stopRange` 值使 NPC 更精确地沿路径移动
- 在添加路径点前，必须先使用 `NPC_CreatePath` 创建路径

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): 从路径中移除路径点
- [NPC_GetPathPoint](NPC_GetPathPoint): 获取特定点的详细信息
- [NPC_MoveByPath](NPC_MoveByPath): 使 NPC 沿路径移动
- [NPC_GetPathPointCount](NPC_GetPathPointCount): 获取路径中的路径点数量

## 相关回调

- [OnNPCFinishMovePathPoint](../callbacks/OnNPCFinishMovePathPoint): NPC 到达每个路径点时调用
- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成沿路径移动时调用
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): NPC 完成任何移动时调用
