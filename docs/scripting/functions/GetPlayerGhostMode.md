---
title: GetPlayerGhostMode
description: Get player's ghost mode.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get player's ghost mode.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| playerid | The ID of the player to get the ghost mode of. |

## Returns

**true** - Ghost mode is enable.

**false** - Ghost mode is disable.

## Examples

```c
new string[64];
format(string, sizeof(string), "Your ghost mode is %s", GetPlayerGhostMode(playerid) == true ? "enable" : "disable");
SendClientMessage(playerid, -1, string);
```

## Related Functions

- [TogglePlayerGhostMode](TogglePlayerGhostMode): Toggle player's ghost mode.
