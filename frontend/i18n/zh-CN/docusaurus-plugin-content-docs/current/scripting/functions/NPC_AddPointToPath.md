---
title: NPC_AddPointToPath
sidebar_label: NPC_AddPointToPath
description: 向 NPC 路径添加路径点。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

向 NPC 路径添加路径点。

| 名称      | 描述              |
| --------- | ----------------- |
| pathid    | 要添加点的路径 ID |
| x         | 路径点的 X 坐标   |
| y         | 路径点的 Y 坐标   |
| z         | 路径点的 Z 坐标   |
| stopRange | 认为到达点的距离  |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

```c
new g_PatrolPath = -1;

public OnGameModeInit()
{
    // 创建巡逻路径
    g_PatrolPath = NPC_CreatePath();

    if (NPC_IsValidPath(g_PatrolPath))
    {
        // 构建巡逻路线
        NPC_AddPointToPath(g_PatrolPath, 1958.33, 1343.12, 15.36, 2.0);
        NPC_AddPointToPath(g_PatrolPath, 1968.33, 1353.12, 15.36, 1.5);
        NPC_AddPointToPath(g_PatrolPath, 1978.33, 1363.12, 15.36, 2.0);

        printf("巡逻路径已创建，包含 %d 个路径点", NPC_GetPathPointCount(g_PatrolPath));
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/startpatrol", true))
    {
        if (NPC_IsValidPath(g_PatrolPath))
        {
            NPC_MoveByPath(0, g_PatrolPath, NPC_MOVE_TYPE_WALK);
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 开始巡逻路线");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/addwaypoint", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        if (NPC_AddPointToPath(g_PatrolPath, x, y, z, 1.5))
        {
            SendClientMessage(playerid, 0x00FF00FF, "已在您的位置添加路径点");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 点按顺序添加以形成路径路线
- `stopRange` 参数定义 NPC 在移动到下一个点之前需要接近的距离
- 较小的 `stopRange` 使 NPC 更精确地跟随路径
- 在添加点之前必须使用 `NPC_CreatePath` 创建路径

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): 从路径中移除点
- [NPC_MoveByPath](NPC_MoveByPath): 使 NPC 沿路径移动
- [NPC_GetPathPointCount](NPC_GetPathPointCount): 获取路径中的点数

## 相关回调

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): 当 NPC 完成沿路径移动时调用
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): 当 NPC 完成任何移动时调用
