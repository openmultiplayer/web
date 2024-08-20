---
title: Get3DTextLabelDrawDistance
description: Gets the 3D text label draw distance.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the 3D text label draw distance.

| Name          | Description                                              |
| ------------- | -------------------------------------------------------- |
| Text3D:textid | The ID of the 3D text label to get the draw distance of. |

## Returns

Returns the draw distance of the 3D text label as float.

## Examples

```c
new Text3D:gMyLabel;
new Float:drawDistance;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, false);

drawDistance = Get3DTextLabelDrawDistance(gMyLabel);
// drawDistance = 10.0
```

## Related Functions

- [Set3DTextLabelDrawDistance](Set3DTextLabelDrawDistance): Sets the 3D text label draw distance.
- [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance): Gets the player 3D text label draw distance.
