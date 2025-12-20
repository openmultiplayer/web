---
title: NPC_IsPlayingNodePaused
sidebar_label: NPC_IsPlayingNodePaused
description: 检查 NPC 的节点播放是否当前暂停。
tags: ["npc", "节点"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 的节点播放当前是否暂停。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 的节点播放暂停则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodepaused", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:isNodePaused = NPC_IsPlayingNodePaused(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 节点暂停: %s", npcid, isNodePaused ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 如果 NPC 没有播放节点则返回`false`

## 相关函数

- [NPC_IsPlayingNode](NPC_IsPlayingNode): 检查是否正在播放节点
- [NPC_PausePlayingNode](NPC_PausePlayingNode): 暂停节点播放
- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): 恢复节点播放
- [NPC_StopPlayingNode](NPC_StopPlayingNode): 停止播放节点

## 相关回调

- [../callbacks/OnNPCFinishNode](../callbacks/OnNPCFinishNode): NPC 完成节点时调用
