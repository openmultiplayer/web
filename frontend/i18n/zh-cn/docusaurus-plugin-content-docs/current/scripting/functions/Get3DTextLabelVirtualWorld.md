---
title: Get3DTextLabelVirtualWorld
sidebar_label: Get3DTextLabelVirtualWorld
description: Gets the 3D text label virtual world id.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the 3D text label virtual world id.

| Name          | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| Text3D:textid | The ID of the 3D text label to get the virtual world id of. |

## Returns

Returns the virtual world id of the 3D text label.

## Examples

```c
new Text3D:gMyLabel;
new worldid;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 20, false);

worldid = Get3DTextLabelVirtualWorld(gMyLabel);
// worldid = 20
```

## Related Functions

- [Set3DTextLabelVirtualWorld](Set3DTextLabelVirtualWorld): Sets the 3D text label virtual world id.
- [GetPlayer3DTextLabelVirtualWorld](GetPlayer3DTextLabelVirtualWorld): Gets the player 3D text label virtual world id.
