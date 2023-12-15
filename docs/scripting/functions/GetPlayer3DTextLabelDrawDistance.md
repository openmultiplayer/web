---
title: GetPlayer3DTextLabelDrawDistance
description: Gets the player's 3D text label draw distance.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the player's 3D text label draw distance.

| Name      | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| playerid | The ID of the player.  |
| PlayerText3D:textid | The ID of the player's 3D text label to get the draw distance of. |

## Returns

Returns the draw distance of the player's 3D text label as float.

## Examples

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new Float:drawdistance;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

drawdistance = GetPlayer3DTextLabelDrawDistance(playerid, playerTextId);
// The `drawdistance` will be 40.0
```

## Related Functions

- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): Sets the player's 3D text label draw distance.
- [Get3DTextLabelDrawDistance](Get3DTextLabelDrawDistance): Gets the 3D text label draw distance.
