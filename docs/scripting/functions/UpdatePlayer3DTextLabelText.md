---
title: "UpdatePlayer3DTextLabelText | open.mp"
description: "Updates a player 3D Text Label's text and color."
canonical: https://open.mp/docs/scripting/functions/UpdatePlayer3DTextLabelText
language: en
---

# UpdatePlayer3DTextLabelText

## Description

Updates a player 3D Text Label's text and color

| Name | Description |
| --- | --- |
| playerid | The ID of the player for which the 3D Text Label was created. |
| PlayerText3D:textid | The 3D Text Label you want to update. |
| colour | The color the 3D Text Label should have from now on. |
| const text\[\] | The new text which the 3D Text Label should have from now on. |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

This function does not return any specific values.

## Notes

warning

If text\[\] is empty, the server/clients next to the text might crash! (Fixed in open.mp)

## Related Functions

-   [CreatePlayer3DTextLabel](https://open.mp/docs/scripting/functions/CreatePlayer3DTextLabel): Create A 3D text label for one player.
-   [DeletePlayer3DTextLabel](https://open.mp/docs/scripting/functions/DeletePlayer3DTextLabel): Delete a player's 3D text label.
-   [GetPlayer3DTextLabelText](https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelText): Gets the player's 3D text label text.
-   [GetPlayer3DTextLabelColour](https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelColour): Gets the player's 3D text label colour.
-   [Update3DTextLabelText](https://open.mp/docs/scripting/functions/Update3DTextLabelText): Change the text of a 3D text label.
