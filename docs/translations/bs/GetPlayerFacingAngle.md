---
title: GetPlayerFacingAngle
description: Dobija ugao prema kojem je igrač okrenut.
tags: ["player"]
---

## Deskripcija

Dobija ugao prema kojem je igrač okrenut.

| Ime        | Deskripcija                                       |
| ---------- | ------------------------------------------------- |
| playerid   | Igrač od kojeg želite dobiti ugao.                |
| &Float:ang | Float za pohraniti ugao, proslijeđeno referencom. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da igrač ne postoji.

Ugao igrača pohranjen je u navedenoj varijabli.

## Primjeri

```c
new Float:Angle, string[26];
GetPlayerFacingAngle(playerid, Angle);
format(string, sizeof(string), "Vaš ugao pod kojim ste okrenuti je: %0.2f", Angle);
SendClientMessage(playerid, 0xFFFFFFFF, string);
```

## Zabilješke

:::tip

Uglovi vraćeni u vozilu rijetko su ispravni. Da biste dobili tačan ugao okretanja dok ste u vozilu, koristite GetVehicleZAngle.

:::

:::warning

Uglovi su obrnuti u GTA:SA; 90 stepeni bi bilo istočno u stvarnom svijetu, ali u GTA:SA 90 stepeni je zapravo zapad. Sjever i Jug su i dalje 0/360 i 180. Da biste to pretvorili, jednostavno napravite kut od 360.

:::

## Srodne Funkcije

- [GetVehicleZAngle](GetVehicleZAngle): Provjerite trenutni ugao vozila.
- [SetPlayerFacingAngle](SetPlayerFacingAngle): Postavite ugao okretanja igrača.
