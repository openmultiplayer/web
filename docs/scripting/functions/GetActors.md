---
title: "GetActors | open.mp"
description: "Gets an array variable of the IDs of the created actors on the server."
canonical: https://open.mp/docs/scripting/functions/GetActors
language: en
---

# GetActors

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets an array variable of the IDs of the created actors on the server.

| Name | Description |
| --- | --- |
| actors\[\] | An array into which to store the actor IDs, passed by reference. |
| size | The size of the array. |

## Returns

The function returns the number of actors stored in the array.

## Examples

```pawn
new actors[MAX_ACTORS];

GetActors(actors, sizeof(actors));
// The `actors` array now contains created actor IDs. { 0, 1, 2, 3, 4, ... }
```

## Related Functions

-   [GetPlayers](https://open.mp/docs/scripting/functions/GetPlayers): Gets an array variable of the IDs of the current players on the server.
-   [GetVehicles](https://open.mp/docs/scripting/functions/GetVehicles): Gets an array variable of the IDs of the created vehicles on the server.
