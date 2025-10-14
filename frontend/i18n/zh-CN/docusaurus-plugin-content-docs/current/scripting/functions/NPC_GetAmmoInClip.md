---
title: NPC_GetAmmoInClip
sidebar_label: NPC_GetAmmoInClip
description: 获取 NPC 武器当前弹夹中的弹药数量。
tags: ["npc", "武器", "子弹"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 武器当前弹夹中的弹药数量。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 当前武器弹夹中的弹药数量。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Gunner");
    NPC_Spawn(npcid);

    NPC_SetWeapon(npcid, WEAPON_M4);
    NPC_SetAmmo(npcid, 300); // 给予 300 发弹药
    NPC_SetAmmoInClip(npcid, 50); // 设置弹夹中 50 发弹药

    new clipAmmo = NPC_GetAmmoInClip(npcid);
    new totalAmmo = NPC_GetAmmo(npcid);

    printf("NPC %d: 弹夹中 %d 发，总计 %d 发", npcid, clipAmmo, totalAmmo);

    return 1;
}

forward CheckNPCAmmo();
public CheckNPCAmmo()
{
    new clipAmmo = NPC_GetAmmoInClip(0);

    if (clipAmmo <= 5)
    {
        printf("NPC 0 弹夹弹药不足: %d", clipAmmo);
    }
}
```

## 注意事项

- 返回当前装填在武器弹匣/弹夹中的弹药
- 这与包括备用弹药的总弹药不同
- 当弹夹为空时，NPC 将需要重新装弹（如果启用）
- 不同武器有不同的弹夹容量

## 相关函数

- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): 设置弹夹中的弹药
- [NPC_GetAmmo](NPC_GetAmmo): 获取总弹药
- [NPC_SetAmmo](NPC_SetAmmo): 设置总弹药
- [NPC_IsReloading](NPC_IsReloading): 检查 NPC 是否正在重新装弹

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): 当 NPC 发射武器时调用
