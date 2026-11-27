---
title: "EnableVehicleFriendlyFire | open.mp"
description: "Enable friendly fire for team vehicles."
canonical: https://open.mp/docs/scripting/functions/EnableVehicleFriendlyFire
language: en
---

# EnableVehicleFriendlyFire

## Description

Enable friendly fire for team vehicles. Players will be unable to damage teammates' vehicles ([SetPlayerTeam](https://open.mp/docs/scripting/functions/SetPlayerTeam) must be used!).

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    EnableVehicleFriendlyFire();
    return 1;
}
```

## Related Functions

-   [SetPlayerTeam](https://open.mp/docs/scripting/functions/SetPlayerTeam): Set a player's team.
