---
title: GetObjectType
sidebar_label: GetObjectType
description: Get the type of an object. (global or player)
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the type of an object. (global or player)

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The ID of the player.                    |
| objectid | The ID of the object to get the type of. |

## Returns

`0` - Function failed to execute. The objectid or playerid specified does not exist.

`1` - Global object.

`2` - Player object.

## Examples

```c
new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);

new objectType = GetObjectType(playerid, objectid);
// objectType = 1
```

Another example:

```c
new playerobjectid = CreatePlayerObject(playerid, 19174, 978.88757, -986.34918, 40.95220,   0.00000, 0.00000, 228.00000);

new objectType = GetObjectType(playerid, playerobjectid);
// objectType = 2
```

## Related Functions

- [CreateObject](CreateObject): Create an object.
- [CreatePlayerObject](CreatePlayerObject): Create an object for only one player.
