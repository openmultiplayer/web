---
title: GetPlayer3DTextLabelColor
description: Gets the player's 3D text label color.
tags: ["player", "3dtextlabel"]
---

:::warning

This function is deprecated. Please see [GetPlayer3DTextLabelColour](GetPlayer3DTextLabelColour).

:::

## Description

Gets the player's 3D text label color.

| Name                | Description                                               |
| ------------------- | --------------------------------------------------------- |
| playerid            | The ID of the player.                                     |
| PlayerText3D:textid | The ID of the player's 3D text label to get the color of. |

## Returns

Returns the player's 3D text label color.

## Examples

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new color;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

color = GetPlayer3DTextLabelColor(playerid, playerTextId);
// color = 0x008080FF
```

## Related Functions

- [Get3DTextLabelColor](Get3DTextLabelColor): Gets the 3D text label color.
