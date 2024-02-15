---
title: Set3DTextLabelLOS
description: Sets the 3D text label line-of-sight.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Sets the 3D text label line-of-sight.

| Name      | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| Text3D:textid | The ID of the 3D text label to set the line-of-sight. |
| testLOS      | false/true Test the line-of-sight so this text can't be seen through objects |

## Examples

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, true);

Set3DTextLabelLOS(gMyLabel, false);
// The line-of-sight changed from 'true' to 'false'
```

## Related Functions

- [Get3DTextLabelLOS](Get3DTextLabelLOS): Gets the 3D text label line-of-sight.
- [SetPlayer3DTextLabelLOS](SetPlayer3DTextLabelLOS): Sets the player 3D text label line-of-sight.
