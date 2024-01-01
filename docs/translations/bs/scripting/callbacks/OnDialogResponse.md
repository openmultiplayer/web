---
title: OnDialogResponse
description: Ovaj callback se poziva kada igrač odgovori na dijalog koji je pozvan ShowPlayerDialog funkcijom bilo klikom dugmeta, klikom ENTER/ESC tipke ili duplim klikom na list item (ukoliko koristite "list" style dijalog).
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Ovaj callback se poziva kada igrač odgovori na dijalog koji je pozvan [ShowPlayerDialog](../functions/ShowPlayerDialog) funkcijom bilo klikom dugmeta, klikom ENTER7ESC tipke ili duplim klikom na list item (ukoliko koristite list style dijalog).

| Ime         | Deskripcija                                                                                                                            |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| playerid    | ID igrača koji je odgovorio na dijalog.                                                                                                |
| dialogid    | ID dijaloga na koji je igrač odgovorio, dodijeljenog pozivanjem [ShowPlayerDialog](../functions/ShowPlayerDialog) funkcije.            |
| response    | 1 za lijevo i 0 za desno dugme (ako je samo jedno dugme prikazano, uvijek 1)                                                           |
| listitem    | ID list item-a koji je selektovan od strane igrača (počinje od 0) (samo ukoliko koristite list style dijalog, u suprotnom će biti -1). |
| inputtext[] | Tekst upisan u input box od strane igrača text selektovanog list item-a.                                                               |

## Returns

Uvijek je pozvana prva u filterskripti tako da return-ovanje 1 tu blokira ostale filterskripte da je vide.

## Primjeri

```c
// Definiramo ID dijaloga kako bismo mogli upravljati odgovorima
#define DIALOG_RULES 1

// U nekoj komandi pokazujemo taj dijalog
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Pravila Servera", "- Bez varanja i cheatovanja\n- Bez Spam-a\n- Postujte administraciju\n\nDa li se slazete sa pravilima?", "Da", "Ne");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_RULES)
    {
        if (response) // Ako su kliknuli 'Da' ili pritisnuli ENTER
        {
            SendClientMessage(playerid, COLOR_GREEN, "Hvala vam sto ste prihvatili pravila!");
        }
        else // Ako su pritisnuli ESC ili kliknuli 'Ne'
        {
            Kick(playerid);
        }
        return 1; // Upravljali smo dijalogom zato dajemo return 1. Isto kao i u OnPlayerCommandText.
    }

    return 0; // MORAŠ dati return 0 ovdje! Kao i u OnPlayerCommandText.
}
// definiramo drugi dijalog, dajemo mu za jednu veću vrijednost od prošlog
#define DIALOG_LOGIN 2

// U nekoj komandi pokazujemo taj dijalog
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Molimo unesite vasu lozinku:", "Login", "Odustani");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_LOGIN)
    {
        if (!response) // Ako su kliknuli 'Odustani' ili pritisnuli ESC
        {
            Kick(playerid);
        }
        else // Ako su pritisnuli ENTER ili kliknuli 'Login'
        {
            if (CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "Uspjesno si ulogovan!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "LOGIN FAILED.");

                // Ponovno prikazi dijalog igracu
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Molimo unesite vasu lozinku:", "Login", "Odustani");
            }
        }
        return 1; // Upravljali smo dijalogom zato dajemo return 1. Isto kao i u OnPlayerCommandText.
    }

    return 0; // MORAŠ dati return 0 ovdje! Kao i u OnPlayerCommandText.
}
// definiramo treci dijalog, ponovno je vrijednost veca od vrijednosti proslog dijaloga
#define DIALOG_WEAPONS 3

// U nekoj komandi pokazujemo taj dijalog
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Oruzja", "Desert Eagle\nAK-47\nCombat Shotgun", "Odaberi", "Zatvori");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Ako su pritisnuli 'Odaberi' ili dva puta pritisnuli na list item
        {
            // Daje im weapon
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Daje im desert eagle
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Daje im AK-47
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Daje im a Combat Shotgun
            }
        }
        return 1; // Upravljali smo dijalogom zato dajemo return 1. Isto kao i u OnPlayerCommandText.
    }

    return 0; // MORAŠ dati return 0 ovdje! Kao i u OnPlayerCommandText.
}
// ovo je drugi nacin za prikaz i upravljanje za treci dijalog
#define DIALOG_WEAPONS 3

// U nekoj komandi ga prikazujemo
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Oruzja",
"Weapon\tAmmo\tPrice\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Odaberi", "Zatvori");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Ako je pritisnuo 'Odaberi' ili dva puta pritisnuo na weapon
        {
            // Daje im weapon
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // Daje im M4
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Daje im MP5
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Daje im AK-47
            }
        }
        return 1; // Upravljali smo dijalogom zato dajemo return 1. Isto kao i u OnPlayerCommandText.
    }

    return 0; // MORAŠ dati return 0 ovdje! Kao i u OnPlayerCommandText.
}
```

## Zabilješke

:::tip

Parametri mogu sadržavati različite vrijednosti, bazirane na stilu dijaloga ([Klikni za više primjera](../resources/dialogstyles)).

:::

:::tip

Prikladno je prebaciti se kroz različite dijaloge, ako ih imate mnogo.

:::

:::warning

Dijalog igrača se ne sakriva kada se gamemode restartuje, uzrokujući to da server printa "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID" (Prijevod: PlayerDialogResponse PlayerId: 0 ID dijaloga se ne poklapa sa IDem zadnje poslanog dijaloga) ako je igrač odgovorio na dijalog nakon restarta.

:::

## Srodne Funkcije

- [ShowPlayerDialog](../functions/ShowPlayerDialog): Prikaži dijalog igraču.
