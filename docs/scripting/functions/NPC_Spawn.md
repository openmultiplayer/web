---
title: "NPC_Spawn | open.mp"
description: "Spawns an NPC into the game world."
canonical: https://open.mp/docs/scripting/functions/NPC_Spawn
language: en
---

# NPC\_Spawn

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Spawns an NPC into the game world, making it visible and active.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC. |

## Returns

Returns `true` if the NPC was spawned successfully, `false` otherwise.

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

note

-   The NPC must be created with [NPC\_Create](https://open.mp/docs/scripting/functions/NPC_Create) before spawning.

## Related Functions

-   [NPC\_Create](https://open.mp/docs/scripting/functions/NPC_Create): Create a new NPC.
-   [NPC\_IsValid](https://open.mp/docs/scripting/functions/NPC_IsValid): Check if NPC ID is valid.
-   [NPC\_SetPos](https://open.mp/docs/scripting/functions/NPC_SetPos): Set NPC position.
-   [NPC\_Destroy](https://open.mp/docs/scripting/functions/NPC_Destroy): Destroy an NPC.

## Related Callbacks

-   [OnNPCSpawn](https://open.mp/docs/scripting/callbacks/OnNPCSpawn): Called when NPC spawns.
-   [OnNPCCreate](https://open.mp/docs/scripting/callbacks/OnNPCCreate): Called when NPC is created.
