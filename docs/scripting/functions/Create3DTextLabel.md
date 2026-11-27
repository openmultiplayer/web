---
title: "Create3DTextLabel | open.mp"
description: "Creates a 3D Text Label at a specific location in the world."
canonical: https://open.mp/docs/scripting/functions/Create3DTextLabel
language: en
---

# Create3DTextLabel

## Description

Creates a 3D Text Label at a specific location in the world

| Name | Description |
| --- | --- |
| const text\[\] | The initial text string. |
| colour | The text Color, as an integer or hex in **RGBA** color format |
| Float:x | X-Coordinate |
| Float:y | Y-Coordinate |
| Float:z | Z-Coordinate |
| Float:drawDistance | The distance from where you are able to see the 3D Text Label |
| virtualWorld | The virtual world in which you are able to see the 3D Text |
| bool:testLOS | Test the line-of-sight so this text can't be seen through objects (true/false) |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

The ID of the newly created 3D Text Label, or `INVALID_3DTEXT_ID` if the 3D Text Label limit (`MAX_3DTEXT_GLOBAL`) was reached.

## Examples

```c
public OnGameModeInit()
{
    Create3DTextLabel("I'm at the coordinates:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/mark", true))
    {
        new name[MAX_PLAYER_NAME];
        new Float:x, Float:y, Float:z;
        new worldid;

        GetPlayerName(playerid, name, sizeof(name));
        GetPlayerPos(playerid, x, y, z);
        worldid = GetPlayerVirtualWorld(playerid);

        Create3DTextLabel("%s marked this place", 0xFF0000FF, x, y, z, 15.0, worldid, false, name);
        return 1;
    }
    return 0;
}
```

## Notes

note

drawDistance seems to be a lot smaller when spectating.

tip

-   Use [colour embedding](https://open.mp/docs/scripting/resources/colorslist#color-embedding) for multiple colours in the text.
-   To remove the background use colour with [transparency](https://open.mp/docs/scripting/resources/colorslist#alpha-values-transparency) less than 0xFF.

warning

-   If text\[\] is empty, the server/clients next to the text might crash! (Fixed in open.mp)
-   If the virtualworld is set as -1 the text will not appear.

## Related Functions

-   [Delete3DTextLabel](https://open.mp/docs/scripting/functions/Delete3DTextLabel): Delete a 3D text label.
-   [IsValid3DTextLabel](https://open.mp/docs/scripting/functions/IsValid3DTextLabel): Checks if a 3D text label is valid.
-   [Is3DTextLabelStreamedIn](https://open.mp/docs/scripting/functions/Is3DTextLabelStreamedIn): Checks if a 3D text label is streamed in for a player.
-   [Attach3DTextLabelToPlayer](https://open.mp/docs/scripting/functions/Attach3DTextLabelToPlayer): Attach a 3D text label to a player.
-   [Attach3DTextLabelToVehicle](https://open.mp/docs/scripting/functions/Attach3DTextLabelToVehicle): Attach a 3D text label to a vehicle.
-   [Update3DTextLabelText](https://open.mp/docs/scripting/functions/Update3DTextLabelText): Change the text of a 3D text label.
-   [Get3DTextLabelText](https://open.mp/docs/scripting/functions/Get3DTextLabelText): Gets the 3D text label text.
-   [Get3DTextLabelColour](https://open.mp/docs/scripting/functions/Get3DTextLabelColour): Gets the 3D text label colour.
-   [Get3DTextLabelPos](https://open.mp/docs/scripting/functions/Get3DTextLabelPos): Gets the 3D text label position.
-   [Get3DTextLabelDrawDistance](https://open.mp/docs/scripting/functions/Get3DTextLabelDrawDistance): Gets the 3D text label draw distance.
-   [Set3DTextLabelDrawDistance](https://open.mp/docs/scripting/functions/Set3DTextLabelDrawDistance): Sets the 3D text label draw distance.
-   [Get3DTextLabelVirtualWorld](https://open.mp/docs/scripting/functions/Get3DTextLabelVirtualWorld): Gets the 3D text label virtual world id.
-   [Set3DTextLabelVirtualWorld](https://open.mp/docs/scripting/functions/Set3DTextLabelVirtualWorld): Sets the 3D text label virtual world id.
-   [Get3DTextLabelLOS](https://open.mp/docs/scripting/functions/Get3DTextLabelLOS): Gets the 3D text label line-of-sight.
-   [Set3DTextLabelLOS](https://open.mp/docs/scripting/functions/Set3DTextLabelLOS): Sets the 3D text label line-of-sight.
-   [CreatePlayer3DTextLabel](https://open.mp/docs/scripting/functions/CreatePlayer3DTextLabel): Create A 3D text label for one player.
-   [DeletePlayer3DTextLabel](https://open.mp/docs/scripting/functions/DeletePlayer3DTextLabel): Delete a player's 3D text label.
-   [UpdatePlayer3DTextLabelText](https://open.mp/docs/scripting/functions/UpdatePlayer3DTextLabelText): Change the text of a player's 3D text label.
