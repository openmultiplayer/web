---
title: NPC_GetWeaponShootTime
sidebar_label: NPC_GetWeaponShootTime
description: 获取 NPC 武器的射击时间。
tags: ["npc", "武器"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 武器的射击时间。

| 参数     | 说明                    |
| -------- | ----------------------- |
| npcid    | NPC 的 ID               |
| weaponid | 要获取射击时间的武器 ID |

## 返回值

返回指定武器的射击时间（毫秒）。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponshoottime", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new weapon = NPC_GetWeapon(npcid);
        new shoottime = NPC_GetWeaponShootTime(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 武器 %d 射击时间: %d 毫秒", npcid, weapon, shoottime);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 射击时间影响射击之间的延迟
- 数值越低意味着射击速率越快
- 不同武器有不同的默认射击时间

## 相关函数

- [NPC_SetWeaponShootTime](NPC_SetWeaponShootTime): 设置射击时间
- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 当前武器
- [NPC_Shoot](NPC_Shoot): 让 NPC 射击
- [NPC_IsShooting](NPC_IsShooting): 检查 NPC 是否正在射击

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
