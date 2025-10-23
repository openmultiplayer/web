---
title: NPC_SetKeys
sidebar_label: NPC_SetKeys
description: Sets the key states for an NPC.
tags: ["npc", "keys", "input"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the key states for an NPC, simulating key presses.

| Name         | Description                |
| ------------ | -------------------------- |
| npcid        | The ID of the NPC          |
| upAndDown    | Up/down key state          |
| leftAndRight | Left/right key state       |
| keys         | The key combination to set |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, -1);
    NPC_PutInVehicle(npcid, vehicleid, 0);

    // Make NPC move forward
    NPC_SetKeys(npcid, KEY_UP, 0, 0);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcstop", true))
    {
        // Clear all keys for NPC 0
        NPC_SetKeys(0, 0, 0, 0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 movement stopped");
        return 1;
    }
    return 0;
}
```

## Notes

- Keys affect NPC behavior in vehicles and on foot
- Common keys: KEY_UP, KEY_DOWN, KEY_LEFT, KEY_RIGHT
- Use NPC_GetKeys to check current key states
- Key states persist until changed or NPC state resets

## Related Functions

- [NPC_GetKeys](NPC_GetKeys): Get NPC's key states
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [NPC_Move](NPC_Move): Make NPC move to position
- [NPC_StopMove](NPC_StopMove): Stop NPC movement

## Related Callbacks

_No specific callbacks are triggered by this function._
