---
title: NPC_GetSkin
sidebar_label: NPC_GetSkin
description: 获取NPC的皮肤/模型ID
tags: ["npc", "皮肤", "模型"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 的皮肤/模型 ID。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 的皮肤/模型 ID，若无效则返回-1。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkskin", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new skinid = NPC_GetSkin(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 的皮肤: %d", npcid, skinid);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 返回 NPC 当前使用的皮肤/模型
- 使用 [NPC_SetSkin](NPC_SetSkin) 来更改 NPC 的皮肤

## 相关函数

- [NPC_SetSkin](NPC_SetSkin): 设置 NPC 皮肤/模型
- [NPC_IsValid](NPC_IsValid): 检查 NPC 是否有效
- [NPC_IsSpawned](NPC_IsSpawned): 检查 NPC 是否已生成

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): 当 NPC 生成时被调用
