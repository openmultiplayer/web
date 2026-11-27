---
title: "GetPlayerGhostMode | open.mp"
description: "Get player's ghost mode."
canonical: https://open.mp/docs/scripting/functions/GetPlayerGhostMode
language: en
---

# GetPlayerGhostMode

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get player's ghost mode.

| Name | Description |
| --- | --- |
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

-   [TogglePlayerGhostMode](https://open.mp/docs/scripting/functions/TogglePlayerGhostMode): Toggle player's ghost mode.
