---
title: "Is3DTextLabelStreamedIn | open.mp"
description: "Checks if a 3D text label is streamed in for a player."
canonical: https://open.mp/docs/scripting/functions/Is3DTextLabelStreamedIn
language: en
---

# Is3DTextLabelStreamedIn

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if a 3D text label is streamed in for a player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
| Text3D:textid | The ID of the 3D text label. |

## Returns

This function returns **true** if the 3D text label is streamed in for the player, or **false** if it is not.

## Examples

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("I'm at the coordinates:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (Is3DTextLabelStreamedIn(playerid, gMyLabel))
    {
        // Do something
    }
    return 1;
}
```

## Related Functions

-   [Create3DTextLabel](https://open.mp/docs/scripting/functions/Create3DTextLabel): Creates a 3D Text Label at a specific location in the world.
-   [IsPlayerStreamedIn](https://open.mp/docs/scripting/functions/IsPlayerStreamedIn): Checks if a player is streamed in for another player.
