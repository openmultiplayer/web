---
title: UpdatePlayer3DTextLabelText
sidebar_label: UpdatePlayer3DTextLabelText
description: Updates a player 3D Text Label's text and color.
tags: ["player", "3dtextlabel"]
---

## Description

Updates a player 3D Text Label's text and color

| Name                | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| playerid            | The ID of the player for which the 3D Text Label was created. |
| PlayerText3D:textid | The 3D Text Label you want to update.                         |
| colour              | The color the 3D Text Label should have from now on.          |
| const text[]        | The new text which the 3D Text Label should have from now on. |
| OPEN_MP_TAGS:...    | Indefinite number of arguments of any tag.                    |

## Returns

This function does not return any specific values.

## Notes

:::warning

If text[] is empty, the server/clients next to the text might crash! (Fixed in open.mp)

:::

## Related Functions

- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Create A 3D text label for one player.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Delete a player's 3D text label.
- [GetPlayer3DTextLabelText](GetPlayer3DTextLabelText): Gets the player's 3D text label text.
- [GetPlayer3DTextLabelColour](GetPlayer3DTextLabelColour): Gets the player's 3D text label colour.
- [Update3DTextLabelText](Update3DTextLabelText): Change the text of a 3D text label.
