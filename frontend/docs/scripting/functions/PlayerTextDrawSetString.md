---
title: PlayerTextDrawSetString
sidebar_label: PlayerTextDrawSetString
description: Change the text of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

## Description

Change the text of a player-textdraw.

| Name              | Description                                       |
| ----------------- | ------------------------------------------------- |
| playerid          | The ID of the player who's textdraw string to set |
| PlayerText:textid | The ID of the textdraw to change                  |
| const format[]    | The new string for the TextDraw                   |
| OPEN_MP_TAGS:...  | Indefinite number of arguments of any tag.        |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:pVehicleHealthTD[MAX_PLAYERS];
new pVehicleHealthTimer[MAX_PLAYERS];

public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER) // Entered a vehicle as driver
    {
        pVehicleHealthTD[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, " ");
        PlayerTextDrawShow(playerid, pVehicleHealthTD[playerid]);

        // Set a timer to update the textdraw every second
        pVehicleHealthTimer[playerid] = SetTimerEx("UpdateVehicleHealthTextDraw", 1000, true, "i", playerid);
    }
    if (oldstate == PLAYER_STATE_DRIVER)
    {
        KillTimer(pVehicleHealthTimer[playerid]);
        PlayerTextDrawDestroy(playerid, pVehicleHealthTD[playerid]);
    }
    return 1;
}

forward UpdateVehicleHealthTextDraw(playerid);
public UpdateVehicleHealthTextDraw(playerid)
{
    new
        string[32],
        vehicleid = GetPlayerVehicleID(playerid),
        Float:health;

    GetVehicleHealth(vehicleid, health);

    format(string, sizeof(string), "Vehicle Health: %.0f", health);
    PlayerTextDrawSetString(playerid, pVehicleHealthTD[playerid], string); // <<< Update the text to show the vehicle health

    // PRO TIP: You don't need `format` in open.mp
    PlayerTextDrawSetString(playerid, pVehicleHealthTD[playerid], "Vehicle Health: %.0f", health);
    return 1;
}

/*
NOTE: This example is purely for demonstration purposes, it is not guaranteed to work in-game. It is merely to show the usage of the PlayerTextDrawSetString function.
*/
```

## Notes

:::tip

You don't have to show the TextDraw again in order to apply the changes.

:::

:::warning

There are limits to the length of textdraw strings! See [Limits](../resources/limits) for more info.

:::

## Related Functions

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destroy a player-textdraw.
- [PlayerTextDrawGetString](PlayerTextDrawGetString): Gets the text of a player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Set the alignment of a player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Set the font of a player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Set the letter size of the text in a player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Toggle the box on a player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Show a player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Hide a player-textdraw.
