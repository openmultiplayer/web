---
title: GetPlayer3DTextLabelDrawDist
description: Gets the player's 3D text label draw distance.
tags: ["player", "3dtextlabel"]
---

:::warning

This function is deprecated. Please see [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance).

:::

## Description

Gets the player's 3D text label draw distance.

| Name                | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| playerid            | The ID of the player.                                             |
| PlayerText3D:textid | The ID of the player's 3D text label to get the draw distance of. |

## Returns

Returns the draw distance of the player's 3D text label as float.

## Examples

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new Float:drawDistance;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

drawDistance = GetPlayer3DTextLabelDrawDist(playerid, playerTextId);
// drawDistance = 40.0
```

## Notes

:::tip

This function is just short name of [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance).

:::

## Related Functions

- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): Sets the player's 3D text label draw distance.
- [Get3DTextLabelDrawDistance](Get3DTextLabelDrawDistance): Gets the 3D text label draw distance.
