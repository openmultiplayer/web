---
title: PlayerTextDrawSetString
sidebar_label: PlayerTextDrawSetString
description: Change the text of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

## คำอธิบาย

Change the text of a player-textdraw.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The ID of the player who's textdraw string to set |
| text     | The ID of the textdraw to change                  |
| string[] | The new string for the TextDraw                   |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new pVehicleHealthTimer[MAX_PLAYERS];
new PlayerText:pVehicleHealthTD[MAX_PLAYERS];

public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == 2) // Entered a vehicle as driver
    {
        pVehicleHealthTD[playerid] = CreatePlayerTextDraw(playerid, x, y, " ");
        PlayerTextDrawShow(playerid, pVehicleHealthTD[playerid]);

        // Set a timer to update the textdraw every second
        pVehicleHealthTimer[playerid] = SetTimerEx("vhealth_td_update", 1000, true, "i", playerid);
    }
    if (oldstate == 2)
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

## บันทึก

:::tip

You don't have to show the TextDraw again in order to apply the changes.

:::

:::warning

There are limits to the length of textdraw strings! See Limits for more info.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- CreatePlayerTextDraw: Create a player-textdraw.
- PlayerTextDrawDestroy: Destroy a player-textdraw.
- PlayerTextDrawColor: Set the color of the text in a player-textdraw.
- PlayerTextDrawBoxColor: Set the color of a player-textdraw's box.
- PlayerTextDrawBackgroundColor: Set the background color of a player-textdraw.
- PlayerTextDrawAlignment: Set the alignment of a player-textdraw.
- PlayerTextDrawFont: Set the font of a player-textdraw.
- PlayerTextDrawLetterSize: Set the letter size of the text in a player-textdraw.
- PlayerTextDrawTextSize: Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- PlayerTextDrawSetOutline: Toggle the outline on a player-textdraw.
- PlayerTextDrawSetShadow: Set the shadow on a player-textdraw.
- PlayerTextDrawSetProportional: Scale the text spacing in a player-textdraw to a proportional ratio.
- PlayerTextDrawUseBox: Toggle the box on a player-textdraw.
- PlayerTextDrawShow: Show a player-textdraw.
- PlayerTextDrawHide: Hide a player-textdraw.
