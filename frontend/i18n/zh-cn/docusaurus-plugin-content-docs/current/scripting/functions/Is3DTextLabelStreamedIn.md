---
title: Is3DTextLabelStreamedIn
sidebar_label: Is3DTextLabelStreamedIn
description: Checks if a 3D text label is streamed in for a player.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if a 3D text label is streamed in for a player.

| Name          | Description                  |
| ------------- | ---------------------------- |
| playerid      | The ID of the player.        |
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

- [Create3DTextLabel](Create3DTextLabel): Creates a 3D Text Label at a specific location in the world.
- [IsPlayerStreamedIn](IsPlayerStreamedIn): Checks if a player is streamed in for another player.
