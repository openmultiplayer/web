---
title: OnDialogResponse
description: This callback is called when a player responds to a dialog shown using ShowPlayerDialog. The response can be by clicking a button, pressing ENTER/ESC, or double-clicking a list item (in the case of a list-style dialog).
tags: ["dialog"]
---

## Description

This callback is called when a player responds to a dialog shown using ShowPlayerDialog. The response can be by clicking a button, pressing ENTER/ESC, or double-clicking a list item (in the case of a list-style dialog).

| Name        | Description                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| playerid    | The ID of the player who responded to the dialog.                                                                      |
| dialogid    | The ID of the dialog the player responded to, as assigned in ShowPlayerDialog.                                             |
| response    | 1 for the left button, and 0 for the right button (if only one button is shown, it will always be 1)                                           |
| listitem    | The ID of the list item selected by the player (starts at 0). For non-list dialogs, it will be -1. |
| inputtext[] | The text entered in the input box by the player, or the selected list item text.                                      |

## Returns

This callback is always called first in filterscripts. Returning 1 blocks other filterscripts from processing it.

## Examples

**DIALOG_STYLE_MSGBOX**

```c
// Define the dialog ID for handling responses
#define DIALOG_RULES 1

// In some command
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Server Rules", "- No Cheating\n- No Spamming\n- Respect Admins\n\nDo you agree to these rules?", "Yes", "No");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_RULES)
    {
        if (response) // If the left button was pressed or ENTER was pressed
        {
            SendClientMessage(playerid, COLOR_GREEN, "Thank you for agreeing to the server rules!");
        }
        else // ESC was pressed or the right button was pressed
        {
            Kick(playerid);
        }
        return 1; // Return 1 to indicate the dialog was handled.
    }

    return 0; // Return 0 for unhandled dialogs.
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
        if (!response) // ESC was pressed or the right button was pressed
        {
            Kick(playerid);
        }
        else // ESC was pressed or the right button was pressed
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
        return 1; // Return 1 to indicate the dialog was handled.
    }

    return 0; // Return 0 for unhandled dialogs.
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
        if (response) // The right button was clicked or an item was double-clicked.
        {
            // Give the player the selected weapon.
            switch (listitem)
            {
                case 0:
                {
                    GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Give the player a desert eagle.
                }
                case 1:
                {
                    GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Give the player an AK-47.
                }
                case 2:
                {
                    GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Give the player a Combat Shotgun.
                }
            }
        }
        return 1; // Return 1 to indicate the dialog was handled.
    }

    return 0; // Return 0 for unhandled dialogs.
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

The parameters can have different values depending on the dialog's style. ([Click here for more examples](../resources/dialogstyles)).

:::

:::tip

Using a switch-case statement instead of if blocks is an appropriate method for handling multiple dialogs.

:::

:::warning

A player's dialog doesn't automatically close when the gamemode restarts. 

If a player responds to a dialog after the server was restarted, the server will print the warning: "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID".

:::

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [ShowPlayerDialog](../functions/ShowPlayerDialog): Show a dialog to a player.
- [GetPlayerDialogID](../functions/GetPlayerDialogID): Get the ID of the dialog currently show to the player.
- [GetPlayerDialogData](../functions/GetPlayerDialogData): Get the data of the dialog currently show to the player.
- [HidePlayerDialog](../functions/HidePlayerDialog): Hides the dialog currently show to the player.
