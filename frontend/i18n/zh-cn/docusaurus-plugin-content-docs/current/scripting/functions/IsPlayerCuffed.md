---
title: IsPlayerCuffed
sidebar_label: IsPlayerCuffed
description: Checks if the player special action is cuffed.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if the player special action is cuffed.

| Name     | Description                                                 |
| -------- | ----------------------------------------------------------- |
| playerid | The ID of the player to check.                              |

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

