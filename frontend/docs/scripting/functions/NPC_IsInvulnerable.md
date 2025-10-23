---
title: NPC_IsInvulnerable
sidebar_label: NPC_IsInvulnerable
description: Checks if an NPC is invulnerable to damage.
tags: ["npc", "invulnerable", "damage", "protection"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is invulnerable to damage.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns true if the NPC is invulnerable, false otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("TestBot");
    NPC_Spawn(npcid);

    // Check initial invulnerability status
    if (NPC_IsInvulnerable(npcid))
    {
        printf("NPC %d is invulnerable", npcid);
    }
    else
    {
        printf("NPC %d can take damage", npcid);
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkgod", true))
    {
        if (NPC_IsInvulnerable(0))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 is invulnerable");
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0 can take damage");
        }
        return 1;
    }
    return 0;
            new Float:armour = NPC_GetArmour(npcs[i]);
            new bool:invulnerable = NPC_IsInvulnerable(npcs[i]);

            new status[64];
            format(status, sizeof(status), "NPC %d: HP:%.1f ARM:%.1f %s",
                   npcs[i], health, armour, invulnerable ? "[INVULNERABLE]" : "[VULNERABLE]");

            SendClientMessage(playerid, 0xCCCCCCFF, status);
        }

        return 1;
    }
    return 0;
}

// Smart damage system that checks invulnerability
stock bool:CanDamageNPC(npcid)
{
    if (!NPC_IsValid(npcid))
        return false;

    if (NPC_IsDead(npcid))
        return false;

    if (NPC_IsInvulnerable(npcid))
    {
        printf("Cannot damage NPC %d - invulnerable", npcid);
        return false;
    }

    return true;
}

// Boss fight mechanics
public OnPlayerWeaponShot(playerid, weaponid, hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    if (hittype == BULLET_HIT_TYPE_PLAYER)
    {
        new npcid = hitid; // Assuming hitid is NPC ID

        if (NPC_IsValid(npcid) && NPC_IsInvulnerable(npcid))
        {
            // Show immunity effect
            SendClientMessage(playerid, 0xFF0000FF, "Target is immune to damage!");

            // Play immunity sound or effect here
            PlayerPlaySound(playerid, 1130, 0.0, 0.0, 0.0);
            return 0; // Block damage
        }
    }
    return 1;
}
```

## Notes

- Returns the invulnerability status set by `NPC_SetInvulnerable`
- NPCs are vulnerable by default when created
- This function is useful for combat systems and game mechanics
- Always check this before applying custom damage calculations

## Related Functions

- [NPC_SetInvulnerable](NPC_SetInvulnerable): Set NPC invulnerability
- [NPC_IsValid](NPC_IsValid): Check if NPC ID is valid
- [NPC_IsDead](NPC_IsDead): Check if NPC is dead
- [NPC_GetHealth](NPC_GetHealth): Get NPC health

## Related Callbacks

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Called when NPC takes damage (not called for invulnerable NPCs)
- [OnNPCDeath](../callbacks/OnNPCDeath): Called when NPC dies (invulnerable NPCs cannot die)
