---
title: OnNPCWeaponShot
sidebar_label: OnNPCWeaponShot
description: 当 NPC 发射武器时调用此回调。
tags: ["npc", "武器", "射击"]
---

<VersionWarnZH_CN name='回调' version='omp v1.1.0.changemelater' />

## 描述

当 NPC 发射武器时调用此回调。

| 名称     | 描述                     |
| -------- | ------------------------ |
| npcid    | 发射武器的 NPC 的 ID     |
| weaponid | 发射的武器 ID            |
| hittype  | 命中的实体类型（如果有） |
| hitid    | 命中的实体 ID（如果有）  |
| fX       | 子弹击中的 X 坐标        |
| fY       | 子弹击中的 Y 坐标        |
| fZ       | 子弹击中的 Z 坐标        |

## 返回值

返回 `false` 阻止射击被处理，或返回 `true` 允许射击。

## 示例

```c
public OnNPCWeaponShot(npcid, weaponid, hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    printf("NPC %d 使用武器 %d 向坐标 %.2f, %.2f, %.2f 射击", npcid, weaponid, fX, fY, fZ);

    switch(hittype)
    {
        case BULLET_HIT_TYPE_PLAYER:
        {
            printf("击中玩家 %d", hitid);
        }
        case BULLET_HIT_TYPE_VEHICLE:
        {
            printf("击中车辆 %d", hitid);
        }
    }

    return true;
}
```

## 注意事项

- NPC 每次射击都会调用此回调
- `hittype` 参数指示命中的内容（无、玩家、车辆、物体等）
- `hitid` 参数包含命中实体的 ID（玩家 ID、车辆 ID 等）
- 命中坐标显示子弹撞击的位置
- 返回 `false` 会阻止服务器处理此次射击

## 相关函数

以下函数可能有用，因为它们与此回调以某种方式相关。

- [NPC_AimAt](../functions/NPC_AimAt): 使 NPC 瞄准位置
- [NPC_AimAtPlayer](../functions/NPC_AimAtPlayer): 使 NPC 瞄准玩家
- [NPC_StopAim](../functions/NPC_StopAim): 停止 NPC 瞄准
- [NPC_SetWeapon](../functions/NPC_SetWeapon): 设置 NPC 的武器
- [NPC_GetAmmo](../functions/NPC_GetAmmo): 获取 NPC 的弹药数量

## 相关回调

- [OnNPCGiveDamage](OnNPCGiveDamage): 当 NPC 对玩家造成伤害时调用
- [OnPlayerWeaponShot](OnPlayerWeaponShot): 当玩家发射武器时调用
