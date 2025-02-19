---
title: OnPlayerClickMap
sidebar_label: OnPlayerClickMap
description: This callback is called when a player places a target/waypoint on the pause menu map (by right-clicking).
tags: ["player"]
---

## Description

This callback is called when a player places a target/waypoint on the pause menu map (by right-clicking).

| Name     | Description                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| playerid | The ID of the player that placed a target/waypoint                            |
| Float:fX | The X float coordinate where the player clicked                               |
| Float:fY | The Y float coordinate where the player clicked                               |
| Float:fZ | The Z float coordinate where the player clicked (inaccurate - see note below) |

## Returns

1 - Will prevent other filterscripts from receiving this callback.

0 - Indicates that this callback will be passed to the next filterscript.

It is always called first in gamemode.

## Examples

```c
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)
{
    SetPlayerPosFindZ(playerid, fX, fY, fZ);
    return 1;
}
```

## Notes

:::tip

As the callback name says, its only called when the player click to mark the target and not when pressed the key. The Z value returned will be 0 (invalid) if the clicked area on the map is far away from the player; use the [MapAndreas](https://github.com/philip1337/samp-plugin-mapandreas) or [ColAndreas](https://github.com/Pottus/ColAndreas) plugin to get a more accurate Z coordinate.

:::

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [GetPlayerPos](../functions/GetPlayerPos): Get a player's position.
- [SetPlayerPos](../functions/SetPlayerPos): Set a player's position.
- [SetPlayerPosFindZ](../functions/SetPlayerPosFindZ): Set a player's position and find the ground.
