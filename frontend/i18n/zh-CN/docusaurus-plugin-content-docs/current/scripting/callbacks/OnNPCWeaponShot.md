---
title: OnNPCWeaponShot
sidebar_label: OnNPCWeaponShot
description: 当 NPC 开火时调用此回调。
tags: ["npc", "武器", "射击"]
---

<VersionWarnZH_CN name='回调' version='omp v1.5.8.3079' />

## 描述

当 NPC 开火时调用此回调。

| 参数                    | 说明                     |
| ----------------------- | ------------------------ |
| npcid                   | 开火的 NPC 的 ID         |
| WEAPON:weaponid         | 开火的武器 ID            |
| BULLET_HIT_TYPE:hittype | 命中的实体类型（如果有） |
| hitid                   | 命中的实体 ID（如果有）  |
| Float:fX                | 子弹击中的 X 坐标        |
| Float:fY                | 子弹击中的 Y 坐标        |
| Float:fZ                | 子弹击中的 Z 坐标        |

## 返回值

返回 `false` 阻止射击被处理，或返回 `true` 允许射击。

## 示例

```c
public OnNPCWeaponShot(npcid, WEAPON:weaponid, BULLET_HIT_TYPE:hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    // 仅通知追踪此 NPC 的玩家
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            static hitTypeNames[5][32] = {
                "无",
                "玩家",
                "车辆",
                "物体",
                "玩家物体"
            };

            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 使用武器 %d 射击 %s %d（%.2f, %.2f, %.2f）",
                npcid, _:weaponid, hitTypeNames[_:hittype], hitid, fX, fY, fZ);
        }
    }
    return 1;
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
- [OnPlayerWeaponShot](OnPlayerWeaponShot): 当玩家开火时调用
