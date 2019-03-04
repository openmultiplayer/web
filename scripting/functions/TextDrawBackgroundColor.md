---
title: TextDrawBackgroundColor
description: Adjusts the text draw area background color (the outline/shadow - NOT the box.
tags: ["textdraw"]
---

# TextDrawBackgroundColor

## Description

Adjusts the text draw area background color (the outline/shadow - NOT the box. For box color, see TextDrawBoxColor).

| Name  | Description                                           |
| ----- | ----------------------------------------------------- |
| text  | The ID of the textdraw to set the background color of |
| color | The color that the textdraw should be set to.         |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:MyTextdraw;
 
public OnGameModeInit()
{
    MyTextdraw= TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawUseBox(MyTextdraw, 1);
    TextDrawBackgroundColor(MyTextdraw, 0xFFFFFFFF); // Set the background color of MyTextdraw to white
    return 1;
}
```

## Notes

::: tip

If TextDrawSetOutline is used with size > 0, the outline color will match the color used in TextDrawBackgroundColor. Changing the value of color seems to alter the color used in TextDrawColor

:::

::: tip

If you want to change the background colour of a textdraw that is already shown, you don't have to recreate it. Simply use TextDrawShowForPlayer/TextDrawShowForAll after modifying the textdraw and the change will be visible.

:::

## Related Functions

- TextDrawCreate: Create a textdraw.
- TextDrawDestroy: Destroy a textdraw.
- TextDrawColor: Set the color of the text in a textdraw.
- TextDrawBoxColor: Set the color of the box in a textdraw.
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
