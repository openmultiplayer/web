---
title: GetPlayerAnimationFlags
description: Get the player animation flags.
tags: ["player", "animation"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the player animation flags.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The player id you want to get the animation flags from |

## Returns

Returns the player animation flags as integer.

## Examples

```c
new flags = GetPlayerAnimationFlags(playerid);
```

## Related Functions

- [ApplyAnimation](ApplyAnimation): Apply an animation to a player.
