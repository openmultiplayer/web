---
title: GetPlayers
description: Gets an array variable of the IDs of the current players on the server.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets an array variable of the IDs of the current players on the server.

| Name          | Description                                                       |
| ------------- | ----------------------------------------------------------------- |
| players[]     | An array into which to store the player IDs, passed by reference. |
| size          | The size of the array.                                            |

## Returns

The function returns the number of players stored in the array.

## Examples

Suppose there are 5 players on the server:

```c
new players[MAX_PLAYERS];
new length;

length = GetPlayers(players, sizeof(players));
// The `players` array now contains online player IDs. { 0, 1, 2, 3, 4 }
// The value of the `length` variable is 5
```

## Related Functions

- [GetVehicles](GetVehicles): Gets an array variable of the IDs of the created vehicles on the server.
- [GetActors](GetActors): Gets an array variable of the IDs of the created actors on the server.
