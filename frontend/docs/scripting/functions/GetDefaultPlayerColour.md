---
title: GetDefaultPlayerColour
description: Gets the default colour for the player ID.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the default colour for the player ID.

| Name     | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| playerid | The ID of the player to get the colour of.  Doesn't need to be connected. |

## Returns

The player's default color.

## Examples

```c
new colour = GetDefaultPlayerColour(playerid);
```

## Related Functions

- [GetPlayerColor](GetPlayerColor): Gets a player's color.
