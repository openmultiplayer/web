---
title: IsValid3DTextLabel
description: Checks if an 3D text label is valid.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if an 3D text label is valid.

| Name        | Description           |
| ----------- | --------------------- |
| Text3D:textid | The ID of the 3D text label to check.  |

## Returns

This function returns true if the 3D text label is valid, or false if it is not.

## Examples

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel(...);

    if (IsValid3DTextLabel(gMyLabel))
    {
        // Do something
    }

    return 1;
}
```

## Related Functions

- [Create3DTextLabel](Create3DTextLabel): Creates a 3D Text Label at a specific location in the world.
- [IsValidPlayer3DTextLabel](IsValidPlayer3DTextLabel): Checks if an player 3D text label is valid.