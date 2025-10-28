---
title: OnNPCWeaponStateChange
sidebar_label: OnNPCWeaponStateChange
description: 当 NPC 的武器状态改变时调用此回调。
tags: ["npc", "武器"]
---

<VersionWarnZH_CN name='回调' version='omp v1.1.0.changemelater' />

## 描述

当 NPC 的武器状态改变时（例如，重新装弹、弹药耗尽等）调用此回调。

| 参数     | 说明           |
| -------- | -------------- |
| npcid    | NPC 的 ID      |
| newstate | 新的武器状态   |
| oldstate | 之前的武器状态 |

## 示例

```c
public OnNPCWeaponStateChange(npcid, newstate, oldstate)
{
    printf("NPC %d 武器状态: %d -> %d", npcid, oldstate, newstate);

    if (newstate == WEAPONSTATE_NO_BULLETS)
    {
        // 给予更多弹药
        NPC_SetAmmo(npcid, 100);
    }

    return true;
}
```

## 注意事项

- 此回调基于 NPC 的弹药数量和武器动作自动触发
- 武器状态包括：无子弹、重新装弹、有更多子弹、最后一发子弹、未知

## 相关函数

以下函数可能有用，因为它们与此回调以某种方式相关。

- [NPC_GetWeaponState](../functions/NPC_GetWeaponState): 获取 NPC 的当前武器状态
- [NPC_GetAmmo](../functions/NPC_GetAmmo): 获取 NPC 的弹药数量
- [NPC_SetAmmo](../functions/NPC_SetAmmo): 设置 NPC 的弹药数量
- [NPC_GetAmmoInClip](../functions/NPC_GetAmmoInClip): 获取当前弹夹中的弹药
- [NPC_EnableReloading](../functions/NPC_EnableReloading): 启用/禁用自动重新装弹

## 相关回调

- [OnNPCWeaponShot](OnNPCWeaponShot): 当 NPC 开火时调用
