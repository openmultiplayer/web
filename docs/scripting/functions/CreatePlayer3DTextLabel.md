---
title: CreatePlayer3DTextLabel
description: Creates a 3D Text Label only for a specific player.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Creates a 3D Text Label only for a specific player

| Name             | Description                                                                     |
|------------------|---------------------------------------------------------------------------------|
| playerid         | The player which should see the newly created 3DText Label.                     |
| text[]           | The text to display.                                                            |
| color            | The text color                                                                  |
| x                | X Coordinate (or offset if attached)                                            |
| y                | Y Coordinate (or offset if attached)                                            |
| z                | Z Coordinate (or offset if attached)                                            |
| DrawDistance     | The distance where you are able to see the 3D Text Label                        |
| attachedplayer   | The player you want to attach the 3D Text Label to. (None: INVALID_PLAYER_ID)   |
| attachedvehicle  | The vehicle you want to attach the 3D Text Label to. (None: INVALID_VEHICLE_ID) |
| testLOS          | 0/1 Test the line-of-sight so this text can't be seen through walls             |
| OPEN_MP_TAGS:... | Indefinite number of arguments of any tag.                                      |

## Returns

The ID of the newly created Player 3D Text Label, or INVALID_3DTEXT_ID if the Player 3D Text Label limit (MAX_3DTEXT_PLAYER) was reached.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/playerlabel", true))
    {
        new
            PlayerText3D: playerTextId,
            name[MAX_PLAYER_NAME],
            Float: X, Float: Y, Float: Z;

        GetPlayerName(playerid, name, sizeof(name));
        GetPlayerPos(playerid, X, Y, Z);

        playerTextId = CreatePlayer3DTextLabel(playerid, "Hello %s!\nI'm at your position", 0x008080FF, X, Y, Z, 40.0, name);
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

drawdistance seems to be a lot smaller when spectating.

:::

:::warning

If text[] is empty, the server/clients next to the text might crash!

:::

## Related Functions

- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Delete a player's 3D text label.
- [IsValidPlayer3DTextLabel](IsValidPlayer3DTextLabel): Checks if a player's 3D text label is valid.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Change the text of a player's 3D text label.
- [GetPlayer3DTextLabelText](GetPlayer3DTextLabelText): Gets the player's 3D text label text.
- [GetPlayer3DTextLabelColour](GetPlayer3DTextLabelColour): Gets the player's 3D text label colour.
- [GetPlayer3DTextLabelPos](GetPlayer3DTextLabelPos): Gets the player's 3D text label position.
- [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance): Gets the player's 3D text label draw distance.
- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): Sets the player's 3D text label draw distance.
- [GetPlayer3DTextLabelVirtualWorld](GetPlayer3DTextLabelVirtualWorld): Gets the player's 3D text label virtual world id.
- [SetPlayer3DTextLabelVirtualWorld](SetPlayer3DTextLabelVirtualWorld): Sets the player's 3D text label virtual world id.
- [GetPlayer3DTextLabelLOS](GetPlayer3DTextLabelLOS): Gets the player's 3D text label line-of-sight.
- [SetPlayer3DTextLabelLOS](SetPlayer3DTextLabelLOS): Sets the player's 3D text label line-of-sight.
- [Create3DTextLabel](Create3DTextLabel): Create a global 3D text label.