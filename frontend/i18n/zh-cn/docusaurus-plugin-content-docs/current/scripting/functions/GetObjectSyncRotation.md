---
title: GetObjectSyncRotation
sidebar_label: GetObjectSyncRotation
description: Get the sync rotation of an object.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the sync rotation of an object.

| Name     | Description           |
|----------|-----------------------|
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

- [AttachObjectToObject](AttachObjectToObject): Attach object to other object.
- [GetPlayerObjectSyncRotation](GetPlayerObjectSyncRotation): Get the sync rotation of a player-object.
