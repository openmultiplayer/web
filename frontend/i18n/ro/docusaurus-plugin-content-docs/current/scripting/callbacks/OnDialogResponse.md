---
title: OnDialogResponse
sidebar_label: OnDialogResponse
description: Acest callback este apelat atunci când un jucător răspunde unui dialog afișat prin ShowPlayerDialog, după apăsarea unui buton, apăsarea de ENTER/ESC sau dublu-click pe un element al unei liste (dacă s-a folosit un dialog de tip listă).
tags: []
---

## Descriere

Acest callback este apelat când un jucător răspunde unui dialog afișat prin ShowPlayerDialog, după apăsarea unui buton, apăsarea de ENTER/ESC sau dublu-click pe un element al unei liste (dacă s-a folosit un dialog de tip listă).

| Nume        | Descriere                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| playerid    | ID-ul jucătorului care a răspuns dialogului.                                                                                 |
| dialogid    | ID-ul dialogului căruia jucătorul i-a răspuns, atribuit în ShowPlayerDialog.                                                 |
| response    | 1 pentru butonul din stânga, 0 pentru butonul din dreapta (dacă numai un buton este afișat atunci mereu 1)                   |
| listitem    | ID-ul elementului din listă selectat (începe de la 0) (doar dacă s-a folosit un dialog de tip listă, altfel va fi mereu -1). |
| inputtext[] | Textul inserat de către jucător în căsuța de intrare, sau textul elementului din listă selectat.                             |

## Returnări

Mereu este apelat primul în filterscript-uri deci returnează 1 și blochează alte filterscript-uri din a vedea răspunsul.

## Exemple

```c
// Definim ID-ul dialogului pentru a putea prelucra răspunsurile
#define DIALOG_RULES 1

// În ceva comandă
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Regulile server-ului", "- Fără coduri\n- Fără spam\n- Respectați Adminii\n\nEști de acord cu aces te reguli?", "Da", "Nu");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_RULES)
    {
        if (response) // Dacă au apăsat pe 'Da' sau au apăsat ENTER
        {
            SendClientMessage(playerid, COLOR_GREEN, "Mulțumim pentru că ai acceptat regulile!");
        }
        else // Au apăsat ESC sau 'Nu'
        {
            Kick(playerid);
        }
        return 1; // Am folosit un dialog, deci returnăm 1. La fel ca OnPlayerCommandText.
    }

    return 0; // TREBUIE să returnezi 0 aici! La fel ca OnPlayerCommandText.
}
#define DIALOG_LOGIN 2

// În ceva comandă
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Introdu parola:", "Login", "Cancel");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_LOGIN)
    {
        if (!response) // Dacă au apăsat pe butonul de 'Cancel' sau ESC
        {
            Kick(playerid);
        }
        else // Dacă au apăsat ENTER sau pe butonul de 'Login'
        {
            if (CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "Ai fost autentificat cu success!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "LOGIN FAILED.");

                // Arată din nou dialogul de login
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Introdu parola:", "Login", "Cancel");
            }
        }
        return 1; // Am folosit un dialog, deci returnăm 1. La fel ca OnPlayerCommandText.
    }

    return 0; // TREBUIE să returnezi 0 aici! La fel ca OnPlayerCommandText.
}
#define DIALOG_WEAPONS 3

// În ceva comandă
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons", "Desert Eagle\nAK-47\nCombat Shotgun", "Select", "Close");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Dacă au apăsat pe butonul de 'Select' or sau au dat dublu-click pe o armă
        {
            // Give them the weapon
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Le dăm desert eagle
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Le dăm un AK-47
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Le dăm un Combat Shotgun
            }
        }
        return 1; // Am folosit un dialog, deci returnăm 1. La fel ca OnPlayerCommandText.
    }

    return 0; // TREBUIE să returnezi 0 aici! La fel ca OnPlayerCommandText.
}
#define DIALOG_WEAPONS 3

// În ceva comandă
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
        if (response) // Dacă au apăsat pe butonul de 'Select' or sau au dat dublu-click pe o armă
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

## Note

:::tip

Parametrii pot conține diferite valori, pe baza stilului dialogului ([click pentru mai multe exemple](../resources/dialogstyles.md)).

:::

:::tip

Ar fi frumos să folosești switch prin dialogids, dacă ai o grămadă.

:::

:::warning

Un dialog al unui jucător nu se ascunde când gamemode-ul se restartează, cauzând serverul să printeze "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID" dacă un jucător a răspuns acestui dialog după restart.

:::

## Funcții asociate

- [ShowPlayerDialog](../functions/ShowPlayerDialog.md): Afișează un dialog unui jucător.
