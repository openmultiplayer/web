---
title: "Get3DTextLabelPos | open.mp"
description: "Gets the 3D text label position."
canonical: https://open.mp/docs/scripting/functions/Get3DTextLabelPos
language: en
---

# Get3DTextLabelPos

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the 3D text label position.

| Name | Description |
| --- | --- |
| Text3D:textid | The ID of the 3D text label to get the position of. |
| &Float:x | An float variable into which to store the X coordinate, passed by reference. |
| &Float:y | An float variable into which to store the Y coordinate, passed by reference. |
| &Float:z | An float variable into which to store the Z coordinate, passed by reference. |

## Examples

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, false);

    new Float:x, Float:y, Float:z;
    Get3DTextLabelPos(gMyLabel, x, y, z);
    // x = 30.0
    // y = 40.0
    // z = 50.0
    return 1;
}
```

## Related Functions

-   [GetPlayer3DTextLabelPos](https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelPos): Gets the player 3D text label position.
