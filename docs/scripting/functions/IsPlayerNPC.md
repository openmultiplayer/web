---
title: IsPlayerNPC
description: Check if a player is an actual player or an NPC.
tags: ["player", "npc"]
---

## Description

Check if a player is an actual player or an NPC.

| Name     | Description                    |
| -------- | ------------------------------ |
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

- [ConnectNPC](ConnectNPC): Connect an NPC.
- [IsPlayerAdmin](IsPlayerAdmin): Checks if a player is logged into RCON.
