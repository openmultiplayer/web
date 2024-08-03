---
title: BanEx
description: Banuje igraca sa razlogom.
tags: ["administration"]
---

## Opis

Banuje igraca sa razlogom.

| Ime      | Opis                     |
| -------- | ------------------------ |
| playerid | ID igraca koga banujemo. |
| reason   | Razlog bana.             |

## Vracanje

Ova funkcija ne vraca nikakvu specificnu vrednost.

## Primeri

```c
public OnPlayerCommandText( playerid, cmdtext[] )
{
    if (!strcmp(cmdtext, "/banme", true))
    {
        // Banuje igraca koji ukuca komandu i stavi razlog ( "Request" )
        BanEx(playerid, "Request");
        return 1;
    }
}
// Da bi prikazali poruku ( razlog ) igracu pre nego sto ga izbaci sa servera
// moramo koristiti timer da bi napravili razmak. Ovaj razmak mora biti samo par milisekundi,
// ali ovaj primer koristi punu sekundu cisto da bi bili sigurni.

forward BanExPublic(playerid, reason[]);

public BanExPublic(playerid, reason[])
{
    BanEx(playerid, reason);
}

stock BanExWithMessage(playerid, color, message[], reason[])
{
    // razlog koji ce ici u BanEx
    SendClientMessage(playerid, color, message);
    SetTimerEx("BanExPublic", 1000, false, "ds", playerid, reason);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        //Banuje igraca koji ukuca ovu komandu
        BanExWithMessage(playerid, 0xFF0000FF, "You have been banned!", "Request");
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

Svaka akcija odmah pre BanEx(), kao sto je slanje poruka sa SendClientMessage, nece doci do igraca. Mora se postaviti timer da bi se napravio vremenski razmak ban-a.

:::

## Related Functions

- [Ban](Ban): Banuje igraca koji je trenutno na serveru.
- [Kick](Kick): Izbaci igraca sa servera(KICK).
