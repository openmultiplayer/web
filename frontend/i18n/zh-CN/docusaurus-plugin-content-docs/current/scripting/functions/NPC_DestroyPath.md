---
title: NPC_DestroyPath
sidebar_label: NPC_DestroyPath
description: 销毁特定的 NPC 路径。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

销毁特定的 NPC 路径，使其变为无效。

| 名称   | 描述              |
| ------ | ----------------- |
| pathid | 要销毁的路径的 ID |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

```c
new g_PatrolPath;

public OnGameModeInit()
{
    // 创建巡逻路径
    g_PatrolPath = NPC_CreatePath();
    NPC_AddPointToPath(g_PatrolPath, 1958.33, 1343.12, 15.36, 1.0);
    NPC_AddPointToPath(g_PatrolPath, 1968.33, 1353.12, 15.36, 1.0);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/destroypath", true))
    {
        if (NPC_IsValidPath(g_PatrolPath))
        {
            if (NPC_DestroyPath(g_PatrolPath))
            {
                SendClientMessage(playerid, 0x00FF00FF, "巡逻路径已销毁。");
                g_PatrolPath = -1;
            }
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "路径无效。");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 路径 ID 在销毁后变为无效
- 当前正在沿此路径移动的 NPC 将停止移动
- 路径中的所有路径点都被移除
- 路径使用的内存被释放

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_IsValidPath](NPC_IsValidPath): 检查路径是否有效
- [NPC_DestroyAllPath](NPC_DestroyAllPath): 销毁所有路径
- [NPC_GetPathCount](NPC_GetPathCount): 获取路径总数

## 相关回调

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): 当 NPC 完成路径时调用
