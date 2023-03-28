---
title: HidePlayerDialog
description: Hides any dialog the player may currently be able to see.
tags: ["player", "dialog"]
---

<VersionWarn version='open.mp beta build 1' />

## Description

Hides any dialog the player may currently be able to see.

| Name     | Description                                                              |
| -------- | ------------------------------------------------------------------------ |
| playerid | The ID of the player to hide their current dialog from.                  |

## Returns

1: The function was executed successfully.

0: The function failed to execute. This means the player is not connected or they aren't looking at a dialog.

## Examples

```c
public OnPlayerConnect(playerid)
{
    if(IsAccountRegistered(playerid)) // Imaginary function to check if the player name is registered
    {
        ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_PASSWORD, "Login", "Insert Your Password", "Login", ""); // shows login dialog to player
        new string:ip_addr[17];
        GetPlayerIp(playerid, ip_addr, sizeof(ip_addr)); // get player's ip address
        if(IsBanned(ip_addr)) // check if the player ip is banned
        {
            SendClientMessage(playerid, -1, "You are banned from this server!"); 
            HidePlayerDialog(playerid); // Hides login dialog
        }
    }
}
```

## Related Functions

- [ShowPlayerDialog](ShowPlayerDialog): Shows the player a synchronous (only one at a time) dialog box.
- [GetPlayerDialogData](GetPlayerDialogData): Get the data of the dialog currently show to the player.
