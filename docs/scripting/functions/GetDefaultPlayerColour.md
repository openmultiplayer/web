---
title: "GetDefaultPlayerColour | open.mp"
description: "Gets the default colour for the player ID."
canonical: https://open.mp/docs/scripting/functions/GetDefaultPlayerColour
language: en
---

# GetDefaultPlayerColour

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the default colour for the player ID.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the colour of. Doesn't need to be connected. |

## Returns

The player's default color.

## Examples

```c
new colour = GetDefaultPlayerColour(playerid);
```

## Related Functions

-   [GetPlayerColor](https://open.mp/docs/scripting/functions/GetPlayerColor): Gets a player's color.
