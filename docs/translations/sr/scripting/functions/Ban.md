---
title: Ban
description: Banuje igraca koji je trenutno na serveru.
tags: ["administration"]
---

## Opis

Banuje igraca koji je trenutno na serveru. Vise nece moci da udju na server. Ban je IP-baziran i bice sacuvam u samp.ban fajlu u server folderu. BanEx se moze koristiti da bi se dao razlog ban-u. IP ban se moze dodati/obrisati koristeci RCON banip i unbanip komande (SendRconCommand).

| Ime      | Opis                      |
| -------- | ------------------------- |
| playerid | ID igraca koji se banuje. |

## Vracanje

Ova funkcija ne vraca nikakvu specificnu vrednost.

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

Svaka akcija odmah pre Ban(), kao sto je slanje poruka sa SendClientMessage, nece doci do igraca. Mora se postaviti timer da bi se napravio vremenski razmak ban-a.

:::

## Srodne Funkcije

- [BanEx](BanEx): Banuje igraca sa razlogom.
- [Kick](Kick): Izbaci igraca sa servera(KICK).
