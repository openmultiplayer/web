---
title: NPC_StopPlayingNode
sidebar_label: NPC_StopPlayingNode
description: 停止 NPC 的节点播放。
tags: ["npc", "节点"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

停止 NPC 当前节点的播放。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 成功停止则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcstopnode", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:success = NPC_StopPlayingNode(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 停止节点：%s", npcid, success ? "成功" : "失败");
        return 1;
    }
    return 0;
}
```

## 注意事项

- NPC 将在节点中的当前位置停止
- 如果 NPC 没有在播放节点，此函数返回`false`
- 节点保持打开状态，可以被其他 NPC 使用
- 使用 `NPC_IsPlayingNode` 检查 NPC 是否在播放节点

## 相关函数

- [NPC_PlayNode](NPC_PlayNode): 让 NPC 播放节点
- [NPC_IsPlayingNode](NPC_IsPlayingNode): 检查 NPC 是否在播放节点
- [NPC_PausePlayingNode](NPC_PausePlayingNode): 暂停节点播放
- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): 恢复节点播放

## 相关回调

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): NPC 完成节点时调用
