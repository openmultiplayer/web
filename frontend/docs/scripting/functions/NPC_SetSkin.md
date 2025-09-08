---
title: NPC_SetSkin
sidebar_label: NPC_SetSkin
description: Sets an NPC's skin model.
tags: ["npc", "skin", "model"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets an NPC's skin model to change their appearance.

| Name   | Description                    |
| ------ | ------------------------------ |
| npcid  | The ID of the NPC             |
| skinid | The skin model ID to set       |

## Returns

Returns `true` if the skin was set successfully, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Cop");
    NPC_Spawn(npcid);
    
    // Set police officer skin
    NPC_SetSkin(npcid, 280);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/changeskin", true))
    {
        // Change NPC 0 to army skin
        NPC_SetSkin(0, 287);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 skin changed to army");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/copskin", true))
    {
        new copSkins[] = {280, 281, 282, 283, 284, 285};
        new skinid = copSkins[random(sizeof(copSkins))];
        NPC_SetSkin(0, skinid);
        
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 is now a police officer");
        return 1;
    }
    return 0;
}
```

## Notes

- Skin IDs range from 0-311 (standard SA-MP skins)
- Invalid skin IDs may cause visual glitches
- Skin change is instant without animation
- Use GetPlayerSkin on players for reference skin IDs

## Related Functions

- [NPC_GetSkin](NPC_GetSkin): Get NPC's current skin
- [NPC_Spawn](NPC_Spawn): Spawn NPC with default skin
- [NPC_Create](NPC_Create): Create NPC
- [IsValidSkin](IsValidSkin): Check if skin ID is valid

## Related Callbacks

- [OnNPCSpawn](OnNPCSpawn): Called when NPC spawns
