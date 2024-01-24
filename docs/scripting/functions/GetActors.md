---
title: GetActors
description: Gets an array variable of the IDs of the created actors on the server.
tags: ["actor"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets an array variable of the IDs of the created actors on the server.

| Name          | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| actors[]      | An array into which to store the actor IDs, passed by reference. |
| size          | The size of the array.                                             |

## Returns

The function returns the number of actors stored in the array.

## Examples

```c
new actors[MAX_ACTORS];

GetActors(actors, sizeof(actors));
// The `actors` array now contains created actor IDs. { 0, 1, 2, 3, 4, ... }
```

## Related Functions

- [GetPlayers](GetPlayers): Gets an array variable of the IDs of the current players on the server.
- [GetVehicles](GetVehicles): Gets an array variable of the IDs of the created vehicles on the server.
