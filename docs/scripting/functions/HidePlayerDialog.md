---
title: HidePlayerDialog
description: Hides any dialog the player may currently be able to see.
tags: ["player", "dialog"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Hides any dialog the player may currently be able to see.

| Name     | Description                                                              |
| -------- | ------------------------------------------------------------------------ |
| playerid | The ID of the player to hide their current dialog from.                  |

## Returns

`true` - The function was executed successfully.

`false` - The function failed to execute. This means the player is not connected or they aren't looking at a dialog.

## Examples

```c
public OnPlayerConnect(playerid)
{
    if (IsAccountRegistered(playerid)) // Imaginary function to check if the player name is registered
    {
        ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_PASSWORD, "Login", "Insert Your Password", "Login", ""); // shows login dialog to player
        
        new ipAddress[16];
        GetPlayerIp(playerid, ipAddress, sizeof(ipAddress)); // get player's ip address
        
        if (IsBanned(ipAddress)) // check if the player ip is banned
        {
            SendClientMessage(playerid, 0xFF0000FF, "You are banned from this server!"); 
            HidePlayerDialog(playerid); // Hides login dialog
        }
    }
}
```

## Related Functions

- [ShowPlayerDialog](ShowPlayerDialog): Shows the player a synchronous (only one at a time) dialog box.
- [GetPlayerDialogData](GetPlayerDialogData): Get the data of the dialog currently show to the player.
- [GetPlayerDialogID](GetPlayerDialogID): Get the ID of the dialog currently show to the player.
