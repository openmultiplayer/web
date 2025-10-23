---
title: NPC_PausePlayback
sidebar_label: NPC_PausePlayback
description: 暂停或恢复 NPC 的录制回放。
tags: ["npc", "录制", "回放"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

暂停或恢复 NPC 的录制回放。

| 名称  | 描述                           |
| ----- | ------------------------------ |
| npcid | NPC 的 ID                      |
| pause | 是否暂停 (true) 或恢复 (false) |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("RecordedBot");
    NPC_Spawn(npcid);
    NPC_StartPlayback(npcid, "录制", true, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);

    // 5秒后暂停
    SetTimerEx("PauseBot", 5000, false, "i", npcid);

    return 1;
}

forward PauseBot(npcid);
public PauseBot(npcid)
{
    NPC_PausePlayback(npcid, true);
    printf("NPC %d 回放已暂停", npcid);

    // 3秒后恢复
    SetTimerEx("ResumeBot", 3000, false, "i", npcid);
}

forward ResumeBot(npcid);
public ResumeBot(npcid)
{
    NPC_PausePlayback(npcid, false);
    printf("NPC %d 回放已恢复", npcid);
}
```

## 注意事项

- 仅在 NPC 正在回放录制时有效
- 暂停的回放可以通过调用 pause = false 来恢复
- 使用 NPC_IsPlaybackPaused 检查当前暂停状态

## 相关函数

- [NPC_IsPlaybackPaused](NPC_IsPlaybackPaused): 检查是否暂停
- [NPC_StartPlayback](NPC_StartPlayback): 开始回放
- [NPC_StopPlayback](NPC_StopPlayback): 停止回放
- [NPC_IsPlayingPlayback](NPC_IsPlayingPlayback): 检查是否正在回放

## 相关回调

_此函数不会触发任何特定的回调。_
