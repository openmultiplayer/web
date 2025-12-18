---
title: NPC_SetWeaponReloadTime
sidebar_label: NPC_SetWeaponReloadTime
description: 设置 NPC 武器的重新装填时间。
tags: ["npc", "武器", "换弹", "时间"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 特定武器的重新装填时间。

| 参数     | 说明                        |
| -------- | --------------------------- |
| npcid    | NPC 的 ID                   |
| weaponid | 要设置重新装填时间的武器 ID |
| time     | 重新装填时间（毫秒）        |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponreloadtime ", true, 21))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new weapon = NPC_GetWeapon(npcid);
        new reloadtime = strval(cmdtext[21]);

        NPC_SetWeaponReloadTime(npcid, WEAPON:weapon, reloadtime);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 武器 %d 换弹时间设置为 %d 毫秒", npcid, weapon, reloadtime);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 重新装填时间以毫秒为单位
- 使用 NPC_GetWeaponReloadTime 检查当前重新装填时间

## 相关函数

- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): 获取重新装填时间
- [NPC_GetWeaponActualReloadTime](NPC_GetWeaponActualReloadTime): 获取实际重新装填时间
- [NPC_IsReloading](NPC_IsReloading): 检查是否正在重新装填
- [NPC_EnableReloading](NPC_EnableReloading): 启用/禁用重新装填

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
