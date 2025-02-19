---
title: AreAllAnimationsEnabled
sidebar_label: AreAllAnimationsEnabled
description: Are the animations missing from some versions enabled?
tags: ["animation"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Are the animations missing from some versions enabled?

## Returns

true: Enable.

false: False.

## Examples

```c
if (AreAllAnimationsEnabled())
{
    // Do something
}
```

## Related Functions

- [EnableAllAnimations](EnableAllAnimations): Allow use of the animations missing from some versions.
- [ApplyAnimation](ApplyAnimation): Apply an animation to a player.
- [ClearAnimations](ClearAnimations): Clear any animations a player is performing.

## Related Resources

- [Animations](../resources/animations)
