---
title: "IsPlayerNPC | open.mp"
description: "Check if a player is an actual player or an NPC."
canonical: https://open.mp/docs/scripting/functions/IsPlayerNPC
language: en
---

# IsPlayerNPC

## Description

Check if a player is an actual player or an NPC.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to check. |

## Returns

**true** - The player is an NPC.

**false** - The player is not an NPC.

## Examples

```c
public OnPlayerConnect(playerid)
{
    if (IsPlayerNPC(playerid))
    {
        SendClientMessageToAll(-1, "An NPC connected!");
        return 1;
    }

    // The other code here won't be executed unless its a player
}
```

## Related Functions

-   [ConnectNPC](https://open.mp/docs/scripting/functions/ConnectNPC): Connect an NPC.
-   [IsPlayerAdmin](https://open.mp/docs/scripting/functions/IsPlayerAdmin): Checks if a player is logged into RCON.
