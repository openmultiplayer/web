---
id: PlayerTextDrawSetString
title: PlayerTextDrawSetString
description: Change the text of a player-textdraw.
tags: ['player', 'textdraw', 'playertextdraw']
---

:::warning

This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

Change the text of a player-textdraw.


| Name | Description |
|------|-------------|
|playerid | The ID of the player who's textdraw string to set|
|text | The ID of the textdraw to change|
|string[] | The new string for the TextDraw|


## Returns

This function does not return any specific values.


## Examples


```c
new pVehicleHealthTimer[MAX_PLAYERS];
new PlayerText:pVehicleHealthTD[MAX_PLAYERS];

public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if(newstate == 2) // Entered a vehicle as driver
    {
        pVehicleHealthTD[playerid] = CreatePlayerTextDraw(playerid, x, y, " ");
        PlayerTextDrawShow(playerid, pVehicleHealthTD[playerid]);

        // Set a timer to update the textdraw every second
        pVehicleHealthTimer[playerid] = SetTimerEx("vhealth_td_update", 1000, true, "i", playerid);
    }
    if(oldstate == 2)
    {
        KillTimer(pVehicleHealthTD[playerid]);
        PlayerTextDrawDestroy(playerid, pVehicleHealthTD[playerid]);
    }
}

public vhealth_td_update(playerid)
{
    new tdstring[32], Float:vHealth;
    GetVehicleHealth(GetPlayerVehicleID(playerid), vHealth);

    format(tdstring, sizeof(tdstring), "Vehicle Health: %0f", vHealth);

    PlayerTextDrawSetString(playerid, pVehicleHealthTD[playerid], tdstring); // <<< Update the text to show the vehicle health
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

There are limits to the length of textdraw strings! See Limits for more info.

:::


## Related Functions


-  [CreatePlayerTextDraw](../functions/CreatePlayerTextDraw.md): Create a player-textdraw.
-  [PlayerTextDrawDestroy](../functions/PlayerTextDrawDestroy.md): Destroy a player-textdraw.
-  [PlayerTextDrawColor](../functions/PlayerTextDrawColor.md): Set the color of the text in a player-textdraw.
-  [PlayerTextDrawBoxColor](../functions/PlayerTextDrawBoxColor.md): Set the color of a player-textdraw's box.
-  [PlayerTextDrawBackgroundColor](../functions/PlayerTextDrawBackgroundColor.md): Set the background color of a player-textdraw.
-  [PlayerTextDrawAlignment](../functions/PlayerTextDrawAlignment.md): Set the alignment of a player-textdraw.
-  [PlayerTextDrawFont](../functions/PlayerTextDrawFont.md): Set the font of a player-textdraw.
-  [PlayerTextDrawLetterSize](../functions/PlayerTextDrawLetterSize.md): Set the letter size of the text in a player-textdraw.
-  [PlayerTextDrawTextSize](../functions/PlayerTextDrawTextSize.md): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
-  [PlayerTextDrawSetOutline](../functions/PlayerTextDrawSetOutline.md): Toggle the outline on a player-textdraw.
-  [PlayerTextDrawSetShadow](../functions/PlayerTextDrawSetShadow.md): Set the shadow on a player-textdraw.
-  [PlayerTextDrawSetProportional](../functions/PlayerTextDrawSetProportional.md): Scale the text spacing in a player-textdraw to a proportional ratio.
-  [PlayerTextDrawUseBox](../functions/PlayerTextDrawUseBox.md): Toggle the box on a player-textdraw.
-  [PlayerTextDrawShow](../functions/PlayerTextDrawShow.md): Show a player-textdraw.
-  [PlayerTextDrawHide](../functions/PlayerTextDrawHide.md): Hide a player-textdraw.