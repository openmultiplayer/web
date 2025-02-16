---
title: GetObjectModel
sidebar_label: GetObjectModel
description: Get the model ID of an object (CreateObject).
tags: ["object"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Get the model ID of an object ([CreateObject](CreateObject)).

| Name     | Description                              |
| -------- | ---------------------------------------- |
| objectid | The ID of the object to get the model of |

## Returns

The model ID of the object.

**-1** if object does not exist.

## Examples

```c
public OnGameModeInit()
{
    new objectid = CreateObject(19609, 666.57239, 1750.79749, 4.95627,   0.00000, 0.00000, -156.00000);
    
    new modelid = GetObjectModel(objectid);
    printf("Object model: %d", modelid); // Output: "Object model: 19609"
    return 1;
}
```

## Related Functions

- [GetPlayerObjectModel](GetPlayerObjectModel): Get the model ID of a player-object.
