# TextDrawSetOutline

## Description

Sets the thickness of a textdraw's text's outline. TextDrawBackgroundColor can be used to change the color.

| Name | Description                                                    |
| ---- | -------------------------------------------------------------- |
| text | The ID of the text draw to set the outline thickness of.       |
| size | The thickness of the outline, as an integer. 0 for no outline. |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:MyTextdraw;

public OnGameModeInit()
{
    MyTextDraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawSetOutline(MyTextDraw, 1);
    return 1;
}
```

## Notes

::: tip

If you want to change the outline of a textdraw that is already shown, you don't have to recreate it. Simply use TextDrawShowForPlayer/TextDrawShowForAll after modifying the textdraw and the change will be visible.

:::

## Related Functions

- TextDrawCreate: Create a textdraw.
- TextDrawDestroy: Destroy a textdraw.
- TextDrawColor: Set the color of the text in a textdraw.
- TextDrawBoxColor: Set the color of the box in a textdraw.
- TextDrawBackgroundColor: Set the background color of a textdraw.
- TextDrawAlignment: Set the alignment of a textdraw.
- TextDrawFont: Set the font of a textdraw.
- TextDrawLetterSize: Set the letter size of the text in a textdraw.
- TextDrawTextSize: Set the size of a textdraw box.
- TextDrawSetShadow: Toggle shadows on a textdraw.
- TextDrawSetProportional: Scale the text spacing in a textdraw to a proportional ratio.
- TextDrawUseBox: Toggle if the textdraw has a box or not.
- TextDrawSetString: Set the text in an existing textdraw.
- TextDrawShowForPlayer: Show a textdraw for a certain player.
- TextDrawHideForPlayer: Hide a textdraw for a certain player.
- TextDrawShowForAll: Show a textdraw for all players.
- TextDrawHideForAll: Hide a textdraw for all players.
