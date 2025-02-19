---
title: IsObjectMoving
sidebar_label: IsObjectMoving
description: Checks if the given objectid is moving.
tags: ["object"]
---

## Description

Checks if the given objectid is moving.

| Name     | Description                                  |
| -------- | -------------------------------------------- |
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

- [MoveObject](MoveObject): Move an object.
- [StopObject](StopObject): Stop an object from moving.

## Related Callbacks

- [OnObjectMoved](../callbacks/OnObjectMoved): Called when an object stops moving.
