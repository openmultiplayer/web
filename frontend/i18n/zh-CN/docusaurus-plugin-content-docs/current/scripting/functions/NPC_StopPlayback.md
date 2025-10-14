---
title: NPC_StopPlayback
sidebar_label: NPC_StopPlayback
description: 停止 NPC 的录制回放。
tags: ["npc", "回放", "录制"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

停止 NPC 当前录制回放的回放。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("PlaybackBot");
    NPC_Spawn(npcid);

    // 开始回放录制
    NPC_StartPlayback(npcid, "patrol", true, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);

    // 15 秒后停止回放
    SetTimerEx("StopNPCPlayback", 15000, false, "i", npcid);

    return 1;
}

forward StopNPCPlayback(npcid);
public StopNPCPlayback(npcid)
{
    NPC_StopPlayback(npcid);
    printf("已停止 NPC %d 的回放", npcid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopplayback", true))
    {
        // 停止 NPC 0 的回放
        NPC_StopPlayback(0);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 回放已停止");
        return 1;
    }
    return 0;
}
```

## 注意事项

- NPC 将在回放结束时停在当前位置
- 如果 NPC 没有在回放录制，此函数无效
- 使用 `NPC_IsPlayingPlayback` 检查 NPC 是否在回放录制
- 录制文件保持加载状态，可以再次使用

## 相关函数

- [NPC_StartPlayback](NPC_StartPlayback): 开始 NPC 回放
- [NPC_IsPlayingPlayback](NPC_IsPlayingPlayback): 检查是否在回放
- [NPC_LoadRecord](NPC_LoadRecord): 加载录制文件
- [NPC_UnloadRecord](NPC_UnloadRecord): 卸载录制

## 相关回调

- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): 回放结束时调用
