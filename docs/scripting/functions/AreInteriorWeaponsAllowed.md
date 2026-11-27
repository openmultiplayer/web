---
title: "AreInteriorWeaponsAllowed | open.mp"
description: "Can weapons be used in interiors?"
canonical: https://open.mp/docs/scripting/functions/AreInteriorWeaponsAllowed
language: en
---

# AreInteriorWeaponsAllowed

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Can weapons be used in interiors?

## Returns

true: Allowed.

false: Not allowed.

## Examples

```c
if (AreInteriorWeaponsAllowed())
{
    // Do something
}
```

## Related Functions

-   [AllowInteriorWeapons](https://open.mp/docs/scripting/functions/AllowInteriorWeapons): Toggle whether the usage of weapons in interiors is allowed or not.
