---
title: Ban
description: Banuje igrača koji je trenutno na serveru.
tags: ["administration"]
---

## Opis

Banuje igrača koji je trenutno na serveru. Oni više neće moći pristupiti serveru. Zabrana se temelji na IP-u i bit će spremljena u datoteku samp.ban u mapi poslužitelja. BanEx se može koristiti za navođenje razloga za ban. Ban IP-a može se dodati/izbrisati korištenjem RCON banip i unbanip naredbi (SendRconCommand).

| Ime      | Opis                         |
| -------- | ---------------------------- |
| playerid | ID igrača koji je zabranjen. |

## Vraćanje

Ova funkcija ne vraća nikakvu određenu vrijednost.

## Primeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // Banuje igraca koji ukuca ovu komandu
        Ban(playerid);
        return 1;
    }
}
// Da bi prikazali poruku ( razlog ) igracu pre nego sto ga izbaci sa servera
// moramo koristiti timer da bi napravili razmak. Ovaj razmak mora biti samo par milisekundi,
// ali ovaj primer koristi punu sekundu cisto da bi bili sigurni.

forward DelayedBan(playerid);
public DelayedBan(playerid)
{
    Ban(playerid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // Banuje igraca koji ukuca komandu

        // Prvo posaljemo poruku
        SendClientMessage(playerid, 0xFF0000FF, "Banovan si sa servera!");

        // Banuje ih sekundu kasnije da bi prikazalo poruku iznad
        SetTimerEx("DelayedBan", 1000, false, "d", playerid);
        return 1;
    }
    return 0;
}
```

## Beleske

:::warning

Nakon verzije 0.3x, svaka akcija odmah pre Ban(), kao sto je slanje poruka sa SendClientMessage, nece doci do igraca. Mora se postaviti timer da bi se napravio vremenski razmak ban-a.

:::

## Srodne Funkcije

- [BanEx](BanEx): Banuje igraca sa razlogom.
- [Kick](Kick): Izbaci igraca sa servera(KICK).
