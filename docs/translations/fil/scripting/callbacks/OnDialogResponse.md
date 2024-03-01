---
title: OnDialogResponse
description: This callback is called when a player responds to a dialog shown using ShowPlayerDialog by either clicking a button, pressing ENTER/ESC or double-clicking a list item (if using a list style dialog).
tags: []
---

## Deskripsyon

Ang callback na ito ay na cacall kapag ang player ay nag respond sa isang dialog na ipinakita gamit ang ShowPlayerDialog gamit ang pag click sa isang button, pagpindot ng `ENTER/ESC` o pag `Double Click` sa isang laman ng list. (kung ang dialog ay DIALOG_STYLE_LIST).

| Pangala     | Deskripsyon                                                                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid    | Ang ID ng player na nag respond sa dialog.                                                                                                            |
| dialogid    | Ang ID ng dialog na pinag respond ng player, naka assign ito sa ShowPlayerDialog.                                                                     |
| response    | 1 para sa unang button (kaliwa) at 0 para sa pangalawang button (kanan), kung isa lang ang button, ang 1 ang magagamit.                               |
| listitem    | Ang ID ng nilalaman ng list na pinili ng isang player (nag uumpisa sa 0) (kapag lamang gumagamit ng DIALOG_STYLE_LIST, kung hindi ito ay magiging -1. |
| inputtext[] | Ang text/sulat na nilagay ng player sa input box o ang piniling nilalaman ng list.                                                                    |

## Returns

Lagi itong na cacall una sa mga filterscript kaya kapag nag return ng 1 binoblock ang ibang filterscript mula sa pagtingin dito.

## Mga Halimbawa

```c
// Dito ilalagay ang ID ng isang dialog
#define DIALOG_RULES 1

// Sa isang command
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Server Rules", "- No Cheating\n- No Spamming\n- Respect Admins\n\nDo you agree to these rules?", "Yes", "No");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_RULES)
    {
        if (response) // Kung pinili nila ang `YES` o pinindot ang `ENTER`
        {
            SendClientMessage(playerid, COLOR_GREEN, "Thank you for agreeing to the server rules!");
        }
        else // Kapag pinili ang `NO`, pinindot ang `ESC` o hindi sumagot.
        {
            Kick(playerid);
        }
        return 1; // Gumamit tayo ng dialog kaya return 1 parang sa OnPlayerCommandText.
    }

    return 0; // Kailangan mag return 0 dito! Kamuka lang ng sa OnPlayerCommandText.
}

// Panagalawang halimbawa
#define DIALOG_LOGIN 2

// Sa isang command
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Please enter your password:", "Login", "Cancel");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_LOGIN)
    {
        if (!response) // Kapag pinili ang `Cancel`, pinindot ang `ESC` o hindi sumagot.
        {
            Kick(playerid);
        }
        else // Kung pinili nila ang `LOGIN` o pinindot ang `ENTER`
        {
            if (CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "You are now logged in!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "LOGIN FAILED.");

                // Ipakita muli ang Dialog.
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Please enter your password:", "Login", "Cancel");
            }
        }
        return 1; // Gumamit tayo ng dialog kaya return 1 parang sa OnPlayerCommandText.
    }

    return 0; // Kailangan mag return 0 dito! Kamuka lang ng sa OnPlayerCommandText.
}

// Pangatlong halimbawa
#define DIALOG_WEAPONS 3

// Sa isang command
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons", "Desert Eagle\nAK-47\nCombat Shotgun", "Select", "Close");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Kung pinili ang `Select` o pumili sa isang baril na nakalista
        {
            // Ibibigay ang baril na pinili
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Magbibigay ng ID 24 na baril o (Deagle)
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Magbibigay ng ID 30 na baril o (AK-47)
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Magbibigay ng ID 27 na baril o (Combat Shotgun)
            }
        }
        return 1; // Gumamit tayo ng dialog kaya return 1 parang sa OnPlayerCommandText.
    }

    return 0; // Kailangan mag return 0 dito! Kamuka lang ng sa OnPlayerCommandText.
}

// Pangatlong halimbawa pero ibang paraan at ibang mga baril
#define DIALOG_WEAPONS 3

// In some command
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons",
"Weapon\tAmmo\tPrice\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Select", "Close");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Kung pinili ang `Select` o pumili sa isang baril na nakalista
        {
            // Ibibigay ang baril na pinili
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // Magbibigay ng ID 31 na baril o (M4)
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Magbibigay ng ID 29 na baril o (MP5)
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Magbibigay ng ID 30 na baril o (AK-47)
            }
        }
        return 1; // Gumamit tayo ng dialog kaya return 1 parang sa OnPlayerCommandText.
    }

    return 0; // Kailangan mag return 0 dito! Kamuka lang ng sa OnPlayerCommandText.
}
```

## Mga Dapat Unawain

:::tip

Ang mga parameters ay maaaring lagyan ng iba't ibang values base sa style ng isang dialog. ([tignan ito](../resources/dialogstyles.md)).

:::

:::tip

Magandang gumamit ng switch para sa iyong mga dialogids kung marami kang dialogs.

:::

:::warning

Ang dialog ng isang player ay hindi mawawala kapag nag restart ang server, nagdadahilan dito ang pag print ng "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID" kapag ang player ay nag respond sa dialog katapos ng restart.

:::

## Mga Kaugnay na Functions

- [ShowPlayerDialog](../functions/ShowPlayerDialog.md): Ipakita ang dialog sa player.
