---
title: "GetPlayerObjectSyncRotation | open.mp"
description: "Get the sync rotation of a player-object."
canonical: https://open.mp/docs/scripting/functions/GetPlayerObjectSyncRotation
language: en
---

# GetPlayerObjectSyncRotation

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the sync rotation of a player-object.

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
| objectid | The ID of the player-object. |

## Returns

Returns the sync rotation of the player-object as boolean (`true`/`false`).

## Examples

```c
new objectid = CreatePlayerObject(...);
new parentid = CreatePlayerObject(...);
AttachPlayerObjectToObject(playerid, objectid, parentid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, true);

new bool:syncRotation = GetPlayerObjectSyncRotation(playerid, objectid);
// syncRotation = true
```

## Related Functions

-   [AttachPlayerObjectToObject](https://open.mp/docs/scripting/functions/AttachPlayerObjectToObject): Attach player-objects to other player-objects.
-   [GetObjectSyncRotation](https://open.mp/docs/scripting/functions/GetObjectSyncRotation): Get the sync rotation of an object.
