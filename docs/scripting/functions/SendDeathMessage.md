---
title: "SendDeathMessage | open.mp"
description: "Adds a death to the 'killfeed' on the right-hand side of the screen for all players."
canonical: https://open.mp/docs/scripting/functions/SendDeathMessage
language: en
---

# SendDeathMessage

## Description

Adds a death to the 'killfeed' on the right-hand side of the screen for all players.

The 5 most recent kills are shown on the right side of players' screens. Pressing **F9** will hide/show the list.

| Name | Description |
| --- | --- |
| killer | The ID of the killer (can be INVALID\_PLAYER\_ID). |
| killee | The ID of the player that died. |
| weapon | The [reason](https://open.mp/docs/scripting/resources/weaponids) (not always a weapon) for the victim's death. Special icons can also be used (ICON\_CONNECT and ICON\_DISCONNECT). |

## Returns

This function always returns **true**, even if the function fails to execute.

The function fails to execute (no death message shown) if `killee` is invalid.

If `weapon` is invalid, a generic skull-and-crossbones icon is shown.

`killer` being invalid (`INVALID_PLAYER_ID`) is valid.

## Examples

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendDeathMessage(killerid, playerid, reason);
    return 1;
}
```

## Notes

tip

-   Death messages can be cleared by using a valid player ID for `killee` that **is not connected**.
-   To show a death message for just a single player, use [SendDeathMessageToPlayer](https://open.mp/docs/scripting/functions/SendDeathMessageToPlayer).
-   You can use NPCs to create your own custom death reasons.

## Related Functions

-   [SendDeathMessageToPlayer](https://open.mp/docs/scripting/functions/SendDeathMessageToPlayer): Add a kill to the death list for a player.

## Related Callbacks

-   [OnPlayerDeath](https://open.mp/docs/scripting/callbacks/OnPlayerDeath): Called when a player dies.

## Related Resources

-   [Weapon IDs and Death Reasons](https://open.mp/docs/scripting/resources/weaponids)
