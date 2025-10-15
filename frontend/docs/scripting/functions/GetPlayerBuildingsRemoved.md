---
title: GetPlayerBuildingsRemoved
sidebar_label: GetPlayerBuildingsRemoved
description: Gets the number of removed buildings for a player.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the number of removed buildings for a player.

| Name     | Description           |
| -------- | --------------------- |
| playerid | The ID of the player. |

## Returns

Returns the number of removed buildings.

## Examples

```c
public OnPlayerConnect(playerid)
{
    RemoveBuildingForPlayer(playerid, 700, 1192.1016, -1738.0000, 13.0391, 0.25);
    RemoveBuildingForPlayer(playerid, 700, 1204.4844, -1724.8516, 13.0391, 0.25);
    RemoveBuildingForPlayer(playerid, 673, 1192.5625, -1723.8828, 12.5234, 0.25);

    printf("Removed buildings: %d", GetPlayerBuildingsRemoved(playerid)); // Removed buildings: 3
    return 1;
}
```

## Related Functions

- [RemoveBuildingForPlayer](RemoveBuildingForPlayer): Removes a standard San Andreas model for a single player within a specified range.
