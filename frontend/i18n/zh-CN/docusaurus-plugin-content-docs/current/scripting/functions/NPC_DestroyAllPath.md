---
title: NPC_DestroyAllPath
sidebar_label: NPC_DestroyAllPath
description: 销毁所有 NPC 路径。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

销毁服务器上所有现有的 NPC 路径。

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/destroyallpaths", true))
    {
        NPC_DestroyAllPath();
        SendClientMessage(playerid, 0x00FF00FF, "所有 NPC 路径已被销毁。");
        printf("销毁后的路径总数: %d", NPC_GetPathCount());
        return 1;
    }
    return 0;
}

public OnGameModeExit()
{
    // 在服务器关闭时清理所有路径
    NPC_DestroyAllPath();
    return 1;
}
```

## 注意事项

- 此函数销毁服务器上的所有路径
- 当前正在沿路径移动的 NPC 将停止移动
- 调用此函数后，所有路径 ID 变为无效
- 请谨慎使用，因为这会影响服务器上的所有 NPC
- 这在游戏模式重启期间进行清理时很有用

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_DestroyPath](NPC_DestroyPath): 销毁特定路径
- [NPC_GetPathCount](NPC_GetPathCount): 获取路径总数
- [NPC_ClearPath](NPC_ClearPath): 清除路径中的所有路径点

## 相关回调

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): 当 NPC 完成路径时调用
