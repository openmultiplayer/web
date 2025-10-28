---
title: NPC_Respawn
sidebar_label: NPC_Respawn
description: 让 NPC 重生到其出生位置，重置其状态。
tags: ["npc", "出生", "重生"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

让 NPC 重生到其出生位置，重置其状态。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new const npcid = NPC_Create("Respawner");
    NPC_Spawn(npcid);

    // 每30秒重生一次
    SetTimerEx("RespawnNPC", 30000, true, "i", npcid);

    return 1;
}

forward RespawnNPC(npcid);
public RespawnNPC(npcid)
{
    if (NPC_Respawn(npcid))
    {
        printf("NPC %d 已重生", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/respawnnpc", true))
    {
        // 重生 NPC 0
        if (NPC_Respawn(0))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 已重生");
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
- 在 NPC 死亡或卡住时使用此函数重置。

:::

## 相关函数

- [NPC_Spawn](NPC_Spawn): NPC 的初始出生。
- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置。
- [NPC_GetHealth](NPC_GetHealth): 获取 NPC 生命值。
- [NPC_IsDead](NPC_IsDead): 检查 NPC 是否死亡。

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 出生时调用。
- [OnNPCRespawn](../callbacks/OnNPCRespawn): NPC 重生时调用。
