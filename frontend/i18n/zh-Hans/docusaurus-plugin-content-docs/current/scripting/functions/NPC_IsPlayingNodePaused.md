---
title: NPC_IsPlayingNodePaused
sidebar_label: NPC_IsPlayingNodePaused
description: 检查 NPC 的节点播放是否当前暂停。
tags: ["npc", "节点"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 的节点播放当前是否暂停。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 的节点播放暂停则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("NodeBot");
    NPC_Spawn(npcid);

    if (NPC_OpenNode(1))
    {
        NPC_PlayNode(npcid, 1, NPC_MOVE_TYPE_WALK);

        // 10秒后暂停
        SetTimerEx("PauseNode", 10000, false, "i", npcid);
    }

    return 1;
}

forward PauseNode(npcid);
public PauseNode(npcid)
{
    NPC_PausePlayingNode(npcid);

    if (NPC_IsPlayingNodePaused(npcid))
    {
        printf("NPC %d节点播放现已暂停", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpause", true))
    {
        if (NPC_IsPlayingNode(0))
        {
            new bool:paused = NPC_IsPlayingNodePaused(0);

            new msg[64];
            format(msg, sizeof(msg), "NPC 0节点%s", paused ? "已暂停" : "正在播放");
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
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

- 如果 NPC 没有播放节点则返回`false`
- 在恢复前使用此函数检查暂停状态
- 暂停的 NPC 保持在当前位置
- NPC 将从暂停处恢复播放

## 相关函数

- [NPC_IsPlayingNode](NPC_IsPlayingNode): 检查是否正在播放节点
- [NPC_PausePlayingNode](NPC_PausePlayingNode): 暂停节点播放
- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): 恢复节点播放
- [NPC_StopPlayingNode](NPC_StopPlayingNode): 停止播放节点

## 相关回调

- [../callbacks/OnNPCFinishNode](../callbacks/OnNPCFinishNode): NPC 完成节点时调用
