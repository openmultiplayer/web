---
title: TextDrawUseBox
description: Toggle whether a textdraw uses a box or not.
tags: ["textdraw"]
---

## Description

Toggle whether a textdraw uses a box or not.

| Name | Description                                       |
| ---- | ------------------------------------------------- |
| text | The ID of the text textdraw to toggle the box of. |
| use  | 1 to show a box or 0 to not show a box.           |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the textdraw specified does not exist.

## Examples

```c
new Text: gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawUseBox(gMyTextdraw, 1); // Toggle box ON
    return 1;
}
```

## Notes

:::tip

If the textdraw is already shown, it must be re-shown (TextDrawShowForAll/TextDrawShowForPlayer) to show the changes of this function.

:::

## Related Functions

- [TextDrawCreate](TextDrawCreate.md): Create a textdraw.
- [TextDrawDestroy](TextDrawDestroy.md): Destroy a textdraw.
- [TextDrawColor](TextDrawColor.md): Set the color of the text in a textdraw.
- [TextDrawBoxColor](TextDrawBoxColor.md): Set the color of the box in a textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor.md): Set the background color of a textdraw.
- [TextDrawAlignment](TextDrawAlignment.md): Set the alignment of a textdraw.
- [TextDrawFont](TextDrawFont.md): Set the font of a textdraw.
- [TextDrawLetterSize](TextDrawLetterSize.md): Set the letter size of the text in a textdraw.
- [TextDrawTextSize](TextDrawTextSize.md): Set the size of a textdraw box.
- [TextDrawSetOutline](TextDrawSetOutline.md): Choose whether the text has an outline.
- [TextDrawSetShadow](TextDrawSetShadow.md): Toggle shadows on a textdraw.
- [TextDrawSetProportional](TextDrawSetProportional.md): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawSetString](TextDrawSetString.md): Set the text in an existing textdraw.
- [TextDrawShowForPlayer](TextDrawShowForPlayer.md): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer.md): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll.md): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll.md): Hide a textdraw for all players.
