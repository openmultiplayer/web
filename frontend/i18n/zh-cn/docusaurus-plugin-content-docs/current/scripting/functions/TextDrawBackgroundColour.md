---
title: TextDrawBackgroundColour
description: Adjusts the text draw area background colour (the outline/shadow - NOT the box.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Adjusts the text draw area background colour (the outline/shadow - NOT the box. For box colour, see [TextDrawBoxColour](TextDrawBoxColour)).

| Name             | Description                                            |
| ---------------- | ------------------------------------------------------ |
| Text:textid      | The ID of the textdraw to set the background colour of |
| backgroundColour | The colour that the textdraw should be set to.         |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBackgroundColour(gMyTextdraw, 0xFFFFFFFF); // Set the background colour of gMyTextdraw to white
    return 1;
}
```

## Notes

:::tip

If [TextDrawSetOutline](TextDrawSetOutline) is used with size > 0, the outline colour will match the colour used in TextDrawBackgroundColour. Changing the value of colour seems to alter the colour used in TextDrawColour.

:::

:::tip

If you want to change the background colour of a textdraw that is already shown, you don't have to recreate it. Simply use [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) after modifying the textdraw and the change will be visible.

:::

## Related Functions

- [TextDrawCreate](TextDrawCreate): Create a textdraw.
- [TextDrawDestroy](TextDrawDestroy): Destroy a textdraw.
- [TextDrawColour](TextDrawColour): Set the colour of the text in a textdraw.
- [TextDrawBoxColour](TextDrawBoxColour): Set the colour of the box in a textdraw.
- [TextDrawAlignment](TextDrawAlignment): Set the alignment of a textdraw.
- [TextDrawFont](TextDrawFont): Set the font of a textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Set the letter size of the text in a textdraw.
- [TextDrawTextSize](TextDrawTextSize): Set the size of a textdraw box.
- [TextDrawSetOutline](TextDrawSetOutline): Choose whether the text has an outline.
- [TextDrawSetShadow](TextDrawSetShadow): Toggle shadows on a textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](TextDrawUseBox): Toggle if the textdraw has a box or not.
- [TextDrawSetString](TextDrawSetString): Set the text in an existing textdraw.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
