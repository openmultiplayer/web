---
title: GetPlayer3DTextLabelPos
description: Gets the player's 3D text label position.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the player's 3D text label position.

| Name      | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| playerid | The ID of the player.  |
| PlayerText3D:textid | The ID of the player's 3D text label to get the position of. |
| &Float:x | An float variable into which to store the X coordinate, passed by reference. |
| &Float:y | An float variable into which to store the Y coordinate, passed by reference. |
| &Float:z | An float variable into which to store the Z coordinate, passed by reference. |

## Examples

```c
new PlayerText3D:playerTextId;
new Float:playerX, Float:playerY, Float:playerZ;

GetPlayerPos(playerid, playerX, playerY, playerZ);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, playerX, playerY, playerZ, 40.0);

new Float:x, Float:y, Float:z;
GetPlayer3DTextLabelPos(playerid, playerTextId, x, y, z);
```

## Related Functions

- [Get3DTextLabelPos](Get3DTextLabelPos): Gets the 3D text label position.
