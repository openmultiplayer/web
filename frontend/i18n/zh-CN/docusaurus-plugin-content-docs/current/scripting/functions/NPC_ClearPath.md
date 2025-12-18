---
title: NPC_ClearPath
sidebar_label: NPC_ClearPath
description: 清除 NPC 路径中的所有路径点。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

清除 NPC 路径中的所有点，使其变为空路径。

| 参数   | 说明            |
| ------ | --------------- |
| pathid | 要清除的路径 ID |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/clearpatrol", true))
    {
        // 获取清除前的点数
        new count = NPC_GetPathPointCount(PlayerPatrolPath[playerid]);

        // 尝试清除路径
        if (NPC_ClearPath(PlayerPatrolPath[playerid]))
        {
            SendClientMessage(playerid, 0x00FF00FF, "已清除路径 %d（移除了 %d 个点）", PlayerPatrolPath[playerid], count);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "清除路径失败");
        }

        return 1;
    }
    return 0;
}
```

## 注意事项

- 此函数会从指定路径中移除所有路径点
- 路径本身保持有效状态，可以重复使用
- 当前正在沿此路径移动的任何 NPC 将停止移动

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加点
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): 移除特定点
- [NPC_GetPathPointCount](NPC_GetPathPointCount): 获取路径中的点数

## 相关回调

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成路径时调用
