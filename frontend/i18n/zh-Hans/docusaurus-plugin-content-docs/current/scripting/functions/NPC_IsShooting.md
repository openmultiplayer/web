---
title: NPC_IsShooting
sidebar_label: NPC_IsShooting
description: 检查 NPC 是否正在射击。
tags: ["npc", "武器", "射击"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 是否正在射击。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在射击则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Gunner");
    NPC_Spawn(npcid);
    NPC_GiveWeapon(npcid, WEAPON_M4, 100); // M4 with 100 ammo

    // Make NPC aim and shoot at a position
    NPC_AimAt(npcid, 2000.0, 1500.0, 15.0, true, 500);

    SetTimer("CheckShooting", 500, true);

    return 1;
}

public CheckShooting()
{
    if (NPC_IsShooting(0))
    {
        printf("NPC 0 is currently shooting");
    }
    else
    {
        printf("NPC 0 is not shooting");
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkshoot", true))
    {
        if (NPC_IsShooting(0))
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 is shooting");
        }
        else
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 is not shooting");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅在实际射击动作期间返回 true
- NPC 必须有武器和弹药才能射击
- 使用此函数检测活跃的战斗情况

## 相关函数

- [NPC_Shoot](NPC_Shoot): 让 NPC 射击
- [NPC_AimAt](NPC_AimAt): 让 NPC 瞄准并射击
- [NPC_StopShoot](NPC_StopShoot): 停止 NPC 射击
- [NPC_IsAiming](NPC_IsAiming): 检查是否正在瞄准

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 射击时调用
- [../callbacks/OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): NPC 对玩家造成伤害时调用
