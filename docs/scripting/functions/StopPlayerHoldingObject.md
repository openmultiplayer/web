---
title: StopPlayerHoldingObject
description: Removes attached objects.
tags: ["player"]
---

## Description

Removes attached objects.

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| playerid | ID of the player you want to remove the object from. |

## Returns

1 on success, 0 on failure

## Examples

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (IsPlayerHoldingObject(playerid))
    {
        StopPlayerHoldingObject(playerid);
    }
    return 1;
}
```

## Notes

:::warning

This function was removed in SA-MP 0.3c. See [RemovePlayerAttachedObject](RemovePlayerAttachedObject)

:::

## Related Functions

- [SetPlayerHoldingObject](SetPlayerHoldingObject): Attaches an object to a bone.
