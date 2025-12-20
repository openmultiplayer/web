---
title: NPC_ResumePlayingNode
sidebar_label: NPC_ResumePlayingNode
description: 恢复 NPC 的暂停节点导航。
tags: ["npc", "节点"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

恢复 NPC 的暂停节点导航。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcresumenode", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:success = NPC_ResumePlayingNode(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 恢复节点: %s", npcid, success ? "成功" : "失败");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅在 NPC 的节点导航之前被暂停时有效
- NPC 将从暂停的位置继续

## 相关函数

- [NPC_PausePlayingNode](NPC_PausePlayingNode): 暂停节点导航
- [NPC_PlayNode](NPC_PlayNode): 开始播放节点
- [NPC_IsPlayingNodePaused](NPC_IsPlayingNodePaused): 检查是否暂停
- [NPC_IsPlayingNode](NPC_IsPlayingNode): 检查是否正在播放节点

## 相关回调

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): NPC 完成节点时调用
