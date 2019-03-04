---
title: TextDrawColor
description: Sets the text color of a textdraw.
tags: ["textdraw"]
---

# TextDrawColor

## Description

Sets the text color of a textdraw

| Name  | Description                                     |
| ----- | ----------------------------------------------- |
| text  | The ID of the textdraw to change the color of.. |
| color | The color to set the textdraw to.               |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:Example;
 
public OnGameModeInit()
{
    Example = TextDrawCreate(123.0, 123.0, "Example");
    TextDrawColor(Example, 0x000000FF);
    return 1;
}
```

## Notes

::: tip

If the TextDraw is already shown, it must be re-shown (TextDrawShowForAll/TextDrawShowForPlayer) for the changes of this function to take effect.

:::

## Related Functions

- TextDrawCreate: Create a textdraw.
- TextDrawDestroy: Destroy a textdraw.
- TextDrawBoxColor: Set the color of the box in a textdraw.
- TextDrawBackgroundColor: Set the background color of a textdraw.
- TextDrawAlignment: Set the alignment of a textdraw.
- TextDrawFont: Set the font of a textdraw.
- TextDrawLetterSize: Set the letter size of the text in a textdraw.
- TextDrawTextSize: Set the size of a textdraw box.
- TextDrawSetOutline: Choose whether the text has an outline.
- TextDrawSetShadow: Toggle shadows on a textdraw.
- TextDrawSetProportional: Scale the text spacing in a textdraw to a proportional ratio.
- TextDrawUseBox: Toggle if the textdraw has a box or not.
- TextDrawSetString: Set the text in an existing textdraw.
- TextDrawShowForPlayer: Show a textdraw for a certain player.
- TextDrawHideForPlayer: Hide a textdraw for a certain player.
- TextDrawShowForAll: Show a textdraw for all players.
- TextDrawHideForAll: Hide a textdraw for all players.
