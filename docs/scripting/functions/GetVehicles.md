---
title: "GetVehicles | open.mp"
description: "Gets an array variable of the IDs of the created vehicles on the server."
canonical: https://open.mp/docs/scripting/functions/GetVehicles
language: en
---

# GetVehicles

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets an array variable of the IDs of the created vehicles on the server.

| Name | Description |
| --- | --- |
| vehicles\[\] | An array into which to store the vehicle IDs, passed by reference. |
| size | The size of the array. |

## Returns

The function returns the number of vehicles stored in the array.

## Examples

```c
new vehicles[MAX_VEHICLES];

GetVehicles(vehicles, sizeof(vehicles));
// The `vehicles` array now contains created vehicle IDs. { 0, 1, 2, 3, 4, ... }
```

## Related Functions

-   [GetPlayers](https://open.mp/docs/scripting/functions/GetPlayers): Gets an array variable of the IDs of the current players on the server.
-   [GetActors](https://open.mp/docs/scripting/functions/GetActors): Gets an array variable of the IDs of the created actors on the server.
