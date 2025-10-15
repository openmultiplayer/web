---
title: NPC_GetKeys
sidebar_label: NPC_GetKeys
description: Gets the current key states of an NPC.
tags: ["npc", "keys"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the current key states of an NPC.

| Name          | Description                                    |
| ------------- | ---------------------------------------------- |
| npcid         | The ID of the NPC                             |
| &upAndDown    | Variable to store up/down key states         |
| &leftAndRight | Variable to store left/right key states      |
| &keys         | Variable to store other key states           |

## Returns

Returns `true` if the keys were retrieved successfully, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("KeyBot");
    NPC_Spawn(npcid);
    
    // Set some keys
    NPC_SetKeys(npcid, KEY_UP, KEY_LEFT, KEY_FIRE);
    
    // Get the keys back
    new upDown, leftDown, keys;
    NPC_GetKeys(npcid, upDown, leftDown, keys);
    
    printf("NPC %d keys - UpDown: %d, LeftDown: %d, Keys: %d", 
        npcid, upDown, leftDown, keys);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkkeys", true))
    {
        new upDown, leftDown, keys;
        NPC_GetKeys(0, upDown, leftDown, keys);
        
        new keyInfo[128] = "NPC 0 Keys:";
        
        if (upDown & KEY_UP) strcat(keyInfo, " UP");
        if (upDown & KEY_DOWN) strcat(keyInfo, " DOWN");
        if (leftDown & KEY_LEFT) strcat(keyInfo, " LEFT");
        if (leftDown & KEY_RIGHT) strcat(keyInfo, " RIGHT");
        if (keys & KEY_FIRE) strcat(keyInfo, " FIRE");
        
        SendClientMessage(playerid, 0xFFFFFFFF, keyInfo);
        return 1;
    }
    return 0;
}
```

## Notes

- All parameters except npcid are passed by reference and will be modified
- Key states are stored as bit flags
- Use bitwise operations to check individual keys
- This reflects the NPC's current input state

## Related Functions

- [NPC_SetKeys](NPC_SetKeys): Set NPC key states
- [NPC_Move](NPC_Move): Make NPC move to position
- [NPC_StopMove](NPC_StopMove): Stop NPC movement

## Related Callbacks

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes movement
