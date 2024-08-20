---
title: OnDialogResponse
description: This callback is called when a player responds to a dialog shown using ShowPlayerDialog by either clicking a button, pressing ENTER/ESC or double-clicking a list item (if using a list style dialog).
tags: ["dialog"]
---

## Description

This callback is called when a player responds to a dialog shown using ShowPlayerDialog by either clicking a button, pressing ENTER/ESC or double-clicking a list item (if using a list style dialog).

| Name        | Description                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| playerid    | The ID of the player that responded to the dialog.                                                                      |
| dialogid    | The ID of the dialog the player responded to, assigned in ShowPlayerDialog.                                             |
| response    | 1 for left button and 0 for right button (if only one button shown, always 1)                                           |
| listitem    | The ID of the list item selected by the player (starts at 0) (only if using a list style dialog, otherwise will be -1). |
| inputtext[] | The text entered into the input box by the player or the selected list item text.                                       |

## Returns

It is always called first in filterscripts so returning 1 there blocks other filterscripts from seeing it.

## Examples

**DIALOG_STYLE_MSGBOX**

```c
// Define the dialog ID so we can handle responses
#define DIALOG_RULES 1

// In some command
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Server Rules", "- No Cheating\n- No Spamming\n- Respect Admins\n\nDo you agree to these rules?", "Yes", "No");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_RULES)
    {
        if (response) // If they clicked 'Yes' or pressed enter
        {
            SendClientMessage(playerid, COLOR_GREEN, "Thank you for agreeing to the server rules!");
        }
        else // Pressed ESC or clicked cancel
        {
            Kick(playerid);
        }
        return 1; // We handled a dialog, so return 1. Just like OnPlayerCommandText.
    }

    return 0; // You MUST return 0 here! Just like OnPlayerCommandText.
}
```

**DIALOG_STYLE_INPUT**

```c
#define DIALOG_LOGIN 2

// In some command
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Please enter your password:", "Login", "Cancel");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_LOGIN)
    {
        if (!response) // If they clicked 'Cancel' or pressed esc
        {
            Kick(playerid);
        }
        else // Pressed ENTER or clicked 'Login' button
        {
            if (CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "You are now logged in!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "LOGIN FAILED.");

                // Re-show the login dialog
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Please enter your password:", "Login", "Cancel");
            }
        }
        return 1; // We handled a dialog, so return 1. Just like OnPlayerCommandText.
    }

    return 0; // You MUST return 0 here! Just like OnPlayerCommandText.
}
```

**DIALOG_STYLE_LIST**

```c
#define DIALOG_WEAPONS 3

// In some command
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons", "Desert Eagle\nAK-47\nCombat Shotgun", "Select", "Close");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // If they clicked 'Select' or double-clicked a weapon
        {
            // Give them the weapon
            switch (listitem)
            {
                case 0:
                {
                    GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Give them a desert eagle
                }
                case 1:
                {
                    GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Give them an AK-47
                }
                case 2:
                {
                    GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Give them a Combat Shotgun
                }
            }
        }
        return 1; // We handled a dialog, so return 1. Just like OnPlayerCommandText.
    }

    return 0; // You MUST return 0 here! Just like OnPlayerCommandText.
}
```

**DIALOG_STYLE_TABLIST**

```c
#define DIALOG_WEAPONS 3

// In some command
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST, "Weapons",
"Weapon\tAmmo\tPrice\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Select", "Close");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // If they clicked 'Select' or double-clicked a weapon
        {
            // Give them the weapon
            switch (listitem)
            {
                case 0:
                {
                    GivePlayerWeapon(playerid, WEAPON_M4, 120); // Give them an M4
                }
                case 1:
                {
                    GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Give them an MP5
                }
                case 2:
                {
                    GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Give them an AK-47
                }
            }
        }
        return 1; // We handled a dialog, so return 1. Just like OnPlayerCommandText.
    }

    return 0; // You MUST return 0 here! Just like OnPlayerCommandText.
}
```

## Notes

:::tip

Parameters can contain different values, based on dialog's style ([click for more examples](../resources/dialogstyles)).

:::

:::tip

It is appropriate to switch through different dialogids, if you have many.

:::

:::warning

A player's dialog doesn't hide when the gamemode restarts, causing the server to print "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID" if a player responded to this dialog after restart.

:::

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [ShowPlayerDialog](../functions/ShowPlayerDialog): Show a dialog to a player.
- [GetPlayerDialogID](../functions/GetPlayerDialogID): Get the ID of the dialog currently show to the player.
- [GetPlayerDialogData](../functions/GetPlayerDialogData): Get the data of the dialog currently show to the player.
- [HidePlayerDialog](../functions/HidePlayerDialog): Hides the dialog currently show to the player.
