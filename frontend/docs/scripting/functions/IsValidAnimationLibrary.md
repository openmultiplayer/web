---
title: IsValidAnimationLibrary
sidebar_label: IsValidAnimationLibrary
description: Checks if the given animation library is valid.
tags: ["animation"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if the given animation library is valid.

| Name         | Description                          |
| ------------ | ------------------------------------ |
| const name[] | The animation library name to check. |

## Returns

Returns true if the animation library is valid, otherwise false.

## Examples

```c
if (IsValidAnimationLibrary("PED"))
{
    // Animation library is valid
}
else
{
    // Animation library is not valid
}
```

## Related Functions

- [ApplyAnimation](ApplyAnimation): Apply an animation to a player.

## Related Resources

- [Animations](../resources/animations)
