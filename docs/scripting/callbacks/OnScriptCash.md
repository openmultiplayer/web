---
title: OnScriptCash
description: This callback is called when something in-game like casinos give the player money.
tags: ["player"]
---

:::warning

This callback is currently NOT working.

:::

## Description

This callback is called when something in-game like casinos give the player money.

| Name     | Description                                     |
|----------|-------------------------------------------------|
| playerid | The ID of the player who got cash from the game |
| amount   | The amount of cash given or taken               |
| source   | Where the money came from                       |

## Returns

Unknown as this function does not currently work.

## Examples

```c
// Imaginary:

public OnScriptCash(playerid, amount, source)
{
    if (source == SCRIPT_CASH_CASINO)
    {
        SendClientMessage(playerid, -1, "You have won $%d from the casino!", amount);
    }
    else if (source == SCRIPT_CASH_VENDING_MACHINE)
    {
        SendClientMessage(playerid, -1, "You buyed a coke from vending machine for $%d", amount);
    }
    return 1;
}
```

## Related Functions

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [GetPlayerMoney](../functions/GetPlayerMoney): Retrieves the amount of money a player has.
