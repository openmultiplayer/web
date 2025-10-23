---
title: NPC_IsStreamedIn
sidebar_label: NPC_IsStreamedIn
description: 检查 NPC 是否对特定玩家流加载。
tags: ["npc", "流加载"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 是否对特定玩家流加载。

| 名称     | 描述              |
| -------- | ----------------- |
| npcid    | NPC 的 ID         |
| playerid | 要检查的玩家的 ID |

## 返回值

如果 NPC 对玩家流加载则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknpc", true))
    {
        if (NPC_IsStreamedIn(0, playerid))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 对您可见");
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0 不可见");
        }
        return 1;
    }
    return 0;
}

public OnPlayerConnect(playerid)
{
    // 检查 NPC 0 是否对连接的玩家可见
    if (NPC_IsStreamedIn(0, playerid))
    {
        SendClientMessage(playerid, 0x00FFFFFF, "您可以看到 NPC 0");
    }

    return 1;
}
```

## 注意事项

- NPC 仅在玩家的流加载距离内才会流加载
- 在显示 NPC 相关信息前使用此函数检查可见性
- 流加载取决于距离和室内/虚拟世界匹配

## 相关函数

- [NPC_IsAnyStreamedIn](NPC_IsAnyStreamedIn): 检查是否有任何玩家可以看到 NPC
- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置

## 相关回调

_此函数不会触发任何特定的回调。_
