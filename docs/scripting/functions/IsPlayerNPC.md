---
id: IsPlayerNPC
title: IsPlayerNPC
description: Check if a player is an actual player or an NPC.
tags: ["player", "npc"]
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## Description

Check if a player is an actual player or an NPC.

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to check. |

## Returns

1: The player is an NPC.

0: The player is not an NPC.

## Examples

```c
public OnPlayerConnect(playerid)
{
    if(IsPlayerNPC(playerid))
    {
    SendClientMessageToAll(-1, "An NPC connected!");
    return 1;
    }
}
```

## Related Functions

- [ConnectNPC](../functions/ConnectNPC.md): Connect an NPC.
- [IsPlayerAdmin](../functions/IsPlayerAdmin.md): Checks if a player is logged into RCON.
