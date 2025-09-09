---
title: NPC_SetPos
sidebar_label: NPC_SetPos
description: Sets the position of an NPC.
tags: ["npc", "position"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the position of an NPC instantly without movement animation.

| Name    | Description              |
| ------- | ------------------------ |
| npcid   | The ID of the NPC.       |
| Float:x | The X coordinate.        |
| Float:y | The Y coordinate.        |
| Float:z | The Z coordinate.        |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnGameModeInit()
{
    new const npcid = NPC_Create("TeleportBot");
    NPC_Spawn(npcid);
    
    // Set NPC position instantly
    NPC_SetPos(npcid, 1958.33, 1343.12, 15.36);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/teleportnpc", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        
        // Teleport NPC 0 to player location
        NPC_SetPos(0, x + 2.0, y, z);
        
        SendClientMessage(playerid, 0x00FF00FF, "NPC teleported to you!");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/npcgotower", true))
    {
        // Move NPC to a specific landmark
        NPC_SetPos(0, 1544.6, -1353.8, 329.5); // Big Smoke's house
        
        SendClientMessage(playerid, 0xFFFFFFFF, "NPC moved to Big Smoke's house");
        return 1;
    }
    return 0;
}

CreateNPCFormation(Float:leaderX, Float:leaderY, Float:leaderZ, const Float:formation[][2], formationSize = sizeof(formation))
{
    new
        name[MAX_PLAYER_NAME + 1],
        npcid,
        Float:offsetX,
        Float:offsetY;

    for (new i = 0; i < formationSize; i++)
    {
        format(name, sizeof(name), "Unit_%d", i);
        
        npcid = NPC_Create(name);
        NPC_Spawn(npcid);
        
        // Position based on formation array
        offsetX = formation[i][0];
        offsetY = formation[i][1];
        
        NPC_SetPos(npcid, leaderX + offsetX, leaderY + offsetY, leaderZ);
    }
}

forward ResetNPCPositions();
public ResetNPCPositions()
{
    // Reset NPC 0 to a specific position
    NPC_SetPos(0, 1958.33, 1343.12, 15.36);
    printf("NPC 0 position reset");
}
```

## Notes

:::warning

- This function teleports the NPC instantly without animation
- Any current movement is stopped when setting position
- Use `NPC_Move` if you want the NPC to walk to a position
- Position coordinates are in San Andreas world units
- Make sure the Z coordinate is above ground level

:::

## Related Functions

- [NPC_GetPos](NPC_GetPos): Get NPC position.
- [NPC_Move](NPC_Move): Move NPC to position with animation.
- [NPC_SetRot](NPC_SetRot): Set NPC rotation.
- [NPC_SetFacingAngle](NPC_SetFacingAngle): Set NPC facing direction.

## Related Callbacks

- [OnNPCSpawn](OnNPCSpawn): Called when NPC spawns.
