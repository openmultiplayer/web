---
title: NPC_IsReloading
sidebar_label: NPC_IsReloading
description: Checks if an NPC is currently reloading their weapon.
tags: ["npc", "weapon", "reloading"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is currently reloading their weapon.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is reloading, `false` otherwise.

## Examples

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

## Notes

- Returns true only during the actual reload animation
- Reloading is automatic when ammo in clip runs out
- Use NPC_EnableReloading to control reload behavior

## Related Functions

- [NPC_EnableReloading](NPC_EnableReloading): Enable/disable reloading
- [NPC_Reload](NPC_Reload): Force NPC to reload
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Get ammo in clip
- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): Get reload time

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC shoots
