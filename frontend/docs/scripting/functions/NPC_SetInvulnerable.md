---
title: NPC_SetInvulnerable
sidebar_label: NPC_SetInvulnerable
description: Sets whether an NPC is invulnerable to damage.
tags: ["npc", "invulnerable", "damage", "protection"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets whether an NPC is invulnerable to damage.

| Name   | Description                                    |
| ------ | ---------------------------------------------- |
| npcid  | The ID of the NPC                             |
| toggle | true to make invulnerable, false to make vulnerable |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("InvincibleBot");
    NPC_Spawn(npcid);
    
    // Make the NPC invulnerable to all damage
    NPC_SetInvulnerable(npcid, true);
    
    printf("NPC %d is now invulnerable", npcid);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/godmode", true))
    {
        // Toggle god mode for NPC 0
        new bool:current = NPC_IsInvulnerable(0);
        NPC_SetInvulnerable(0, !current);
        
        new msg[64];
        format(msg, sizeof(msg), "NPC 0 god mode: %s", !current ? "ON" : "OFF");
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}

// Boss NPC that becomes vulnerable after certain conditions
public OnPlayerEnterCheckpoint(playerid)
{
    new npcid = GetClosestNPC(playerid);
    if (npcid != INVALID_NPC_ID)
    {
        // Make boss vulnerable during final phase
        if (GetPlayerScore(playerid) >= 1000)
        {
            NPC_SetInvulnerable(npcid, false);
            SendClientMessage(playerid, 0xFF0000FF, "The boss is now vulnerable!");
        }
    }
    return 1;
}
```

## Notes

- Invulnerable NPCs will not take any damage from weapons, explosions, or other damage sources
- This setting persists until changed or the NPC is destroyed
- Invulnerable NPCs can still be moved, teleported, or have their animations changed
- Use this for quest NPCs, important characters, or special game mechanics

## Related Functions

- [NPC_IsInvulnerable](NPC_IsInvulnerable): Check if an NPC is invulnerable
- [NPC_SetHealth](NPC_SetHealth): Set NPC health
- [NPC_GetHealth](NPC_GetHealth): Get NPC health
- [NPC_SetArmour](NPC_SetArmour): Set NPC armour

## Related Callbacks

- [OnNPCTakeDamage](OnNPCTakeDamage): Called when NPC takes damage (not called for invulnerable NPCs)
- [OnNPCDeath](OnNPCDeath): Called when NPC dies (invulnerable NPCs cannot die)