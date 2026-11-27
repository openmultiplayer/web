---
title: "NPC_Destroy | open.mp"
description: "Destroys an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_Destroy
language: en
---

# NPC\_Destroy

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Destroys an NPC.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC to destroy. |

## Returns

Returns `true` if the NPC was destroyed successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/destroynpc", true))
    {
        new npcid = PlayerNPC[playerid];

        if (!NPC_IsValid(npcid))
        {
            SendClientMessage(playerid, 0xFF0000FF, "You don't have a valid NPC to destroy.");
            return 1;
        }

        if (NPC_Destroy(npcid))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Your NPC (ID %d) was destroyed.", npcid);
            PlayerNPC[playerid] = INVALID_NPC_ID; // or 0 if you don't have INVALID_NPC_ID defined
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to destroy your NPC (ID %d).", npcid);
        }

        return 1;
    }
    return 0;
}
```

## Notes

note

-   This will remove the NPC from the server completely and the ID becomes invalid after destruction.

## Related Functions

-   [NPC\_Create](https://open.mp/docs/scripting/functions/NPC_Create): Creates a new NPC.
-   [NPC\_IsValid](https://open.mp/docs/scripting/functions/NPC_IsValid): Checks if an NPC ID is valid.

## Related Callbacks

-   [OnNPCDestroy](https://open.mp/docs/scripting/callbacks/OnNPCDestroy): Called when an NPC is destroyed.
