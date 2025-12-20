---
title: NPC_SetInterior
sidebar_label: NPC_SetInterior
description: 设置 NPC 的室内场景。
tags: ["npc", "室内场景"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 的室内场景。

| 参数       | 说明                |
| ---------- | ------------------- |
| npcid      | NPC 的 ID           |
| interiorid | 要设置的室内场景 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setinterior ", true, 13))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new interiorid = strval(cmdtext[13]);
        if (interiorid < 0 || interiorid > 255)
            return SendClientMessage(playerid, 0xFF0000FF, "室内场景 ID 必须在0到255之间。");

        NPC_SetInterior(npcid, interiorid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 室内场景设置为 %d", npcid, interiorid);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 室内场景 0 是主世界（室外）
- 确保为每个室内设置适当的坐标

## 相关函数

- [NPC_GetInterior](NPC_GetInterior): 获取 NPC 室内场景
- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): 设置 NPC 虚拟世界
- [NPC_GetVirtualWorld](NPC_GetVirtualWorld): 获取 NPC 虚拟世界
- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 出生时调用
