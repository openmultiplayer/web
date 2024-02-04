---
title: GetPlayer3DTextLabelText
description: Gets the player's 3D text label text.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the player's 3D text label text.

| Name      | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| playerid | The ID of the player.  |
| PlayerText3D:textid | The ID of the player's 3D text label to get the text of. |
| text[] | An array into which to store the text, passed by reference. |
| len | The length of the text that should be stored. |

## Examples

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new text[16];

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello World!", 0x008080FF, X, Y, Z, 40.0);

GetPlayer3DTextLabelText(playerid, playerTextId, text, sizeof(text));
// The `text` will be 'Hello World!'
```

## Related Functions

- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Creates a 3D Text Label only for a specific player.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Updates a player 3D Text Label's text and colour.
- [Get3DTextLabelText](Get3DTextLabelText): Gets the 3D text label text.
