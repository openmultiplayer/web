---
title: "IsObjectMoving | open.mp"
description: "Checks if the given objectid is moving."
canonical: https://open.mp/docs/scripting/functions/IsObjectMoving
language: en
---

# IsObjectMoving

## Description

Checks if the given objectid is moving.

| Name | Description |
| --- | --- |
| objectid | The objectid you want to check if is moving. |

## Returns

**true** if the object is moving, **false** if not.

## Examples

```c
new gAirportGate;

public OnGameModeInit()
{
    gAirportGate = CreateObject(980, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);

    MoveObject(gAirportGate, 0.0, 0.0, 15.0, 1.00);

	if (IsObjectMoving(gAirportGate))
	{
		StopObject(gAirportGate);
	}
    return 1;
}

```

## Related Functions

-   [MoveObject](https://open.mp/docs/scripting/functions/MoveObject): Move an object.
-   [StopObject](https://open.mp/docs/scripting/functions/StopObject): Stop an object from moving.

## Related Callbacks

-   [OnObjectMoved](https://open.mp/docs/scripting/callbacks/OnObjectMoved): Called when an object stops moving.
