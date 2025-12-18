---
title: NPC_GetWeapon
sidebar_label: NPC_GetWeapon
description: 获取 NPC 当前持有的武器。
tags: ["npc", "武器"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 当前持有的武器。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 当前持有的武器 ID。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweapon", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new weapon = NPC_GetWeapon(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 武器: %d", npcid, weapon);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 若 NPC 没有武器则返回 0（拳头）
- 武器 ID 与玩家武器 ID 相同

## 相关函数

- [NPC_SetWeapon](NPC_SetWeapon): 设置 NPC 武器
- [NPC_GetAmmo](NPC_GetAmmo): 获取 NPC 弹药
- [NPC_SetAmmo](NPC_SetAmmo): 设置 NPC 弹药
- [NPC_RemoveWeapon](NPC_RemoveWeapon): 移除 NPC 武器

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
