---
title: GetPlayerColor
description: Dobijanje boje igračevog imena i radarskog markera.
tags: ["player"]
---

## Deskripcija

Dobijanje boje igračevog imena i radarskog markera. Radi samo poslije SetPlayerColor.

| Ime      | Deskripcija                    |
| -------- | ------------------------------ |
| playerid | ID igrača za provjeru          |

## Returns

Igračeva boja. 0 ukoliko nema postavljenje boje ili igrač nije konektovan.

## Primjeri

```c
SendClientMessage(playerid, GetPlayerColor(playerid), "Ova poruka je u boji vaše nick-a :)");

new output[144];
format(output, sizeof(output), "You can also use the player's color for {%06x}color embedding!", GetPlayerColor(playerid) >>> 8);
SendClientMessage(playerid, -1, output);
// vratiti će poruku u bijeloj boji, sa ''color embedding'' u igračevoj boji
```

## Zabilješke

:::warning

GetPlayerColor će vratiti ništa (0) dok se prevenstveno SetPlayerColor ne iskoristi. Click [HERE](../../tutorials/colorfix) za popravak.

:::

## Srodne Funkcije

- [SetPlayerColor](SetPlayerColor): Postavljanje boje igraču.
- [ChangeVehicleColor](ChangeVehicleColor): Promjena boje vozila.
