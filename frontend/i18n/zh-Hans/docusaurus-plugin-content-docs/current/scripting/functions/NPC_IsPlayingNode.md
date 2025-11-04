---
title: NPC_IsPlayingNode
sidebar_label: NPC_IsPlayingNode
description: 检查 NPC 当前是否正在播放节点。
tags: ["npc", "节点"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 当前是否正在播放节点。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在播放节点则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("NodeWalker");
    NPC_Spawn(npcid);

    if (NPC_OpenNode(1))
    {
        NPC_PlayNode(npcid, 1, NPC_MOVE_TYPE_WALK);

        // 5秒后检查状态
        SetTimerEx("CheckNodeStatus", 5000, false, "i", npcid);
    }

    return 1;
}

forward CheckNodeStatus(npcid);
public CheckNodeStatus(npcid)
{
    if (NPC_IsPlayingNode(npcid))
    {
        printf("NPC %d 正在播放节点", npcid);
    }
    else
    {
        printf("NPC %d没有播放任何节点", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknode", true))
    {
        if (NPC_IsPlayingNode(0))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0正在播放节点");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0没有播放任何节点");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 如果 NPC 无效则返回`false`
- 在停止或暂停节点播放前使用此函数检查
- NPC 一次只能播放一个节点
- 即使节点暂停，此函数仍返回`true`

## 相关函数

- [NPC_PlayNode](NPC_PlayNode): 让 NPC 播放节点
- [NPC_StopPlayingNode](NPC_StopPlayingNode): 停止播放节点
- [NPC_IsPlayingNodePaused](NPC_IsPlayingNodePaused): 检查是否暂停
- [NPC_PausePlayingNode](NPC_PausePlayingNode): 暂停节点播放

## 相关回调

- [../callbacks/OnNPCFinishNode](../callbacks/OnNPCFinishNode): NPC 完成节点时调用
