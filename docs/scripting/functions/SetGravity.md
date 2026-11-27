---
title: "SetGravity | open.mp"
description: "Set the gravity for all players."
canonical: https://open.mp/docs/scripting/functions/SetGravity
language: en
---

# SetGravity

## Description

Set the gravity for all players.

| Name | Description |
| --- | --- |
| Float:gravity | The value that the gravity should be set to (between -50.0 and 50.0). |

## Returns

This function always returns **1**, even when it fails to execute if the gravity is out of the limits (lower than -50.0 or high than +50.0).

## Examples

```c
public OnGameModeInit()
{
    // Set moon-like gravity
    SetGravity(0.001);

    return 1;
}
```

## Notes

note

Default gravity is 0.008.

## Related Functions

-   [GetGravity](https://open.mp/docs/scripting/functions/GetGravity): Get the currently set gravity.
-   [SetPlayerGravity](https://open.mp/docs/scripting/functions/SetPlayerGravity): Set a player's gravity.
-   [SetWeather](https://open.mp/docs/scripting/functions/SetWeather): Set the global weather.
-   [SetWorldTime](https://open.mp/docs/scripting/functions/SetWorldTime): Set the global server time.
