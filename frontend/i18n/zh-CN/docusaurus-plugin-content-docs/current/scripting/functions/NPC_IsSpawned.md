---
title: NPC_IsSpawned
sidebar_label: NPC_IsSpawned
description: 检查NPC是否已在游戏世界中生成
tags: ["npc", "生成"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 是否已在游戏世界中生成。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

若 NPC 已生成则返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkspawned", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:isSpawned = NPC_IsSpawned(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 已生成: %s", npcid, isSpawned ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 这与 [NPC_IsValid](NPC_IsValid) 不同，后者检查 NPC 是否存在

## 相关函数

- [NPC_Spawn](NPC_Spawn): 生成 NPC
- [NPC_Respawn](NPC_Respawn): 重新生成 NPC
- [NPC_IsValid](NPC_IsValid): 检查 NPC 是否有效
- [NPC_IsDead](NPC_IsDead): 检查 NPC 是否死亡

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): 当 NPC 生成时被调用
- [OnNPCRespawn](../callbacks/OnNPCRespawn): 当 NPC 重新生成时被调用
