---
title: GetPlayer3DTextLabelColour
sidebar_label: GetPlayer3DTextLabelColour
description: Gets the player's 3D text label colour.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the player's 3D text label colour.

| Name                | Description                                                |
| ------------------- | ---------------------------------------------------------- |
| playerid            | The ID of the player.                                      |
| PlayerText3D:textid | The ID of the player's 3D text label to get the colour of. |

## Returns

Returns the player's 3D text label colour.

## Examples

```c
new PlayerText3D:playerTextId;
new Float:x, Float:y, Float:z;
new colour;

GetPlayerPos(playerid, x, y, z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, x, y, z, 40.0);

colour = GetPlayer3DTextLabelColour(playerid, playerTextId);
// colour = 0x008080FF
```

## Related Functions

- [Get3DTextLabelColour](Get3DTextLabelColour): Gets the 3D text label colour.
