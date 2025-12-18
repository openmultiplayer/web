---
title: NPC_IsStreamedIn
sidebar_label: NPC_IsStreamedIn
description: 检查 NPC 是否对特定玩家流加载。
tags: ["npc", "流加载"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 是否对特定玩家流加载。

| 参数     | 说明              |
| -------- | ----------------- |
| npcid    | NPC 的 ID         |
| playerid | 要检查的玩家的 ID |

## 返回值

如果 NPC 对玩家流加载则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkstreamedin", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:isStreamedIn = NPC_IsStreamedIn(npcid, playerid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 是否已为你流加载: %s", npcid, isStreamedIn ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- NPC 仅在玩家的流加载距离内才会流加载
- 流加载取决于距离和室内/虚拟世界匹配

## 相关函数

- [NPC_IsAnyStreamedIn](NPC_IsAnyStreamedIn): 检查是否有任何玩家可以看到 NPC
- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置

## 相关回调

_此函数不会触发任何特定的回调。_
