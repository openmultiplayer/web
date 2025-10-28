---
title: NPC_StopPlayingNode
sidebar_label: NPC_StopPlayingNode
description: 停止 NPC 的节点播放。
tags: ["npc", "节点"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

停止 NPC 当前节点的播放。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 成功停止则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("NodeWalker");
    NPC_Spawn(npcid);

    // 打开节点并开始播放
    if (NPC_OpenNode(1))
    {
        NPC_PlayNode(npcid, 1, NPC_MOVE_TYPE_WALK);

        // 15 秒后停止播放
        SetTimerEx("StopNodePlay", 15000, false, "i", npcid);
    }

    return 1;
}

forward StopNodePlay(npcid);
public StopNodePlay(npcid)
{
    if (NPC_StopPlayingNode(npcid))
    {
        printf("NPC %d 已停止节点播放", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopnode", true))
    {
        // 停止 NPC 0 的节点播放
        if (NPC_StopPlayingNode(0))
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 已停止节点播放");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- NPC 将在节点中的当前位置停止
- 如果 NPC 没有在播放节点，此函数返回`false`
- 节点保持打开状态，可以被其他 NPC 使用
- 使用 `NPC_IsPlayingNode` 检查 NPC 是否在播放节点

## 相关函数

- [NPC_PlayNode](NPC_PlayNode): 让 NPC 播放节点
- [NPC_IsPlayingNode](NPC_IsPlayingNode): 检查 NPC 是否在播放节点
- [NPC_PausePlayingNode](NPC_PausePlayingNode): 暂停节点播放
- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): 恢复节点播放

## 相关回调

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): NPC 完成节点时调用
