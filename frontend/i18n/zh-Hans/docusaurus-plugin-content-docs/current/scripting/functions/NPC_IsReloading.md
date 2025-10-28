---
title: NPC_IsReloading
sidebar_label: NPC_IsReloading
description: 检查 NPC 是否正在换弹。
tags: ["npc", "武器", "换弹"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 是否正在换弹。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在换弹则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Shooter");
    NPC_Spawn(npcid);
    NPC_GiveWeapon(npcid, WEAPON_DEAGLE, 1); // Desert Eagle with 1 round

    // Force reload after shooting
    NPC_Shoot(npcid);

    SetTimerEx("CheckReloading", 1000, false, "i", npcid);

    return 1;
}

forward CheckReloading(npcid);
public CheckReloading(npcid)
{
    if (NPC_IsReloading(npcid))
    {
        printf("NPC %d is reloading their weapon", npcid);
    }
    else
    {
        printf("NPC %d is not reloading", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkreload", true))
    {
        if (NPC_IsReloading(0))
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0 is reloading");
        }
        else
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 is not reloading");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅在实际换弹动画期间返回 true
- 弹夹中弹药耗尽时自动换弹
- 使用 NPC_EnableReloading 控制换弹行为

## 相关函数

- [NPC_EnableReloading](NPC_EnableReloading): 启用/禁用换弹
- [NPC_Reload](NPC_Reload): 强制 NPC 换弹
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): 获取弹夹中的弹药
- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): 获取换弹时间

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
