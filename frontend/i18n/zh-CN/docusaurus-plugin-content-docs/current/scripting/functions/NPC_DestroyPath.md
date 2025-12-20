---
title: NPC_DestroyPath
sidebar_label: NPC_DestroyPath
description: 销毁特定的 NPC 路径。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

销毁特定的 NPC 路径，使其变为无效。

| 参数   | 说明            |
| ------ | --------------- |
| pathid | 要销毁的路径 ID |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/deletepatrol", true))
    {
        // 首先检查路径是否有效
        if (!NPC_IsValidPath(PlayerPatrolPath[playerid]))
        {
            SendClientMessage(playerid, 0xFF0000FF, "没有有效的巡逻路径可以删除。");
            return 1;
        }

        // 获取路径中有多少个点
        new count = NPC_GetPathPointCount(PlayerPatrolPath[playerid]);

        // 尝试销毁它
        if (NPC_DestroyPath(PlayerPatrolPath[playerid]))
        {
            SendClientMessage(playerid, 0x00FF00FF, "已销毁路径 %d（移除了 %d 个点）。", PlayerPatrolPath[playerid], count);

            // 重置全局变量，因为它现在无效了
            PlayerPatrolPath[playerid] = -1;
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "销毁巡逻路径失败。");
        }

        return 1;
    }
    return 0;
}
```

## 注意事项

- 路径 ID 在销毁后变为无效
- 当前正在沿此路径移动的 NPC 将停止移动，因为路径中的所有点都被移除了

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_IsValidPath](NPC_IsValidPath): 检查路径是否有效
- [NPC_DestroyAllPath](NPC_DestroyAllPath): 销毁所有路径
- [NPC_GetPathCount](NPC_GetPathCount): 获取路径总数

## 相关回调

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成路径时调用
