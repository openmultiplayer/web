---
title: "IsPlayerInDriveByMode | open.mp"
description: "Check if the player is in driveby mode."
canonical: https://open.mp/docs/scripting/functions/IsPlayerInDriveByMode
language: en
---

# IsPlayerInDriveByMode

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Check if the player is in driveby mode.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to check. |

## Returns

Returns true if the player is in driveby mode, otherwise false.

## Examples

```c
if (IsPlayerInDriveByMode(playerid))
{
    // do something
}
```
