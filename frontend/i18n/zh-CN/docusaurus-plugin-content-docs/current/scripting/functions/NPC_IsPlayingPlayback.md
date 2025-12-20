---
title: NPC_IsPlayingPlayback
sidebar_label: NPC_IsPlayingPlayback
description: 检查 NPC 是否正在回放录制。
tags: ["npc", "录制", "回放"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 当前是否正在回放录制。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在回放回放则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkplayingplayback", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:isPlayingPlayback = NPC_IsPlayingPlayback(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在回放录制: %s", npcid, isPlayingPlayback ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 当 NPC 正在进行回放录制时返回 true

## 相关函数

- [NPC_StartPlayback](NPC_StartPlayback): 开始回放录制
- [NPC_StopPlayback](NPC_StopPlayback): 停止回放
- [NPC_PausePlayback](NPC_PausePlayback): 暂停/取消暂停回放
- [NPC_IsPlaybackPaused](NPC_IsPlaybackPaused): 检查是否暂停

## 相关回调

- [../callbacks/OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): 回放开始时调用
- [../callbacks/OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): 回放结束时调用
