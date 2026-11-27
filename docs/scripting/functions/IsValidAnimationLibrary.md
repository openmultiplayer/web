---
title: "IsValidAnimationLibrary | open.mp"
description: "Checks if the given animation library is valid."
canonical: https://open.mp/docs/scripting/functions/IsValidAnimationLibrary
language: en
---

# IsValidAnimationLibrary

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if the given animation library is valid.

| Name | Description |
| --- | --- |
| const name\[\] | The animation library name to check. |

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

-   [ApplyAnimation](https://open.mp/docs/scripting/functions/ApplyAnimation): Apply an animation to a player.

## Related Resources

-   [Animations](https://open.mp/docs/scripting/resources/animations)
