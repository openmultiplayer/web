---
title: "GetObjectDrawDistance | open.mp"
description: "Get the draw distance of an object."
canonical: https://open.mp/docs/scripting/functions/GetObjectDrawDistance
language: en
---

# GetObjectDrawDistance

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the draw distance of an object.

| Name | Description |
| --- | --- |
| objectid | The ID of the object to get the draw distance of |

## Returns

Returns the draw distance as float.

## Examples

```c
new objectid = CreateObject(3335, 672.53485, -656.11023, 15.26560,  3.00000, 0.00000, 0.00000,  100.0);

new Float:drawDistance = GetObjectDrawDistance(objectid);
// drawDistance = 100.0
```

## Related Functions

-   [GetPlayerObjectDrawDistance](https://open.mp/docs/scripting/functions/GetPlayerObjectDrawDistance): Get the draw distance of a player-object.
