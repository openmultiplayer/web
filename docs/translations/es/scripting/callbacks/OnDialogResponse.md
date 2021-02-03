---
título: OnDialogResponse
descripción: Este callback se llama cuando un jugador responde a un cuadro de diálogo mostrado usando ShowPlayerDialog ya sea clickeando un botón, presionando ENTER/ESC o haciendo doble click en un elemento de lista (si el diálogo utiliza el estilo DIALOG_STYLE_LIST).
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Descripción

Este callback se llama cuando un jugador responde a un cuadro de diálogo mostrado usando ShowPlayerDialog ya sea clickeando un botón, presionando ENTER/ESC o haciendo doble click en un elemento de lista (si el diálogo utiliza el estilo DIALOG_STYLE_LIST).

| Nombre      | Descripción                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| playerid    | El ID del jugador que respondió el diálogo.                                                                             |
| dialogid    | El ID del diálogo al que respondió el jugador, asignado en ShowPlayerDialog.                                            |
| response    | 1 para botón izquierdo y 0 para botón derecho (si sólo hay un botón, siempre 1).                                        |
| listitem    | El ID del elemento de lista que seleccionó el jugador (empieza de 0) (si no se está usando DIALOG_STYLE_LIST, será -1)  |
| inputtext[] | El texto ingresado en la caja de entrada por el jugador o el texto del elemento de lista seleccionado.                  |

## Devoluciones

Siempre se llama primero en filterscripts, devolviendo 1 acá va a bloquear a otros filterscripts de verlo.

## Ejemplos

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
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Give them a desert eagle
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Give them an AK-47
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Give them a Combat Shotgun
            }
        }
        return 1; // We handled a dialog, so return 1. Just like OnPlayerCommandText.
    }

    return 0; // You MUST return 0 here! Just like OnPlayerCommandText.
}
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
        if (response) // If they clicked 'Select' or double-clicked a weapon
        {
            // Give them the weapon
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // Give them an M4
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Give them an MP5
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Give them an AK-47
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

- [ShowPlayerDialog](../functions/ShowPlayerDialog): Show a dialog to a player.
