---
title: "Update3DTextLabelText | open.mp"
description: "Updates a 3D Text Label text and color."
canonical: https://open.mp/docs/scripting/functions/Update3DTextLabelText
language: en
---

# Update3DTextLabelText

## Description

Updates a 3D Text Label text and color.

| Name | Description |
| --- | --- |
| Text3D:textid | The 3D Text Label you want to update. |
| colour | The color the 3D Text Label should have from now on. |
| const text\[\] | The new text which the 3D Text Label should have from now on. |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

This function does not return any specific values.

## Examples

```c
new Text3D:mylabel;

public OnGameModeInit()
{
    mylabel = Create3DTextLabel("I'm at the coordinates:\n30.0,40.0,50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);

    Update3DTextLabelText(mylabel, 0xFF0000FF, "New text.");
    return 1;
}
```

## Notes

warning

If text\[\] is empty, the server/clients next to the text might crash! (Fixed in open.mp)

## Related Functions

-   [Create3DTextLabel](https://open.mp/docs/scripting/functions/Create3DTextLabel): Create a 3D text label.
-   [Delete3DTextLabel](https://open.mp/docs/scripting/functions/Delete3DTextLabel): Delete a 3D text label.
-   [Get3DTextLabelText](https://open.mp/docs/scripting/functions/Get3DTextLabelText): Gets the 3D text label text.
-   [Get3DTextLabelColour](https://open.mp/docs/scripting/functions/Get3DTextLabelColour): Gets the 3D text label colour.
-   [Attach3DTextLabelToPlayer](https://open.mp/docs/scripting/functions/Attach3DTextLabelToPlayer): Attach a 3D text label to a player.
-   [Attach3DTextLabelToVehicle](https://open.mp/docs/scripting/functions/Attach3DTextLabelToVehicle): Attach a 3D text label to a vehicle.
-   [CreatePlayer3DTextLabel](https://open.mp/docs/scripting/functions/CreatePlayer3DTextLabel): Create A 3D text label for one player.
-   [DeletePlayer3DTextLabel](https://open.mp/docs/scripting/functions/DeletePlayer3DTextLabel): Delete a player's 3D text label.
-   [UpdatePlayer3DTextLabelText](https://open.mp/docs/scripting/functions/UpdatePlayer3DTextLabelText): Change the text of a player's 3D text label.
