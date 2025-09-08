---
title: NPC_MoveToPlayer
sidebar_label: NPC_MoveToPlayer
description: Makes an NPC move toward and follow a player.
tags: ["npc", "movement", "player", "follow"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Makes an NPC move toward and follow a player.

| Name              | Description                                                          |
| ----------------- | -------------------------------------------------------------------- |
| npcid            | The ID of the NPC                                                    |
| playerid         | The ID of the player to move toward                                  |
| moveType         | Movement type (default: NPC_MOVE_TYPE_JOG)                         |
| moveSpeed        | Movement speed (default: NPC_MOVE_SPEED_AUTO)                       |
| stopRange        | Distance to stop from player (default: 0.2)                        |
| updateDelayMS | Position check update delay in milliseconds (default: 500)      |
| autoRestart      | Whether to automatically restart following (default: false)         |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("FollowerBot");
    NPC_Spawn(npcid);
    
    // Make NPC follow player ID 0 with default settings
    NPC_MoveToPlayer(npcid, 0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/followme", true))
    {
        new npcid = NPC_Create("Follower");
        NPC_Spawn(npcid);
        
        // Follow with custom settings
        NPC_MoveToPlayer(npcid, playerid, NPC_MOVE_TYPE_JOG, 
                        NPC_MOVE_SPEED_AUTO, 2.0, 300, true);
        
        SendClientMessage(playerid, 0x00FF00FF, "NPC is now following you");
        return 1;
    }
    return 0;
}
```

## Notes

- NPCs will continuously follow the target player until stopped
- The `updateDelayMS` parameter controls how often the NPC updates its target position
- Lower `updateDelayMS` values provide smoother following but use more resources
- The `autoRestart` parameter determines if following resumes after interruptions
- NPCs will path-find around obstacles when possible
- Following stops when the target player disconnects

## Related Functions

- [NPC_Move](NPC_Move): Move NPC to a specific position
- [NPC_StopMove](NPC_StopMove): Stop NPC movement
- [NPC_IsMoving](NPC_IsMoving): Check if NPC is moving
- [NPC_MoveByPath](NPC_MoveByPath): Move NPC along a predefined path

## Related Callbacks

- [OnNPCFinishMove](OnNPCFinishMove): Called when NPC reaches target (not called for continuous following)