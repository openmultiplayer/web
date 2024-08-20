---
title: Set3DTextLabelDrawDistance
description: Sets the 3D text label draw distance.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Sets the 3D text label draw distance.

| Name               | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| Text3D:textid      | The ID of the 3D text label to set the draw distance.          |
| Float:drawDistance | The distance from where you are able to see the 3D Text Label. |

## Returns

This function always returns true.

## Examples

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, false);

Set3DTextLabelDrawDistance(gMyLabel, 20.0);
// The draw distance changed from 10.0 to 20.0
```

## Related Functions

- [Get3DTextLabelDrawDistance](Get3DTextLabelDrawDistance): Gets the 3D text label draw distance.
- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): Sets the player 3D text label draw distance.
