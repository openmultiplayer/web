---
title: "AreAllAnimationsEnabled | open.mp"
description: "Are the animations missing from some versions enabled?"
canonical: https://open.mp/docs/scripting/functions/AreAllAnimationsEnabled
language: en
---

# AreAllAnimationsEnabled

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Are the animations missing from some versions enabled?

## Returns

true: Enabled.

false: Disabled.

## Examples

```c
if (AreAllAnimationsEnabled())
{
    // Do something
}
```

## Related Functions

-   [EnableAllAnimations](https://open.mp/docs/scripting/functions/EnableAllAnimations): Allow use of the animations missing from some versions.
-   [ApplyAnimation](https://open.mp/docs/scripting/functions/ApplyAnimation): Apply an animation to a player.
-   [ClearAnimations](https://open.mp/docs/scripting/functions/ClearAnimations): Clear any animations a player is performing.

## Related Resources

-   [Animations](https://open.mp/docs/scripting/resources/animations)
