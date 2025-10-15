---
title: OnNPCCreate
sidebar_label: OnNPCCreate
description: This callback is called when an NPC is successfully created.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when an NPC is successfully created and added to the server.

| Name  | Description                    |
| ----- | ------------------------------ |
| npcid | The ID of the NPC that was created |

## Examples

```c
public OnNPCCreate(npcid)
{
    printf("NPC %d has been created", npcid);
    
    // Set initial properties
    NPC_SetSkin(npcid, 23);
    NPC_SetPos(npcid, 1958.33, 1343.12, 15.36);
    
    return true;
}
```

## Notes

- This callback is called immediately after the NPC is created but before it's spawned
- The NPC will need to be spawned using `NPC_Spawn` to become visible in the game world

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_Create](../functions/NPC_Create): Create a new NPC
- [NPC_Destroy](../functions/NPC_Destroy): Destroy an existing NPC
- [NPC_Spawn](../functions/NPC_Spawn): Spawn the NPC in the game world

## Related Callbacks

- [OnNPCDestroy](OnNPCDestroy): Called when an NPC is destroyed
- [OnNPCSpawn](OnNPCSpawn): Called when an NPC is spawned
- [OnNPCConnect](OnNPCConnect): Called when an NPC connects to the server
