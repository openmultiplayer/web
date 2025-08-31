---
title: OnNPCFinishMovePath
sidebar_label: OnNPCFinishMovePath
description: This callback is called when a NPC finishes moving along a predefined path.
tags: ["npc", "movement", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when a NPC finishes moving along a predefined path.

| Name   | Description                                    |
| ------ | ---------------------------------------------- |
| npcid  | The ID of the NPC that finished the path      |
| pathid | The ID of the path that was completed         |

## Examples

```c
public OnNPCFinishMovePath(npcid, pathid)
{
    printf("NPC %d finished moving along path %d", npcid, pathid);
    
    // Start moving on another path
    NPC_MoveByPath(npcid, pathid + 1, NPC_MOVE_TYPE_WALK);
    
    return true;
}
```

## Notes

- This callback is triggered when an NPC reaches the final point of a path
- The NPC stops moving automatically when this callback is called

## Related Functions

- [NPC_MoveByPath](NPC_MoveByPath): Make NPC follow a path
- [NPC_CreatePath](NPC_CreatePath): Create a new movement path
- [NPC_IsValidPath](NPC_IsValidPath): Check if path is valid

## Related Callbacks

- [OnNPCFinishMove](OnNPCFinishMove): Called when NPC finishes any movement
- [OnNPCFinishNode](OnNPCFinishNode): Called when NPC finishes node navigation
- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): Called when NPC reaches a node point
