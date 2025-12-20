---
title: NPC_PlayNode
sidebar_label: NPC_PlayNode
description: 让 NPC 通过预定义的导航节点进行导航。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

让 NPC 使用游戏内置的导航系统通过预定义的导航节点进行导航。

| 参数          | 说明                                            |
| ------------- | ----------------------------------------------- |
| npcid         | NPC 的 ID                                       |
| nodeId        | 要导航的节点的 ID                               |
| moveType      | 移动类型（默认: NPC_MOVE_TYPE_JOG）             |
| Float:speed   | 移动速度（默认: NPC_MOVE_SPEED_AUTO）           |
| Float:radius  | 考虑为到达的节点周围半径（默认: 0.0）           |
| bool:setangle | 是否在导航期间更新 NPC 的朝向角度（默认: true） |

## 返回值

如果 NPC 开始播放节点则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcplaynode ", true, 13))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new nodeid = strval(cmdtext[13]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "无效的节点ID。必须在 0 ~ 63 之间。");

        new bool:success = NPC_PlayNode(npcid, nodeid, NPC_MOVE_TYPE_JOG, NPC_MOVE_SPEED_AUTO, 0.0, true);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 播放节点 %d: %s", npcid, nodeid, success ? "成功" : "失败");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 节点是来自游戏节点文件的预定义导航点（ID 0-63）
- 节点在使用前必须通过 `NPC_OpenNode` 打开
- NPC 将自动在指定节点内的点之间导航
- 使用 `setAngle` 参数控制 NPC 是否旋转以面向移动方向
- `radius` 参数决定 NPC 需要多接近每个点
- 节点导航可以使用相关函数暂停、恢复或停止

## 相关函数

- [NPC_StopPlayingNode](NPC_StopPlayingNode): 停止 NPC 节点导航
- [NPC_PausePlayingNode](NPC_PausePlayingNode): 暂停 NPC 节点导航
- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): 恢复暂停的节点导航
- [NPC_IsPlayingNode](NPC_IsPlayingNode): 检查 NPC 是否正在导航节点
- [NPC_ChangeNode](NPC_ChangeNode): 在导航期间切换到不同节点
- [NPC_OpenNode](NPC_OpenNode): 打开节点供使用

## 相关回调

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): NPC 完成导航节点时调用
- [OnNPCFinishNodePoint](../callbacks/OnNPCFinishNodePoint): NPC 到达节点内的点时调用
- [OnNPCChangeNode](../callbacks/OnNPCChangeNode): NPC 从一个节点切换到另一个节点时调用
