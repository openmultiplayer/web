---
title: NPC_GetPathCount
sidebar_label: NPC_GetPathCount
description: 获取服务器上 NPC 路径的总数。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取服务器上当前存在的 NPC 路径总数。

## 返回值

返回服务器上存在的路径数量。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpathcount", true))
    {
        new count = NPC_GetPathCount();

        SendClientMessage(playerid, 0x00FF00FF, "总NPC路径: %d", count);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 此函数计算所有路径，无论它们是否包含路径点
- 空路径（无路径点）仍会被计算

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_DestroyPath](NPC_DestroyPath): 销毁特定路径
- [NPC_DestroyAllPath](NPC_DestroyAllPath): 销毁所有路径
- [NPC_IsValidPath](NPC_IsValidPath): 检查路径是否有效

## 相关回调

- [../callbacks/OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成路径时调用
