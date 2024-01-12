---
title: GetObjectDrawDistance
description: Get the draw distance of an object.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the draw distance of an object.

| Name     | Description                                      |
|----------|--------------------------------------------------|
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

- [GetPlayerObjectDrawDistance](GetPlayerObjectDrawDistance): Get the draw distance of a player-object.
