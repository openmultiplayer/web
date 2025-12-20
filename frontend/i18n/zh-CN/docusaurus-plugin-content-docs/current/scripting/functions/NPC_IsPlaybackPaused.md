---
title: NPC_IsPlaybackPaused
sidebar_label: NPC_IsPlaybackPaused
description: 检查 NPC 的回放是否暂停。
tags: ["npc", "录制", "回放"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 的回放当前是否暂停。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果回放暂停则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkplaybackpaused", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:isPlaybackPaused = NPC_IsPlaybackPaused(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 回放暂停: %s", npcid, isPlaybackPaused ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 只有当 NPC 正在播放录制且已暂停时才返回 true
- 未播放录制的 NPC 将始终返回 false

## 相关函数

- [NPC_PausePlayback](NPC_PausePlayback): 暂停/取消暂停回放
- [NPC_IsPlayingPlayback](NPC_IsPlayingPlayback): 检查是否正在播放
- [NPC_StartPlayback](NPC_StartPlayback): 开始回放
- [NPC_StopPlayback](NPC_StopPlayback): 停止回放

## 相关回调

- [../callbacks/OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): 回放开始时调用
- [../callbacks/OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): 回放结束时调用
