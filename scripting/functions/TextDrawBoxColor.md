# TextDrawBoxColor

## Description

Adjusts the text box colour (only used if TextDrawUseBox 'use' parameter is 1).

| Name  | Description                                                                                                                                                                    |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| text  | The TextDraw to change                                                                                                                                                         |
| color | The colour. Opacity is set by the alpha intensity of colour (eg. color 0x000000FF has a solid black box opacity, whereas 0x000000AA has a semi-transparent black box opacity). |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:Example;

public OnGameModeInit()
{
    Example = TextDrawCreate(123.0, 123.0,"Example");
    TextDrawUseBox(Example, 1);
    TextDrawBoxColor(Example, 0xFFFFFFFF);
    return 1;
}
```

## Notes

::: tip

If you want to change the boxcolour of a textdraw that is already shown, you don't have to recreate it. Simply use TextDrawShowForPlayer/TextDrawShowForAll after modifying the textdraw and the change will be visible.

:::

## Related Functions

- TextDrawCreate: Create a textdraw.
- TextDrawDestroy: Destroy a textdraw.
- TextDrawColor: Set the color of the text in a textdraw.
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
