---
title: NPC_Destroy
sidebar_label: NPC_Destroy
description: Destroys an NPC.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Destroys an NPC.

| Name   | Description                      |
| ------ | -------------------------------- |
| npcid  | The ID of the NPC to destroy.    |

## Returns

Returns `true` if the NPC was destroyed successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/destroynpc", true))
    {
        if (NPC_IsValid(0))
        {
            NPC_Destroy(0);
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 destroyed");
        }
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

- This will remove the NPC from the server completely.
- The NPC ID becomes invalid after destruction.

:::

## Related Functions

- [NPC_Create](NPC_Create): Creates a new NPC.
- [NPC_IsValid](NPC_IsValid): Checks if an NPC ID is valid.

## Related Callbacks

- [OnNPCDestroy](OnNPCDestroy): Called when an NPC is destroyed.
