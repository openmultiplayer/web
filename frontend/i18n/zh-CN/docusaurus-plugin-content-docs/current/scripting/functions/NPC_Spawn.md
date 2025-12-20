---
title: NPC_Spawn
sidebar_label: NPC_Spawn
description: 将 NPC 生成到游戏世界中。
tags: ["npc"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

生成 NPC 到游戏世界中，使其可见并活跃。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 成功生成返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/createnpc", true))
    {
        new name[24];
        format(name, sizeof name, "Bot_%d", g_NPCCount++);

        new npcid = NPC_Create(name);
        if (NPC_IsValid(npcid))
        {
            new Float:x, Float:y, Float:z;
            GetPlayerPos(playerid, x, y, z);

            NPC_Spawn(npcid);
            NPC_SetPos(npcid, x + 3.0, y, z);
            NPC_SetWeapon(npcid, WEAPON_M4);
            NPC_SetAmmo(npcid, 500);

            PlayerNPC[playerid] = npcid;
            SendClientMessage(playerid, 0x00FF00FF, "NPC %s (ID %d) 已在你附近生成！", name, npcid);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "创建NPC失败！");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- NPC 在生成前必须通过 [NPC_Create](NPC_Create) 创建。

:::

## 相关函数

- [NPC_Create](NPC_Create): 创建新 NPC
- [NPC_IsValid](NPC_IsValid): 检查 NPC ID 是否有效
- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置
- [NPC_Destroy](NPC_Destroy): 销毁 NPC

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 生成时调用
- [OnNPCCreate](../callbacks/OnNPCCreate): NPC 创建时调用
