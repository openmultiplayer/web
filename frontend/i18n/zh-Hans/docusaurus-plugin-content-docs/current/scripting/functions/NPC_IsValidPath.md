---
title: NPC_IsValidPath
sidebar_label: NPC_IsValidPath
description: 检查路径 ID 是否有效且存在。
tags: ["npc", "路径", "验证"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

检查路径 ID 是否有效且存在。

| 名称   | 描述      |
| ------ | --------- |
| pathid | 路径的 ID |

## 返回值

如果路径有效则返回`true`，否则返回`false`。

## 示例

```c
new g_MainPath = -1;

public OnGameModeInit()
{
    // 创建并验证主巡逻路径
    g_MainPath = NPC_CreatePath();

    if (NPC_IsValidPath(g_MainPath))
    {
        printf("主巡逻路径 %d 创建成功", g_MainPath);

        // 构建巡逻路线
        NPC_AddPointToPath(g_MainPath, 1958.33, 1343.12, 15.36, 2.0);
        NPC_AddPointToPath(g_MainPath, 2058.33, 1343.12, 15.36, 2.0);
        NPC_AddPointToPath(g_MainPath, 2058.33, 1443.12, 15.36, 2.0);
        NPC_AddPointToPath(g_MainPath, 1958.33, 1443.12, 15.36, 2.0);

        printf("向巡逻路径添加了 %d 个点", NPC_GetPathPointCount(g_MainPath));
    }
    else
    {
        printf("错误: 创建主巡逻路径失败");
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/validatepath", true))
    {
        if (NPC_IsValidPath(g_MainPath))
        {
            new pointCount = NPC_GetPathPointCount(g_MainPath);
            new msg[128];
            format(msg, sizeof(msg), "主路径 %d 有效，包含 %d 个点",
                g_MainPath, pointCount);
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "主路径无效或已销毁");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/startpatrol", true))
    {
        if (NPC_IsValidPath(g_MainPath))
        {
            new npcid = NPC_Create("Patroller");
            NPC_Spawn(npcid);
            NPC_MoveByPath(npcid, g_MainPath, NPC_MOVE_TYPE_WALK);

            SendClientMessage(playerid, 0x00FF00FF, "巡逻 NPC 开始跟随主路径");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "无法开始巡逻 - 路径无效");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/createtemppath", true))
    {
        new tempPath = NPC_CreatePath();

        if (NPC_IsValidPath(tempPath))
        {
            // 快速验证测试
            NPC_AddPointToPath(tempPath, 1500.0, 1500.0, 10.0, 1.0);

            new msg[64];
            format(msg, sizeof(msg), "临时路径 %d 创建并验证成功", tempPath);
            SendClientMessage(playerid, 0x00FF00FF, msg);

            // 清理
            NPC_DestroyPath(tempPath);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "创建临时路径失败");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 在与 NPC 一起使用路径前始终检查其是否有效
- 无效路径可能已被销毁或从未正确创建
- 在添加点或为 NPC 分配路径前使用此函数
- 路径被销毁时会重用 ID

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_DestroyPath](NPC_DestroyPath): 销毁路径
- [NPC_GetPathCount](NPC_GetPathCount): 获取路径总数
- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加点

## 相关回调

_此函数不会触发任何特定的回调。_
