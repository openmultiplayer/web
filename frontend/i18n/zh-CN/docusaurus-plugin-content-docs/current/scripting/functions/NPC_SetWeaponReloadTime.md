---
title: NPC_SetWeaponReloadTime
sidebar_label: NPC_SetWeaponReloadTime
description: 设置 NPC 武器的重新装填时间。
tags: ["npc", "武器", "换弹", "时间"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 特定武器的重新装填时间。

| 名称     | 描述                        |
| -------- | --------------------------- |
| npcid    | NPC 的 ID                   |
| weaponid | 要设置重新装填时间的武器 ID |
| time     | 重新装填时间（毫秒）        |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("QuickReloader");
    NPC_Spawn(npcid);
    NPC_GiveWeapon(npcid, WEAPON_M4, 200); // M4 带 200 发弹药

    // 设置快速重新装填（500毫秒）
    NPC_SetWeaponReloadTime(npcid, 500);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/fastreload", true))
    {
        // 为 NPC 0 设置快速重新装填
        NPC_SetWeaponReloadTime(0, 100);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 拥有闪电般的重新装填速度");
        return 1;
    }

    if (!strcmp(cmdtext, "/slowreload", true))
    {
        // 为 NPC 0 设置慢速重新装填
        NPC_SetWeaponReloadTime(0, 5000);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 重新装填速度很慢");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 重新装填时间以毫秒为单位
- 较低的值 = 更快的重新装填
- 使用 NPC_GetWeaponReloadTime 检查当前重新装填时间
- 影响战斗效果和射击频率

## 相关函数

- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): 获取重新装填时间
- [NPC_GetWeaponActualReloadTime](NPC_GetWeaponActualReloadTime): 获取实际重新装填时间
- [NPC_IsReloading](NPC_IsReloading): 检查是否正在重新装填
- [NPC_EnableReloading](NPC_EnableReloading): 启用/禁用重新装填

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开枪时调用
