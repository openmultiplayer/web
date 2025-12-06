---
title: ShowObjectForPlayer
sidebar_label: ShowObjectForPlayer
description: Show an object for a player.
tags: ["player", "object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Show an object for a player that is hidden with [HideObjectForPlayer](HideObjectForPlayer) function.

## Parameters

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The ID of the player.                    |
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

- [HideObjectForPlayer](HideObjectForPlayer): Hide an object for a player.
- [IsObjectHiddenForPlayer](IsObjectHiddenForPlayer): Checks if an object is hidden for a player.
- [CreateObject](CreateObject): Create an object.
