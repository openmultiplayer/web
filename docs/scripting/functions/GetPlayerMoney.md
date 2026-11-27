---
title: "GetPlayerMoney | open.mp"
description: "Retrieves the amount of money a player has."
canonical: https://open.mp/docs/scripting/functions/GetPlayerMoney
language: en
---

# GetPlayerMoney

## Description

Retrieves the amount of money a player has.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the money of. |

## Returns

The amount of money the player has.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    new string[32];
    format(string, sizeof(string), "Your money: $%i", GetPlayerMoney(playerid));
    SendClientMessage(playerid, 0x00FF00FF, string);
}
```

## Related Functions

-   [GivePlayerMoney](https://open.mp/docs/scripting/functions/GivePlayerMoney): Give a player money.
-   [ResetPlayerMoney](https://open.mp/docs/scripting/functions/ResetPlayerMoney): Set the money of a player to $0.
