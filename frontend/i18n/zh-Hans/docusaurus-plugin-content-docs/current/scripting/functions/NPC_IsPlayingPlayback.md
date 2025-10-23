---
title: NPC_IsPlayingPlayback
sidebar_label: NPC_IsPlayingPlayback
description: 检查NPC是否正在回放录制。
tags: ["npc", "录制", "回放"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 当前是否正在回放录制。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在回放回放则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("AutoBot");
    NPC_Spawn(npcid);

    // 加载多个录制
    NPC_LoadRecord("patrol_route");
    NPC_LoadRecord("combat_moves");

    // 开始巡逻录制
    NPC_StartPlayback(npcid, "patrol_route", true, 1958.33, 1343.12, 15.36, 0.0, 0.0, 0.0);

    // 监控回放状态
    SetTimer("MonitorPlayback", 2000, true);

    return 1;
}

forward MonitorPlayback();
public MonitorPlayback()
{
    if (NPC_IsPlayingPlayback(0))
    {
        new status[32];
        if (NPC_IsPlaybackPaused(0))
            status = "回放中（已暂停）";
        else
            status = "回放中（活动）";

        printf("NPC 0状态: %s", status);
    }
    else
    {
        printf("NPC 0: 无活动回放");
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/playbackinfo", true))
    {
        if (NPC_IsPlayingPlayback(0))
        {
            new bool:paused = NPC_IsPlaybackPaused(0);
            new status[64];
            format(status, sizeof(status), "NPC 0: 正在回放录制(%s)",
                paused ? "已暂停" : "活动");
            SendClientMessage(playerid, 0x00FF00FF, status);
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0: 无录制回放活动");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/startpatrol", true))
    {
        if (!NPC_IsPlayingPlayback(0))
        {
            if (NPC_IsValidRecord("patrol_route"))
            {
                NPC_StartPlayback(0, "patrol_route", true, 1958.33, 1343.12, 15.36, 0.0, 0.0, 0.0);
                SendClientMessage(playerid, 0x00FF00FF, "NPC 0开始巡逻录制");
            }
            else
            {
                SendClientMessage(playerid, 0xFF0000FF, "巡逻路线录制未加载");
            }
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0已在回放录制");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/stopplayback", true))
    {
        if (NPC_IsPlayingPlayback(0))
        {
            NPC_StopPlayback(0);
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0回放已停止");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0没有回放任何录制");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 当 NPC 正在积极回放录制时返回 true
- 这包括活动和暂停的回放
- 使用此函数检查 NPC 是否受录制控制
- NPC 一次只能回放一个录制

## 相关函数

- [NPC_StartPlayback](NPC_StartPlayback): 开始回放录制
- [NPC_StopPlayback](NPC_StopPlayback): 停止回放
- [NPC_PausePlayback](NPC_PausePlayback): 暂停/取消暂停回放
- [NPC_IsPlaybackPaused](NPC_IsPlaybackPaused): 检查是否暂停

## 相关回调

- [../callbacks/OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): 回放开始时调用
- [../callbacks/OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): 回放结束时调用
