---
title: "GetWorldTime | open.mp"
description: "Get the current world time."
canonical: https://open.mp/docs/scripting/functions/GetWorldTime
language: en
---

# GetWorldTime

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the current world time.

## Examples

```c
SetWorldTime(12);

printf("Current world time: %d", GetWorldTime());
// The output will be 'Current world time: 12'
```

## Related Functions

-   [SetWorldTime](https://open.mp/docs/scripting/functions/SetWorldTime): Sets the world time (for all players) to a specific hour.
-   [SetPlayerTime](https://open.mp/docs/scripting/functions/SetPlayerTime): Set a player's time.
