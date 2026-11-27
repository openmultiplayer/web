---
title: "ShowObjectForPlayer | open.mp"
description: "Show an object for a player."
canonical: https://open.mp/docs/scripting/functions/ShowObjectForPlayer
language: en
---

# ShowObjectForPlayer

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Show an object for a player that is hidden with [HideObjectForPlayer](https://open.mp/docs/scripting/functions/HideObjectForPlayer) function.

## Parameters

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
| objectid | The ID of the object to show for player. |

## Returns

`true` - The function was executed successfully.

`false` - The function failed to execute. The playerid or objectid specified does not exist.

## Examples

```c
new gObject;

public OnGameModeInit()
{
    gObject = CreateObject(1431, 921.12201, -1206.78613, 16.52670,   0.00000, 0.00000, 90.00000);
    return 1;
}

public OnPlayerConnect(playerid)
{
    HideObjectForPlayer(playerid, gObject);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    ShowObjectForPlayer(playerid, gObject);
    return 1;
}
```

## Related Functions

-   [HideObjectForPlayer](https://open.mp/docs/scripting/functions/HideObjectForPlayer): Hide an object for a player.
-   [IsObjectHiddenForPlayer](https://open.mp/docs/scripting/functions/IsObjectHiddenForPlayer): Checks if an object is hidden for a player.
-   [CreateObject](https://open.mp/docs/scripting/functions/CreateObject): Create an object.
