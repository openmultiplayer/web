---
title: TextDrawSetSelectable
description: Sets whether a textdraw can be selected (clicked on) or not.
tags: ["textdraw"]
---

# TextDrawSetSelectable

<TagLinks />

::: warning

This function was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

Sets whether a textdraw can be selected (clicked on) or not

| Name | Description                                              |
| ---- | -------------------------------------------------------- |
| text | The ID of the textdraw to make selectable.               |
| set  | 1 to make it selectable, or 0 to make it not selectable. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if(!strcmp(cmdtext, "/selectd", true))
    {
        for(new i = 0; i < MAX_TEXT_DRAWS; i++) TextDrawSetSelectable(Text:i, 1);
        SendClientMessage(playerid, 0xFFFFFFAA, "SERVER: All textdraws can be selected now!");
        return 1;
    }
    return 0;
}
```

## Notes

::: tip

Use TextDrawTextSize to define the clickable area.

:::

::: warning

TextDrawSetSelectable must be used BEFORE the textdraw is shown to players for it to be selectable.

:::

## Related Functions

- SelectTextDraw: Enables the mouse, so the player can select a textdraw
- CancelSelectTextDraw: Cancel textdraw selection with the mouse
- OnPlayerClickTextDraw: Called when a player clicks on a textdraw.
