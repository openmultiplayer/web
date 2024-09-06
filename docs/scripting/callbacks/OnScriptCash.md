---
title: OnScriptCash
description: This callback is called when something in-game like casinos give the player money.
tags: ["player"]
---

:::warning

As of now, this callback has not been implemented.

:::

## Description

This callback is called when something in-game, like casinos, gives the player money.

| Name     | Description                                     |
|----------|-------------------------------------------------|
| playerid | The ID of the player who received cash from the game |
| amount   | The amount of cash that was given or taken               |
| source   | The origin of the money                       |

## Returns

Unknown, as this function is currently not implemented.

## Examples

```c
public OnScriptCash(playerid, amount, source)
{
    if (source == SCRIPT_CASH_CASINO)
    {
        SendClientMessage(playerid, -1, "You've won $%d from the casino!", amount);
    }
    else if (source == SCRIPT_CASH_VENDING_MACHINE)
    {
        SendClientMessage(playerid, -1, "You've bought a coke from a vending machine for $%d", amount);
    }
    return 1;
}
```

:::warning

The code example above is conceptual and merely illustrative. The final result, once the callback is implemented (if it ever is), may or may not look like this example.

:::

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [GetPlayerMoney](../functions/GetPlayerMoney): Retrieves the amount of money a player has.
- [GivePlayerMoney](../functions/GivePlayerMoney): Give money to or take money from a player.
- [ResetPlayerMoney](../functions/ResetPlayerMoney): Resets a player's money to $0.