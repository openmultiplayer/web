---
title: CreateExplosionForPlayer
description: Creates an explosion that is only visible to a single player.
tags: ["player"]
---

## Description

Creates an explosion that is only visible to a single player. This can be used to isolate explosions from other players or to make them only appear in specific virtual worlds.

| Name         | Description                                              |
| ------------ | -------------------------------------------------------- |
| playerid     | The ID of the player to create the explosion for.        |
| Float:x      | The X coordinate of the explosion.                       |
| Float:y      | The Y coordinate of the explosion.                       |
| Float:z      | The Z coordinate of the explosion.                       |
| type         | The [type](../resources/explosionlist) of the explosion. |
| Float:radius | The radius of the explosion.                             |

## Returns

This function always returns **true**, even if the function failed to excute (player doesn't exist, invalid radius, or invalid explosion type).

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/burnme", true) == 0)
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        CreateExplosionForPlayer(playerid, x, y, z, 1, 10.0);
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

There is a limit as to how many explosions can be seen at once by a player. This is roughly 10.

:::

## Related Functions

- [CreateExplosion](CreateExplosion): Create an explosion which is visible for all players.

## See Also

- [Explosion Types](../resources/explosionlist): A list of all the explosion types.
