---
title: PlayerSpectatePlayer
description: Omogućavanje igraču da posmatra (gleda) drugog igrača.
tags: ["player"]
---

## Deskripcija

Omogućavanje igraču da posmatra (gleda) drugog igrača.

| Ime            | Deskripcija                                                                               |
| -------------- | ----------------------------------------------------------------------------------------- |
| playerid       | ID igrača koji će posmatrati                                                              |
| targetplayerid | ID igrača kojeg će igrač posmatrati                                                       |
| mode           | [mode](../resources/spectatemodes) za posmatranje sa (neobavezno; default na 'normal')    |

## Returns

1: Funkcija je uspješno izvršena.

0: Funkcija neuspješno izvršena. One of the players specified does not exist.

## Primjeri

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    TogglePlayerSpectating(playerid, 1);
    PlayerSpectatePlayer(playerid, killerid);
    return 1;
}
```

## Zabilješke

:::warning

Red je presudan! Osigurajte da koristite TogglePlayerSpectating prije PlayerSpectatePlayer. Virtualni svjetovi i interijeri za playerid i targetplayerid moraju biti isti da bi ova funkcija radila kako treba.

:::

## Srodne Funkcije

- [PlayerSpectateVehicle](PlayerSpectateVehicle): Posmatranje vozila.
- [TogglePlayerSpectating](TogglePlayerSpectating): Započinjanje ili stopiranje posmatranja.
