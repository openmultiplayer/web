---
title: GetPlayer3DTextLabelLOS
sidebar_label: GetPlayer3DTextLabelLOS
description: Gets the player's 3D text label line-of-sight.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the player's 3D text label line-of-sight.

| Name                | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| playerid            | The ID of the player.                                             |
| PlayerText3D:textid | The ID of the player's 3D text label to get the line-of-sight of. |

## Returns

Returns the line-of-sight of the player's 3D text label as boolean (false/true).

## Examples

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new bool:testLOS;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0, INVALID_PLAYER_ID, INVALID_VEHICLE_ID, true);

testLOS = GetPlayer3DTextLabelLOS(playerid, playerTextId);
// testLOS = true
```

## Related Functions

- [SetPlayer3DTextLabelLOS](SetPlayer3DTextLabelLOS): Sets the player's 3D text label line-of-sight.
- [Get3DTextLabelLOS](Get3DTextLabelLOS): Gets the 3D text label line-of-sight.
