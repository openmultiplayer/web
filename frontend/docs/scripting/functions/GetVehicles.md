---
title: GetVehicles
sidebar_label: GetVehicles
description: Gets an array variable of the IDs of the created vehicles on the server.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets an array variable of the IDs of the created vehicles on the server.

| Name       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| vehicles[] | An array into which to store the vehicle IDs, passed by reference. |
| size       | The size of the array.                                             |

## Returns

The function returns the number of vehicles stored in the array.

## Examples

```c
new vehicles[MAX_VEHICLES];

GetVehicles(vehicles, sizeof(vehicles));
// The `vehicles` array now contains created vehicle IDs. { 0, 1, 2, 3, 4, ... }
```

## Related Functions

- [GetPlayers](GetPlayers): Gets an array variable of the IDs of the current players on the server.
- [GetActors](GetActors): Gets an array variable of the IDs of the created actors on the server.
