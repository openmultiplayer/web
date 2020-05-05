---
id: TextDrawDestroy
title: TextDrawDestroy
description: Destroys a previously-created textdraw.
tags: ["textdraw"]
---

## Description

Destroys a previously-created textdraw.

| Name | Description                                                    |
| ---- | -------------------------------------------------------------- |
| text | The ID of the textdraw to destroy. Returned by TextDrawCreate. |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:textdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    textdraw[playerid] = TextDrawCreate(...);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    TextDrawDestroy(textdraw[playerid]);
    return 1;
}
```

## Related Functions

- TextDrawCreate: Create a textdraw.
- TextDrawColor: Set the color of the text in a textdraw.
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
