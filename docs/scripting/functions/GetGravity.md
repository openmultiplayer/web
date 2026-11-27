---
title: "GetGravity | open.mp"
description: "Get the currently global gravity."
canonical: https://open.mp/docs/scripting/functions/GetGravity
language: en
---

# GetGravity

## Description

Get the currently global [gravity](https://open.mp/docs/scripting/functions/SetGravity).

## Returns

The current set gravity (as a float).

## Examples

**SA-MP server:**

```c
#include <a_samp>

#if !defined GetGravity
    native Float:GetGravity();
#endif

public OnGameModeInit()
{
    printf("Current gravity: %f", GetGravity());
    return 1;
}
```

**open.mp server:**

```c
#include <open.mp>

public OnGameModeInit()
{
    printf("Current gravity: %f", GetGravity());
    return 1;
}
```

## Notes

warning

In SA-MP Server this function is not defined by default. Add 'native Float:GetGravity();' under the inclusion of a\_samp.inc to use it.

## Related Functions

-   [SetGravity](https://open.mp/docs/scripting/functions/SetGravity): Set the global gravity.
-   [GetPlayerGravity](https://open.mp/docs/scripting/functions/GetPlayerGravity): Get a player's gravity.
