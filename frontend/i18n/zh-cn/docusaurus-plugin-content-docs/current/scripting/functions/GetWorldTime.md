---
title: GetWorldTime
sidebar_label: GetWorldTime
description: Get the current world time.
tags: ["worldtime"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the current world time.

## Examples

```c
SetWorldTime(12);

printf("Current world time: %d", GetWorldTime());
// The output will be 'Current world time: 12'
```

## Related Functions

- [SetWorldTime](SetWorldTime): Sets the world time (for all players) to a specific hour.
- [SetPlayerTime](SetPlayerTime): Set a player's time.