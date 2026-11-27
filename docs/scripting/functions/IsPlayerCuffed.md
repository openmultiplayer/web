---
title: "IsPlayerCuffed | open.mp"
description: "Checks if the player special action is cuffed."
canonical: https://open.mp/docs/scripting/functions/IsPlayerCuffed
language: en
---

# IsPlayerCuffed

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if the player special action is cuffed.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to check. |

## Returns

Returns true if the player is cuffed, otherwise false.

## Examples

```c
SetPlayerSpecialAction(playerid, SPECIAL_ACTION_CUFFED);

if (IsPlayerCuffed(playerid))
{
    // do something
}
```
