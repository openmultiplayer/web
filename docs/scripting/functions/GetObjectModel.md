---
title: "GetObjectModel | open.mp"
description: "Get the model ID of an object (CreateObject)."
canonical: https://open.mp/docs/scripting/functions/GetObjectModel
language: en
---

# GetObjectModel

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Get the model ID of an object ([CreateObject](https://open.mp/docs/scripting/functions/CreateObject)).

| Name | Description |
| --- | --- |
| objectid | The ID of the object to get the model of |

## Returns

The model ID of the object.

**\-1** if object does not exist.

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

-   [GetPlayerObjectModel](https://open.mp/docs/scripting/functions/GetPlayerObjectModel): Get the model ID of a player-object.
