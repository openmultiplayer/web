---
title: "ResetPlayerMoney | open.mp"
description: "Reset a player's money to $0."
canonical: https://open.mp/docs/scripting/functions/ResetPlayerMoney
language: en
---

# ResetPlayerMoney

## Description

Reset a player's money to $0.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to reset the money of. |

## Returns

**1** - The function was executed successfully.

**0** - The function failed to execute. This means the player is not connected.

## Examples

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendClientMessage(playerid, 0xFFFFFFAA, "You died and lost all of your cash!");
    ResetPlayerMoney(playerid);
    return 1;
}
```

## Related Functions

-   [GetPlayerMoney](https://open.mp/docs/scripting/functions/GetPlayerMoney): Check how much money a player has.
-   [GivePlayerMoney](https://open.mp/docs/scripting/functions/GivePlayerMoney): Give a player money.
