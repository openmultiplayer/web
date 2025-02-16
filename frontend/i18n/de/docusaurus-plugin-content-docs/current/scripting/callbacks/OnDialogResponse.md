---
title: OnDialogResponse
description: Dieses Callback wird ausgeführt wenn ein Spieler einem Dialog antwortet(benutzt), indem er einen der Buttons drückt, Enter/ESC drückt oder ein List-Item per Doppelklick auswählt(List Style Dialog).
tags: [Pickup]
---

## Beschreibung

Dieses Callback wird ausgeführt wenn ein Spieler einem Dialog antwortet(benutzt), indem er einen der Buttons drückt, Enter/ESC drückt oder ein List-Item per Doppelklick auswählt(Dialog: List-Style)

| Name        | Beschreibung                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| playerid    | ID des Spielers der den Dialog benutzt.                                                                      |
| dialogid    | ID des Dialogs der vom Spieler genutzt wird, zugewiesen in ShowPlayerDialog.                                             |
| response    | 1 für den linken Button 0 für den rechten Button (Gibt es nur einen Button, dann immer 1)                                           |
| listitem    | ID des ausgewählten List-Items (Start bei 0) (Nur bei List-Style Dialogen, ansonsten -1). |
| inputtext[] | Der vom Spieler eingefügte Text oder Text des ausgewählten List-Items.                                       |

## Rückgabe(return value)

Wird in Filterscripts immer zuerst ausgeführt. Bei Nutzung von return 1 können andere Filterscripts es nicht erkennen.

## Beispiele

```c
// Definieren der Dialog ID, mit der wie Antworten bearbeiten können
#define DIALOG_REGELN 1

// In einem Befehl
ShowPlayerDialog(playerid, DIALOG_REGELN, DIALOG_STYLE_MSGBOX, "Server Regeln", "- Kein Cheaten\n- Kein Spamming\n- Respektiere die Admins\n\nAkzeptierst du die Regeln?", "Ja", "Nein");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_REGELN)
    {
        if (response) // Bei klicken von 'Ja' oder drücken von Enter
        {
            SendClientMessage(playerid, COLOR_GREEN, "Du hast die Serverregeln akzeptiert!");
        }
        else // Bei ESC oder klickne von 'Nein'
        {
            Kick(playerid);
        }
        return 1; // Wir haben den Dialog durchgeführt, also return 1. Genau wie bei OnPlayerCommandText.
    }

    return 0; // Hier muss return 0 stehen! Genau wie bei OnPlayerCommandText.
}
#define DIALOG_LOGIN 2

// In einem Befehl
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Bitte gebe dein Passwort ein:", "Login", "Abbruch");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_LOGIN)
    {
        if (!response) // Bei Klick von 'Abbruch' oder ESC
        {
            Kick(playerid);
        }
        else // Bei Klick von 'Login' oder Enter
        {
            if (CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "Du bist jetzt eingeloggt!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "Login fehlgeschlagen.");

                // Den Dialog erneut anzeigen, da einloggen fehlgeschlagen
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Bitte gebe dein Passwort ein:", "Login", "Abbruch");
            }
        }
        return 1; // Wir haben den Dialog durchgeführt, also return 1. Genau wie bei OnPlayerCommandText.
    }

    return 0; // Hier muss return 0 stehen! Genau wie bei OnPlayerCommandText.
}


#define DIALOG_WAFFEN 3

// In einem Befehl
ShowPlayerDialog(playerid, DIALOG_WAFFEN, DIALOG_STYLE_LIST, "Waffen", "Desert Eagle\nAK-47\nCombat Shotgun", "Wählen", "Schließen");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WAFFEN)
    {
        if (response) // Wenn 'Wählen' geklickt oder eine Waffe per Doppelklick gewählt wurde
        {
            // Die gewählte Waffe geben
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Gibt dem Spieler eine Desert Eagle
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Gibt dem Spieler eine AK-47
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Gibt dem Spieler eine Combat Shotgun
            }
        }
        return 1; // Wir haben den Dialog durchgeführt, also return 1. Genau wie bei OnPlayerCommandText.
    }

    return 0; // Hier muss return 0 stehen! Genau wie bei OnPlayerCommandText.
}


#define DIALOG_WAFFEN 3

// In einem Command
ShowPlayerDialog(playerid, DIALOG_WAFFEN, DIALOG_STYLE_LIST, "Waffen",
"Waffe\tMunition\tPreis\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Wählen", "Schließen");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WAFFEN)
    {
        if (response) // Wenn 'Wählen' geklickt oder eine Waffe per Doppelklick gewählt wurde
        {
            // Die gewählte Waffe geben
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // Gibt dem Spieler eine M4
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Gibt dem Spieler eine MP5
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Gibt dem Spieler eine AK-47
            }
        }
        return 1; // Wir haben den Dialog durchgeführt, also return 1. Genau wie bei OnPlayerCommandText.
    }

    return 0; // Hier muss return 0 stehen! Genau wie bei OnPlayerCommandText.
}
```

## Anmerkungen

:::tip

Parameter können unterschiedliche Werte enthalten, abhängig vom Dialog Style ([Klicke hier für Beispiele](../resources/dialogstyles)).

:::

:::tip

Es ist sinnvoll zwischen bei `VIELEN` Dialogen zwischen den einzelnen Dialog IDs zu switchen.

:::

:::warning

Der Dialog eines Spielers wird nicht versteckt, wenn der Gamemode neustarte, weshalb der Server folgende Warnung anzeigt, wenn der Spieler nach dem Neustart den Dialog nutzt: "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID".

:::

## Ähnliche Funktionen

- [ShowPlayerDialog](../functions/ShowPlayerDialog): Zeige einem Spieler einen Dialog.
