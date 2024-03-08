---
title: SetDeathDropAmount
description: Sets death drops money.
tags: []
---

:::warning

Does not work, Use [CreatePickup](CreatePickup).

:::

## Description

Sets death drops money.

| Name   | Description             |
| ------ | ----------------------- |
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

:::warning

This function does not work in the current SA:MP version!

:::

## Related Functions

- [CreatePickup](CreatePickup): Create a pickup.
- [GivePlayerMoney](GivePlayerMoney): Give a player money.

## Related Callbacks

- [OnPlayerDeath](../callbacks/OnPlayerDeath): Called when a player dies.
