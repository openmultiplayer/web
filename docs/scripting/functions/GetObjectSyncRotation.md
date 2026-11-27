---
title: "GetObjectSyncRotation | open.mp"
description: "Get the sync rotation of an object."
canonical: https://open.mp/docs/scripting/functions/GetObjectSyncRotation
language: en
---

# GetObjectSyncRotation

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the sync rotation of an object.

| Name | Description |
| --- | --- |
| objectid | The ID of the object. |

## Returns

Returns the sync rotation of the object as boolean (`true`/`false`).

## Examples

```c
new objectid = CreateObject(...);
new parentid = CreateObject(...);
AttachObjectToObject(objectid, parentid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, false);

new bool:syncRotation = GetObjectSyncRotation(objectid);
// syncRotation = false
```

## Related Functions

-   [AttachObjectToObject](https://open.mp/docs/scripting/functions/AttachObjectToObject): Attach object to other object.
-   [GetPlayerObjectSyncRotation](https://open.mp/docs/scripting/functions/GetPlayerObjectSyncRotation): Get the sync rotation of a player-object.
