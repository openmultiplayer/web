---
title: SendDeathMessageToPlayer
sidebar_label: SendDeathMessageToPlayer
description: Adds a death to the 'killfeed' on the right-hand side of the screen for a single player.
tags: ["player"]
---

## Description

Adds a death to the 'killfeed' on the right-hand side of the screen for a single player.

| Name     | Description                                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------------------- |
| playerid | The ID of the player to send the death message to.                                                                          |
| killer   | The ID of the killer (can be INVALID_PLAYER_ID).                                                                            |
| killee   | The ID of the player that died.                                                                                             |
| weapon   | The reason (not always a weapon) for the victim's death. Special icons can also be used (ICON_CONNECT and ICON_DISCONNECT). |

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

- [SendDeathMessage](SendDeathMessage): Add a kill to the death list.

## Related Callbacks

- [OnPlayerDeath](../callbacks/OnPlayerDeath): Called when a player dies.
