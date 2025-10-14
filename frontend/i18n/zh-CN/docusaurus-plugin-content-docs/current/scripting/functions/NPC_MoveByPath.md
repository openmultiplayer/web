---
title: NPC_MoveByPath
sidebar_label: NPC_MoveByPath
description: 让 NPC 沿预定义路径移动。
tags: ["npc", "移动", "路径"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

让 NPC 沿预定义路径移动，具有各种移动选项。

| 名称      | 描述                                  |
| --------- | ------------------------------------- |
| npcid     | NPC 的 ID                             |
| pathid    | 要跟随的路径的 ID                     |
| moveType  | 移动类型（默认: NPC_MOVE_TYPE_JOG）   |
| moveSpeed | 移动速度（默认: NPC_MOVE_SPEED_AUTO） |
| reversed  | 是否反向跟随路径（默认: false）       |

## 返回值

如果 NPC 开始跟随路径则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Patroller");
    NPC_Spawn(npcid);

    // 创建路径
    new pathid = NPC_CreatePath();
    NPC_AddPointToPath(pathid, 1958.33, 1343.12, 15.36, 2.0);
    NPC_AddPointToPath(pathid, 1958.33, 1443.12, 15.36, 2.0);
    NPC_AddPointToPath(pathid, 2058.33, 1443.12, 15.36, 2.0);
    NPC_AddPointToPath(pathid, 2058.33, 1343.12, 15.36, 2.0);

    // 让 NPC 步行跟随路径
    NPC_MoveByPath(npcid, pathid, NPC_MOVE_TYPE_WALK, NPC_MOVE_SPEED_AUTO, false);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/startpatrol", true))
    {
        new pathid = NPC_CreatePath();
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        // 在玩家周围创建简单的方形巡逻
        NPC_AddPointToPath(pathid, x + 10.0, y + 10.0, z, 1.0);
        NPC_AddPointToPath(pathid, x - 10.0, y + 10.0, z, 1.0);
        NPC_AddPointToPath(pathid, x - 10.0, y - 10.0, z, 1.0);
        NPC_AddPointToPath(pathid, x + 10.0, y - 10.0, z, 1.0);

        // 用第一个 NPC 开始巡逻
        NPC_MoveByPath(0, pathid, NPC_MOVE_TYPE_JOG, NPC_MOVE_SPEED_AUTO, false);

        SendClientMessage(playerid, 0x00FF00FF, "NPC 开始在您周围巡逻");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 路径在使用前必须通过 NPC_CreatePath 创建
- 使用 NPC_AddPointToPath 向路径添加路径点
- 路径类型包括循环、单次和往返模式
- 移动标志可以组合以产生不同的行为

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加点
- [NPC_StopMove](NPC_StopMove): 停止路径移动
- [NPC_GetCurrentPathPointIndex](NPC_GetCurrentPathPointIndex): 获取当前点

## 相关回调

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成沿路径移动时调用
