---
title: NPC_UpdateNodePoint
sidebar_label: NPC_UpdateNodePoint
description: 将 NPC 更新到当前播放节点中的特定点。
tags: ["npc", "节点"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

将 NPC 更新到当前播放节点中的特定点。

| 参数    | 说明                    |
| ------- | ----------------------- |
| npcid   | NPC 的 ID               |
| pointid | 要更新到的节点中的点 ID |

## 返回值

如果更新成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("NodeNavigator");
    NPC_Spawn(npcid);

    // 打开节点并开始播放
    if (NPC_OpenNode(1))
    {
        NPC_PlayNode(npcid, 1, NPC_MOVE_TYPE_WALK);

        // 10 秒后更新到特定点
        SetTimerEx("UpdateToPoint", 10000, false, "ii", npcid, 5);
    }

    return 1;
}

forward UpdateToPoint(npcid, pointid);
public UpdateToPoint(npcid, pointid)
{
    if (NPC_UpdateNodePoint(npcid, pointid))
    {
        printf("NPC %d 已更新到节点点 %d", npcid, pointid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/skiptopoint", true))
    {
        // 将 NPC 0 跳转到当前节点的点 3
        if (NPC_UpdateNodePoint(0, 3))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 已跳转到点 3");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- NPC 必须当前正在播放节点
- 点 ID 必须存在于当前节点中
- 使用此函数跳转到导航中的特定路径点
- 用于在当前路径内传送 NPC

## 相关函数

- [NPC_PlayNode](NPC_PlayNode): 开始播放节点
- [NPC_SetNodePoint](NPC_SetNodePoint): 设置节点点坐标
- [NPC_GetNodePointPosition](NPC_GetNodePointPosition): 获取点位置
- [NPC_IsPlayingNode](NPC_IsPlayingNode): 检查是否在播放节点

## 相关回调

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): NPC 完成节点时调用
