---
title: NPC_Create
sidebar_label: NPC_Create
description: Creates a new NPC.
tags: ["npc"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Creates a new NPC.

| Name         | Description                              |
| ------------ | ---------------------------------------- |
| const name[] | The name of the NPC (max 24 characters). |

## Returns

Returns the ID of the created NPC, or `INVALID_NPC_ID` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/createnpc", true))
    {
        new name[24];
        format(name, sizeof name, "Bot_%d", g_NPCCount++);

        new npcid = NPC_Create(name);
        if (NPC_IsValid(npcid))
        {
            new Float:x, Float:y, Float:z;
            GetPlayerPos(playerid, x, y, z);

            NPC_Spawn(npcid);
            NPC_SetPos(npcid, x + 3.0, y, z);
            NPC_SetWeapon(npcid, WEAPON_M4);
            NPC_SetAmmo(npcid, 500);

            PlayerNPC[playerid] = npcid;
            SendClientMessage(playerid, 0x00FF00FF, "NPC %s (ID %d) spawned near you!", name, npcid);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to create NPC!");
        }
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

- The NPC will not be spawned automatically. Use [NPC_Spawn](NPC_Spawn) to spawn it.
- NPC names must follow the same rules as player names.
- Maximum name length is 24 characters.

:::

## Related Functions

- [NPC_Destroy](NPC_Destroy): Destroys an NPC.
- [NPC_Spawn](NPC_Spawn): Spawns an NPC.
- [NPC_IsValid](NPC_IsValid): Checks if an NPC ID is valid.

## Related Callbacks

- [OnNPCCreate](../callbacks/OnNPCCreate): Called when an NPC is created.
