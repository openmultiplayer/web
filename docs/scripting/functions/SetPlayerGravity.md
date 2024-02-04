---
title: SetPlayerGravity
description: Set a player's gravity.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Set a player's gravity.

| Name     | Description |
| -------- | ------------------- |
| playerid | The ID of the player to set the gravity. |
| Float:gravity | The value that the gravity should be set to (between -50 and 50). |

## Returns

Returns true if succeed, otherwise false.

## Examples

```c
public OnPlayerConnect(playerid)
{
    // Set moon-like gravity
    SetPlayerGravity(playerid, 0.001);

    return 1;
}
```

## Notes

:::warning

Default gravity is 0.008.

:::

## Related Functions

- [GetPlayerGravity](GetPlayerGravity): Get a player's gravity.
- [SetGravity](SetGravity): Set the gravity for all players.
- [GetGravity](GetGravity): Get the currently global gravity.
