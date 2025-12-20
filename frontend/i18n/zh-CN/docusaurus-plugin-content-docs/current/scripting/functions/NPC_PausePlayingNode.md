---
title: NPC_PausePlayingNode
sidebar_label: NPC_PausePlayingNode
description: 暂停 NPC 的节点导航。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

暂停 NPC 的节点导航，暂时停止其在节点中的移动。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcpausenode", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:success = NPC_PausePlayingNode(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 暂停节点: %s", npcid, success ? "成功" : "失败");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅在 NPC 正在播放节点时有效
- 暂停的节点导航可以通过 NPC_ResumePlayingNode 恢复
- 使用 NPC_IsPlayingNodePaused 检查暂停状态

## 相关函数

- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): 恢复节点播放
- [NPC_IsPlayingNodePaused](NPC_IsPlayingNodePaused): 检查是否暂停
- [NPC_PlayNode](NPC_PlayNode): 开始播放节点
- [NPC_StopPlayingNode](NPC_StopPlayingNode): 停止播放节点

## 相关回调

_此函数不会触发任何特定的回调。_
