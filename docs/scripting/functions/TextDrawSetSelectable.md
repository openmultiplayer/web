---
title: TextDrawSetSelectable
description: Sets whether a textdraw can be selected (clicked on) or not.
tags: ["textdraw"]
---

<VersionWarn version='SA-MP 0.3e' />

## Description

Sets whether a textdraw can be selected (clicked on) or not

| Name     | Description                                                         |
|----------|---------------------------------------------------------------------|
| text     | The ID of the textdraw to make selectable.                          |
| bool:set | 'true' to make it selectable, or 'false' to make it not selectable. |

## Returns

This function does not return any specific values.

## Examples

```c
new Text: gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawTextSize(gMyTextdraw, 30.0, 10.0);
    TextDrawSetSelectable(gMyTextdraw, true);
    return 1;
}
```

## Notes

:::tip

Use [TextDrawTextSize](TextDrawTextSize) to define the clickable area.

:::

:::warning

TextDrawSetSelectable must be used BEFORE the textdraw is shown to players for it to be selectable.

:::

## Related Functions

- [TextDrawIsSelectable](TextDrawIsSelectable): Checks if a textdraw is selectable.
- [SelectTextDraw](SelectTextDraw): Enables the mouse, so the player can select a textdraw
- [CancelSelectTextDraw](CancelSelectTextDraw): Cancel textdraw selection with the mouse

## Related Callbacks

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Called when a player clicks on a textdraw.
