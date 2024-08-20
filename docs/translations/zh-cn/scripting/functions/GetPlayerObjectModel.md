---
title: GetPlayerObjectModel
description: Retrieve the model ID of a player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Retrieve the model ID of a player-object.

| Name     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| playerid | The ID of the player whose player-object to get the model of  |
| objectid | The ID of the player-object of which to retrieve the model ID |

## Returns

The model ID of the player object.

If the player or object don't exist, it will return **-1** or **0** if the player or object does not exist.

## Examples

```c
public OnPlayerConnect(playerid)
{
    new objectid = CreatePlayerObject(playerid, 19609, 666.57239, 1750.79749, 4.95627,   0.00000, 0.00000, -156.00000);

    new modelid = GetPlayerObjectModel(playerid, objectid);
    printf("Object model: %d", modelid); // Output: "Object model: 19609"
    return 1;
}
```

## Related Functions

- [GetObjectModel](GetObjectModel): Get the model ID of an object.
