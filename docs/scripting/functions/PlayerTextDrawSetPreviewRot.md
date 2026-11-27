---
title: "PlayerTextDrawSetPreviewRot | open.mp"
description: "Sets the rotation and zoom of a 3D model preview player-textdraw."
canonical: https://open.mp/docs/scripting/functions/PlayerTextDrawSetPreviewRot
language: en
---

# PlayerTextDrawSetPreviewRot

## Description

Sets the rotation and zoom of a 3D model preview player-textdraw.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player-textdraw to change. |
| PlayerText:textid | The ID of the player-textdraw to change. |
| Float:rotX | The X rotation value. |
| Float:rotY | The Y rotation value. |
| Float:rotZ | The Z rotation value. |
| Float:zoom | The zoom value, default value 1.0, smaller values make the camera closer and larger values make the camera further away. |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, gMyTextdraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], 1);
    PlayerTextDrawBoxColor(playerid, gMyTextdraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, gMyTextdraw[playerid], 40.0, 40.0);
    PlayerTextDrawSetPreviewModel(playerid, gMyTextdraw[playerid], 411);
    PlayerTextDrawSetPreviewRot(playerid, gMyTextdraw[playerid], -10.0, 0.0, -20.0, 1.0);

    PlayerTextDrawShow(playerid, gMyTextdraw[playerid]);
    return 1;
}
```

## Notes

warning

The textdraw MUST use the font type `TEXT_DRAW_FONT_MODEL_PREVIEW` and already have a model set in order for this function to have effect.

## Related Functions

-   [TextDrawSetPreviewRot](https://open.mp/docs/scripting/functions/TextDrawSetPreviewRot): Set rotation of a 3D textdraw preview.
-   [PlayerTextDrawSetPreviewModel](https://open.mp/docs/scripting/functions/PlayerTextDrawSetPreviewModel): Set model ID of a 3D player textdraw preview.
-   [PlayerTextDrawSetPreviewVehCol](https://open.mp/docs/scripting/functions/PlayerTextDrawSetPreviewVehCol): Set the colours of a vehicle in a 3D player textdraw preview.
-   [PlayerTextDrawFont](https://open.mp/docs/scripting/functions/PlayerTextDrawFont): Set the font of a player-textdraw.

## Related Callbacks

-   [OnPlayerClickPlayerTextDraw](https://open.mp/docs/scripting/callbacks/OnPlayerClickPlayerTextDraw): Called when a player clicks on a player-textdraw.
