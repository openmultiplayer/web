---
title: "GetPlayerAnimFlags | open.mp"
description: "Get the player animation flags."
canonical: https://open.mp/docs/scripting/functions/GetPlayerAnimFlags
language: en
---

# GetPlayerAnimFlags

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the player animation flags.

| Name | Description |
| --- | --- |
| playerid | The player id you want to get the animation flags from |

## Returns

Returns the player animation flags as integer.

## Examples

```c
new flags = GetPlayerAnimFlags(playerid);
```

## Related Functions

-   [ApplyAnimation](https://open.mp/docs/scripting/functions/ApplyAnimation): Apply an animation to a player.
