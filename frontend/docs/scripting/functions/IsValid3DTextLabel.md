---
title: IsValid3DTextLabel
sidebar_label: IsValid3DTextLabel
description: Checks if a 3D text label is valid.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if a 3D text label is valid.

| Name          | Description                           |
| ------------- | ------------------------------------- |
| Text3D:textid | The ID of the 3D text label to check. |

## Returns

This function returns **true** if the 3D text label is valid, or **false** if it is not.

## Examples

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("I'm at the coordinates:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);

    if (IsValid3DTextLabel(gMyLabel))
    {
        // Do something
    }
    return 1;
}
```

## Related Functions

- [Create3DTextLabel](Create3DTextLabel): Creates a 3D Text Label at a specific location in the world.
- [IsValidPlayer3DTextLabel](IsValidPlayer3DTextLabel): Checks if a player's 3D text label is valid.
