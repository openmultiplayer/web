---
title: NPC_PausePlayback
sidebar_label: NPC_PausePlayback
description: 暂停或恢复 NPC 的录制回放。
tags: ["npc", "录制", "回放"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

暂停或恢复 NPC 的录制回放。

| 参数  | 说明                           |
| ----- | ------------------------------ |
| npcid | NPC 的 ID                      |
| pause | 是否暂停 (true) 或恢复 (false) |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/pauseplayback ", true, 15))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:pause = strval(cmdtext[15]) ? true : false;

        NPC_PausePlayback(npcid, pause);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 回放%s。", npcid, pause ? "已暂停" : "已恢复");
        return 1;
    }
    return 0;
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
