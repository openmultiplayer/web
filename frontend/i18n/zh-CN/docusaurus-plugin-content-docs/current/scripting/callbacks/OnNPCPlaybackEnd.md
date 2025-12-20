---
title: OnNPCPlaybackEnd
sidebar_label: OnNPCPlaybackEnd
description: 当 NPC 完成录制文件的回放时调用此回调。
tags: ["npc", "回放", "录制"]
---

<VersionWarnZH_CN name='回调' version='omp v1.5.8.3079' />

## 描述

当 NPC 完成录制文件的回放时调用此回调。

| 参数     | 说明                    |
| -------- | ----------------------- |
| npcid    | 完成回放的 NPC 的 ID    |
| recordid | 完成回放的录制文件的 ID |

## 示例

```c
public OnNPCPlaybackEnd(npcid, recordid)
{
    printf("[NPC] NPC %d 完成回放（录制：%d）", npcid, recordid);

    // 通知追踪此 NPC 的玩家
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 完成回放（录制 ID：%d）", npcid, recordid);
        }
    }
    return 1;
}
```

## 注意事项

- 当录制自然到达结尾时调用此回调
- 当使用 `NPC_StopPlayback` 手动停止回放时也会调用此回调
- `recordid` 对应已加载的录制文件

## 相关函数

以下函数可能有用，因为它们与此回调以某种方式相关。

- [NPC_StartPlayback](../functions/NPC_StartPlayback): 开始 NPC 录制回放
- [NPC_StopPlayback](../functions/NPC_StopPlayback): 停止 NPC 回放
- [NPC_PausePlayback](../functions/NPC_PausePlayback): 暂停/恢复 NPC 回放
- [NPC_IsPlayingPlayback](../functions/NPC_IsPlayingPlayback): 检查 NPC 是否正在回放录制

## 相关回调

- [OnNPCPlaybackStart](OnNPCPlaybackStart): 当 NPC 开始回放录制时调用
