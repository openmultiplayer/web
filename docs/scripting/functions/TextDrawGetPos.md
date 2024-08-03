---
title: TextDrawGetPos
description: Gets the position of a textdraw.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the position (in-screen x & y) of a textdraw.

| Name        | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| Text:textid | The ID of the textdraw to get the position of.                          |
| &Float:x    | A float variable into which to store X coordinate, passed by reference. |
| &Float:y    | A float variable into which to store Y coordinate, passed by reference. |

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    
    new Float:x, Float:y;
    TextDrawGetPos(gMyTextdraw, x, y);
    // The `x` will be '100.0' and `y` will be '33.0'
    return 1;
}
```

## Related Functions

- [TextDrawCreate](TextDrawCreate): Create a textdraw.
- [TextDrawDestroy](TextDrawDestroy): Destroy a textdraw.
- [TextDrawSetPos](TextDrawSetPos): Sets the position of a textdraw.
- [TextDrawColor](TextDrawColor): Set the color of the text in a textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Set the color of the box in a textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Set the background color of a textdraw.
- [TextDrawAlignment](TextDrawAlignment): Set the alignment of a textdraw.
- [TextDrawFont](TextDrawFont): Set the font of a textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Set the letter size of the text in a textdraw.
- [TextDrawTextSize](TextDrawTextSize): Set the size of a textdraw box.
- [TextDrawSetOutline](TextDrawSetOutline): Choose whether the text has an outline.
- [TextDrawSetProportional](TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](TextDrawUseBox): Toggle if the textdraw has a box or not.
- [TextDrawSetString](TextDrawSetString): Set the text in an existing textdraw.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
