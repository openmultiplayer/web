---
title: NPC_GetPathCount
sidebar_label: NPC_GetPathCount
description: 获取服务器上 NPC 路径的总数。
tags: ["npc", "路径"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

获取服务器上当前存在的 NPC 路径总数。

## 返回值

返回服务器上存在的路径数量。

## 示例

```c
public OnGameModeInit()
{
    printf("初始路径数量: %d", NPC_GetPathCount()); // 0

    // 创建一些路径
    new path1 = NPC_CreatePath();
    new path2 = NPC_CreatePath();
    new path3 = NPC_CreatePath();

    printf("创建3个路径后的路径数量: %d", NPC_GetPathCount()); // 3

    // 销毁一个路径
    NPC_DestroyPath(path2);

    printf("销毁1个路径后的路径数量: %d", NPC_GetPathCount()); // 2

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/pathstats", true))
    {
        new pathCount = NPC_GetPathCount();

        new msg[128];
        format(msg, sizeof(msg), "服务器有%d个NPC路径", pathCount);
        SendClientMessage(playerid, 0x00FF00FF, msg);

        return 1;
    }

    if (!strcmp(cmdtext, "/createtestpaths", true))
    {
        new oldCount = NPC_GetPathCount();

        // 创建5个测试路径
        for (new i = 0; i < 5; i++)
        {
            new pathid = NPC_CreatePath();
            NPC_AddPointToPath(pathid, 1958.33 + i * 10, 1343.12, 15.36, 1.0);
        }

        new newCount = NPC_GetPathCount();

        new msg[128];
        format(msg, sizeof(msg), "已创建路径。数量: %d -> %d", oldCount, newCount);
        SendClientMessage(playerid, 0x00FF00FF, msg);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 此函数计算所有路径，无论它们是否包含路径点
- 空路径（无路径点）仍会被计算
- 使用此函数监控服务器资源使用情况
- 路径会一直存在直到被显式销毁

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_DestroyPath](NPC_DestroyPath): 销毁特定路径
- [NPC_DestroyAllPath](NPC_DestroyAllPath): 销毁所有路径
- [NPC_IsValidPath](NPC_IsValidPath): 检查路径是否有效

## 相关回调

- [../callbacks/OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成路径时调用
