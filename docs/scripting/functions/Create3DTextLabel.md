---
title: Create3DTextLabel
description: Creates a 3D Text Label at a specific location in the world.
tags: ["3dtextlabel"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Creates a 3D Text Label at a specific location in the world

| Name             | Description                                                                    |
|------------------|--------------------------------------------------------------------------------|
| text[]           | The initial text string.                                                       |
| color            | The text Color, as an integer or hex in RGBA color format                      |
| x                | X-Coordinate                                                                   |
| y                | Y-Coordinate                                                                   |
| z                | Z-Coordinate                                                                   |
| DrawDistance     | The distance from where you are able to see the 3D Text Label                  |
| VirtualWorld     | The virtual world in which you are able to see the 3D Text                     |
| testLOS          | Test the line-of-sight so this text can't be seen through objects (true/false) |
| OPEN_MP_TAGS:... | Indefinite number of arguments of any tag.                                     |

## Returns

The ID of the newly created 3D Text Label, or INVALID_3DTEXT_ID if the 3D Text Label limit (MAX_3DTEXT_GLOBAL) was reached.

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

:::tip

drawdistance seems to be a lot smaller when spectating.

:::

:::tip

Use color embedding for multiple colors in the text.

:::

:::warning

If text[] is empty, the server/clients next to the text might crash! If the virtualworld is set as -1 the text will not appear.

:::

## Related Functions

- [Delete3DTextLabel](Delete3DTextLabel): Delete a 3D text label.
- [IsValid3DTextLabel](IsValid3DTextLabel): Checks if a 3D text label is valid.
- [Is3DTextLabelStreamedIn](Is3DTextLabelStreamedIn): Checks if a 3D text label is streamed in for a player.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Attach a 3D text label to a player.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Attach a 3D text label to a vehicle.
- [Update3DTextLabelText](Update3DTextLabelText): Change the text of a 3D text label.
- [Get3DTextLabelText](Get3DTextLabelText): Gets the 3D text label text.
- [Get3DTextLabelColour](Get3DTextLabelColour): Gets the 3D text label colour.
- [Get3DTextLabelPos](Get3DTextLabelPos): Gets the 3D text label position.
- [Get3DTextLabelDrawDistance](Get3DTextLabelDrawDistance): Gets the 3D text label draw distance.
- [Set3DTextLabelDrawDistance](Set3DTextLabelDrawDistance): Sets the 3D text label draw distance.
- [Get3DTextLabelVirtualWorld](Get3DTextLabelVirtualWorld): Gets the 3D text label virtual world id.
- [Set3DTextLabelVirtualWorld](Set3DTextLabelVirtualWorld): Sets the 3D text label virtual world id.
- [Get3DTextLabelLOS](Get3DTextLabelLOS): Gets the 3D text label line-of-sight.
- [Set3DTextLabelLOS](Set3DTextLabelLOS): Sets the 3D text label line-of-sight.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Create A 3D text label for one player.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Delete a player's 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Change the text of a player's 3D text label.
