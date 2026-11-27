---
title: "EnableAllAnimations | open.mp"
description: "Allow use of the animations missing from some versions."
canonical: https://open.mp/docs/scripting/functions/EnableAllAnimations
language: en
---

# EnableAllAnimations

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Allow use of the animations missing from some versions.

| Name | Description |
| --- | --- |
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

tip

You can also enable or disable missing animations from the [config.json](https://open.mp/docs/server/config.json) file.

```json
"use_all_animations": false,
```

## Related Functions

-   [AreAllAnimationsEnabled](https://open.mp/docs/scripting/functions/AreAllAnimationsEnabled): Are the animations missing from some versions enabled?
-   [ApplyAnimation](https://open.mp/docs/scripting/functions/ApplyAnimation): Apply an animation to a player.
-   [ClearAnimations](https://open.mp/docs/scripting/functions/ClearAnimations): Clear any animations a player is performing.

## Related Resources

-   [Animations](https://open.mp/docs/scripting/resources/animations)
