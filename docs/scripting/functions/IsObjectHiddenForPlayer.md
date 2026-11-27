---
title: "IsObjectHiddenForPlayer | open.mp"
description: "Checks if an object is hidden for a player."
canonical: https://open.mp/docs/scripting/functions/IsObjectHiddenForPlayer
language: en
---

# IsObjectHiddenForPlayer

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if an object is hidden for a player.

## Parameters

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
| objectid | The ID of the object to check. |

## Returns

`true` - Object is hidden for the player.

`false` - Object is not hidden for the player.

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
    if (IsObjectHiddenForPlayer(playerid, gObject))
    {
        printf("Object %d is hidden for player %d", gObject, playerid);
    }
    return 1;
}
```

## Notes

tip

You can hide objects for a specific player with [HideObjectForPlayer](https://open.mp/docs/scripting/functions/HideObjectForPlayer) function.

## Related Functions

-   [HideObjectForPlayer](https://open.mp/docs/scripting/functions/HideObjectForPlayer): Hide an object for a player.
-   [ShowObjectForPlayer](https://open.mp/docs/scripting/functions/ShowObjectForPlayer): Show an object for a player.
-   [CreateObject](https://open.mp/docs/scripting/functions/CreateObject): Create an object.
