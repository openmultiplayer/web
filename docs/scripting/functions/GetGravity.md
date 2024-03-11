---
title: GetGravity
description: Get the currently global gravity.
tags: []
---

## Description

Get the currently global gravity.

## Examples

```c
#if !defined GetGravity
    native Float:GetGravity();
#endif

printf("Current gravity: %f", GetGravity());
```

## Notes

:::warning

In SA-MP Server this function is not defined by default. Add 'native Float:GetGravity();' under the inclusion of a_samp.inc to use it.

:::

## Related Functions

- [SetGravity](SetGravity): Set the global gravity.
- [GetPlayerGravity](GetPlayerGravity): Get a player's gravity.
