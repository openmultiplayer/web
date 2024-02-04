---
title: PlayerTextDrawGetPreviewVehCol
description: Gets the preview vehicle colors of a 3D preview player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the preview vehicle colors of a 3D preview player-textdraw.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| playerid | The ID of the player. |
| PlayerText:textid  | The ID of the player-textdraw to get the vehicle colors of. |
| &colour1  | A variable into which to store the colour1, passed by reference. |
| &colour2  | A variable into which to store the colour2, passed by reference. |

## Examples

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playeird, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, pTextdraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, pTextdraw[playerid], true);
    PlayerTextDrawBoxColor(playerid, pTextdraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, pTextdraw[playerid], 40.0, 40.0);
    PlayerTextDrawSetPreviewModel(playerid, pTextdraw[playerid], 411);
    PlayerTextDrawSetPreviewVehCol(playerid, pTextdraw[playerid], 6, 8);

    new colour1, colour2;
    PlayerTextDrawGetPreviewVehCol(playerid, pTextdraw[playerid], colour1, colour2);
    // The `colour1` will be 6 and `colour2` will be 8
    return 1;
}
```

## Related Functions

- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): Set model ID of a 3D player textdraw preview.
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): Set rotation of a 3D player textdraw preview.
- [PlayerTextDrawFont](PlayerTextDrawFont): Set the font of a player-textdraw.
- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Called when a player clicks on a player-textdraw.
