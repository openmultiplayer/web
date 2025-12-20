---
title: OnDialogResponse
sidebar_label: OnDialogResponse
description: Deze callback wordt aangeroepen wanneer een speler reageert op een dialog die is getoond met ShowPlayerDialog. De reactie kan zijn door op een knop te klikken, ENTER/ESC te drukken, of dubbelklikken op een lijstitem (bij een lijst-stijl dialog).
tags: ["dialog"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler reageert op een dialog die is getoond met ShowPlayerDialog. De reactie kan zijn door op een knop te klikken, ENTER/ESC te drukken, of dubbelklikken op een lijstitem (bij een lijst-stijl dialog).

| Naam        | Beschrijving                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| playerid    | Het ID van de speler die reageerde op de dialog.                                                     |
| dialogid    | Het ID van de dialog waarop de speler reageerde, zoals meegegeven in ShowPlayerDialog.               |
| response    | 1 voor de linker knop, en 0 voor de rechter knop (bij één knop is het altijd 1).                    |
| listitem    | Het ID van het door de speler geselecteerde lijstitem (start bij 0). Bij niet-lijst dialogs: -1.    |
| inputtext[] | De tekst die in de invoervak door de speler is ingevoerd, of de tekst van het geselecteerde item.    |

## Returns

Deze callback wordt altijd als eerste aangeroepen in filterscripts. Return 1 blokkeert verwerking in andere filterscripts.

## Voorbeelden

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

## Notities

:::tip

De parameters kunnen verschillende waarden hebben afhankelijk van de stijl van de dialog. ([Klik hier voor meer voorbeelden](../resources/dialogstyles)).

:::

:::tip

Het gebruik van een switch-case in plaats van if-blokken is een geschikte manier om meerdere dialogs af te handelen.

:::

:::warning

De dialog van een speler sluit niet automatisch wanneer de gamemode herstart.

Als een speler reageert op een dialog nadat de server is herstart, zal de server de waarschuwing printen: "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID".

:::

## Gerelateerde Functies

De volgende functies kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [ShowPlayerDialog](../functions/ShowPlayerDialog): Toon een dialog aan een speler.
- [GetPlayerDialogID](../functions/GetPlayerDialogID): Krijg het ID van de dialog die momenteel wordt getoond aan de speler.
- [GetPlayerDialogData](../functions/GetPlayerDialogData): Krijg de data van de dialog die momenteel wordt getoond aan de speler.
- [HidePlayerDialog](../functions/HidePlayerDialog): Verberg de dialog die momenteel wordt getoond aan de speler.
