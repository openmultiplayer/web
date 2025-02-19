---
title: ClearPlayerWorldBounds
sidebar_label: ClearPlayerWorldBounds
description: Reset the player's world boundaries to default world boundaries.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Reset the player's world boundaries to default world boundaries.

| Name     | Description                                               |
|----------|-----------------------------------------------------------|
| playerid | The ID of the player to reset/clear the world boundaries. |

## Returns

**true** - Function executed successfully.

**false** - Function failed to execute.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerWorldBounds(playerid, 20.0, 0.0, 20.0, 0.0);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    ClearPlayerWorldBounds(playerid);
    return 1;
}
```

## Notes

:::tip

A player's world boundaries can also be reset by setting them to 20000.0000, -20000.0000, 20000.0000, -20000.0000. These are the default values. However, we suggest using ClearPlayerWorldBounds to reset the player's world boundaries for clarity.

:::

## Related Functions

- [SetPlayerWorldBounds](SetPlayerWorldBounds): Set the world boundaries for a player. Players can not go out of the boundaries (they will be pushed back in).
- [GetPlayerWorldBounds](GetPlayerWorldBounds): Get a player's world boundaries.
