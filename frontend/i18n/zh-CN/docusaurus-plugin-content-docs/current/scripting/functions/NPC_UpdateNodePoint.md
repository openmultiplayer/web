---
title: NPC_UpdateNodePoint
sidebar_label: NPC_UpdateNodePoint
description: 将 NPC 更新到当前播放节点中的特定点。
tags: ["npc", "节点"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

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
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcupdatenodepoint ", true, 20))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new pointid = strval(cmdtext[20]);

        new bool:success = NPC_UpdateNodePoint(npcid, pointid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 更新节点点 %d：%s", npcid, pointid, success ? "成功" : "失败");
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
