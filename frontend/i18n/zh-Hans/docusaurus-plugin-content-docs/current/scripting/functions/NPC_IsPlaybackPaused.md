---
title: NPC_IsPlaybackPaused
sidebar_label: NPC_IsPlaybackPaused
description: 检查NPC的回放是否暂停。
tags: ["npc", "录制", "回放"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 的回放当前是否暂停。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果回放暂停则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("RecordedDriver");
    NPC_Spawn(npcid);

    // 加载并开始回放
    NPC_LoadRecord("driver_route");
    NPC_StartPlayback(npcid, "driver_route", true, 1958.33, 1343.12, 15.36, 0.0, 0.0, 0.0);

    // 10秒后自动暂停
    SetTimerEx("AutoPausePlayback", 10000, false, "i", npcid);

    return 1;
}

forward AutoPausePlayback(npcid);
public AutoPausePlayback(npcid)
{
    if (NPC_IsPlayingPlayback(npcid))
    {
        NPC_PausePlayback(npcid, true);
        printf("NPC %d回放已自动暂停", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/pausestatus", true))
    {
        if (NPC_IsPlayingPlayback(0))
        {
            if (NPC_IsPlaybackPaused(0))
            {
                SendClientMessage(playerid, 0xFFFF00FF, "NPC 0回放已暂停");
            }
            else
            {
                SendClientMessage(playerid, 0x00FF00FF, "NPC 0回放正在运行");
            }
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0没有播放任何录制");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/togglepause", true))
    {
        if (NPC_IsPlayingPlayback(0))
        {
            new bool:currentPaused = NPC_IsPlaybackPaused(0);
            NPC_PausePlayback(0, !currentPaused);

            new action[16];
            action = currentPaused ? "已恢复" : "已暂停";

            new msg[64];
            format(msg, sizeof(msg), "NPC 0回放%s", action);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0没有活动回放可暂停");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 只有当 NPC 正在播放录制且已暂停时才返回 true
- 在切换暂停状态前使用此函数检查回放状态
- 暂停的回放可以通过 NPC_PausePlayback(npcid, false)恢复
- 未播放录制的 NPC 将始终返回 false

## 相关函数

- [NPC_PausePlayback](NPC_PausePlayback): 暂停/取消暂停回放
- [NPC_IsPlayingPlayback](NPC_IsPlayingPlayback): 检查是否正在播放
- [NPC_StartPlayback](NPC_StartPlayback): 开始回放
- [NPC_StopPlayback](NPC_StopPlayback): 停止回放

## 相关回调

- [../callbacks/OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): 回放开始时调用
- [../callbacks/OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): 回放结束时调用
