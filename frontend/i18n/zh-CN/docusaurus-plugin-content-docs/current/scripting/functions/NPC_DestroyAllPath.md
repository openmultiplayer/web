---
title: NPC_DestroyAllPath
sidebar_label: NPC_DestroyAllPath
description: 销毁所有 NPC 路径。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

销毁服务器上所有现有的 NPC 路径。

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnGameModeExit()
{
    // 获取清除前的路径数量
    new total = NPC_GetPathCount();

    // 尝试销毁所有路径
    if (NPC_DestroyAllPath())
    {
        printf("[NPC] 已销毁所有NPC路径（移除了 %d 个）。", total);
    }
    else
    {
        printf("[NPC] 销毁NPC路径失败。");
    }

    return 1;
}

```

## 注意事项

- 此函数会销毁服务器上的所有路径，当前正在沿路径移动的 NPC 将停止移动
- 调用此函数后，所有路径 ID 都变为无效
- 这在游戏模式关闭/重启期间进行清理很有用

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_DestroyPath](NPC_DestroyPath): 销毁特定路径
- [NPC_GetPathCount](NPC_GetPathCount): 获取路径总数
- [NPC_ClearPath](NPC_ClearPath): 清除路径中的所有点

## 相关回调

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成路径时调用
