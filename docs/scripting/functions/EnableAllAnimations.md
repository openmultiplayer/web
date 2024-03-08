---
title: EnableAllAnimations
description: Allow use of the animations missing from some versions.
tags: ["animation"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Allow use of the animations missing from some versions.

| Name        | Description                                                     |
| ----------- | --------------------------------------------------------------- |
| bool:enable | 'true' to enable missing animations or 'false' to disable them. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    EnableAllAnimations(true);
    return 1;
}
```

## Notes

:::tip

You can also enable or disable missing animations from the [config.json](../../server/config.json) file.

```json
"use_all_animations": false,
```

:::

## Related Functions

- [AreAllAnimationsEnabled](AreAllAnimationsEnabled): Are the animations missing from some versions enabled?
- [ApplyAnimation](ApplyAnimation): Apply an animation to a player.
- [ClearAnimations](ClearAnimations): Clear any animations a player is performing.

## Related Resources

- [Animations](../resources/animations)
