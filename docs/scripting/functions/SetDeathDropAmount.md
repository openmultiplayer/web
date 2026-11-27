---
title: "SetDeathDropAmount | open.mp"
description: "Sets death drops money."
canonical: https://open.mp/docs/scripting/functions/SetDeathDropAmount
language: en
---

# SetDeathDropAmount

warning

Does not work, Use [CreatePickup](https://open.mp/docs/scripting/functions/CreatePickup).

## Description

Sets death drops money.

| Name | Description |
| --- | --- |
| amount | Amount of money to set. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    SetDeathDropAmount(5000);
    return 1;
}
```

## Notes

warning

This function does not work in the current SA:MP version!

## Related Functions

-   [CreatePickup](https://open.mp/docs/scripting/functions/CreatePickup): Create a pickup.
-   [GivePlayerMoney](https://open.mp/docs/scripting/functions/GivePlayerMoney): Give a player money.

## Related Callbacks

-   [OnPlayerDeath](https://open.mp/docs/scripting/callbacks/OnPlayerDeath): Called when a player dies.
