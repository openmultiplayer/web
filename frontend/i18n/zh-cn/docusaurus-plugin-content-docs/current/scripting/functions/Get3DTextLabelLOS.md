---
title: Get3DTextLabelLOS
description: Gets the 3D text label line-of-sight.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the 3D text label line-of-sight.

| Name          | Description                                              |
| ------------- | -------------------------------------------------------- |
| Text3D:textid | The ID of the 3D text label to get the line-of-sight of. |

## Returns

Returns the line-of-sight of the 3D text label as boolean (`false`/`true`).

## Examples

```c
new Text3D:gMyLabel;
new bool:testLOS;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, true);

testLOS = Get3DTextLabelLOS(gMyLabel);
// testLOS = true
```

## Related Functions

- [Set3DTextLabelLOS](Set3DTextLabelLOS): Sets the 3D text label line-of-sight.
- [GetPlayer3DTextLabelLOS](GetPlayer3DTextLabelLOS): Gets the player 3D text label line-of-sight.
