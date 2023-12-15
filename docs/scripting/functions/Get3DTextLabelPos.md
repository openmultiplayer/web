---
title: Get3DTextLabelPos
description: Gets the 3D text label position.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the 3D text label position.

| Name      | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| Text3D:textid | The ID of the 3D text label to get the position of. |
| &Float:x | An float variable into which to store the X coordinate, passed by reference. |
| &Float:y | An float variable into which to store the Y coordinate, passed by reference. |
| &Float:z | An float variable into which to store the Z coordinate, passed by reference. |

## Examples

```c
new Text3D:gMyLabel;
new Float:x, Float:y, Float:z;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);

Get3DTextLabelPos(gMyLabel, x, y, z);
// The x, y, z will be 30.0, 40.0, 50.0
```

## Related Functions

- [GetPlayer3DTextLabelPos](GetPlayer3DTextLabelPos): Gets the player 3D text label position.
