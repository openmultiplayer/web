---
title: "SendDeathMessageToPlayer | open.mp"
description: "Adds a death to the 'killfeed' on the right-hand side of the screen for a single player."
canonical: https://open.mp/docs/scripting/functions/SendDeathMessageToPlayer
language: en
---

# SendDeathMessageToPlayer

## Description

Adds a death to the 'killfeed' on the right-hand side of the screen for a single player.

The 5 most recent kills are shown on the right side of players' screens. Pressing **F9** will hide/show the list.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to send the death message to. |
| killer | The ID of the killer (can be INVALID\_PLAYER\_ID). |
| killee | The ID of the player that died. |
| weapon | The [reason](https://open.mp/docs/scripting/resources/weaponids) (not always a weapon) for the victim's death. Special icons can also be used (ICON\_CONNECT and ICON\_DISCONNECT). |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute.

## Examples

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Sends a death message to "playerid" shows that "killerid" killed "playerid" for "reason"
    SendDeathMessageToPlayer(playerid, killerid, playerid, reason);

    return 1;
}
```

## Related Functions

-   [SendDeathMessage](https://open.mp/docs/scripting/functions/SendDeathMessage): Add a kill to the death list.

## Related Callbacks

-   [OnPlayerDeath](https://open.mp/docs/scripting/callbacks/OnPlayerDeath): Called when a player dies.
