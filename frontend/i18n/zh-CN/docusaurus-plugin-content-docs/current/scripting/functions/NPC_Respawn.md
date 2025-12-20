---
title: NPC_Respawn
sidebar_label: NPC_Respawn
description: 让 NPC 重生到其出生位置，重置其状态。
tags: ["npc", "出生", "重生"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

让 NPC 重生到其出生位置，重置其状态。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/respawnnpc", true))
    {
        new npcid = PlayerNPC[playerid];

        if (!NPC_IsValid(npcid))
        {
            SendClientMessage(playerid, 0xFF0000FF, "你没有有效的NPC可重生。");
            return 1;
        }

        if (NPC_Respawn(npcid))
        {
            SendClientMessage(playerid, 0x00FF00FF, "你的 NPC (ID %d) 已重生。", npcid);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "你的 NPC (ID %d) 重生失败。", npcid);
        }

        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 重置 NPC 生命值、位置和状态。
- NPC 返回其原始出生坐标。
- 所有当前活动（移动、战斗）都会停止。

:::

## 相关函数

- [NPC_Spawn](NPC_Spawn): NPC 的初始出生。
- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置。
- [NPC_GetHealth](NPC_GetHealth): 获取 NPC 生命值。
- [NPC_IsDead](NPC_IsDead): 检查 NPC 是否死亡。

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 出生时调用。
- [OnNPCRespawn](../callbacks/OnNPCRespawn): NPC 重生时调用。
