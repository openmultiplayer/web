---
title: PlayerSpectateVehicle
description: Postavljanje igrača da posmatra drugo vozilo.
tags: ["player", "vehicle"]
---

## Deskripcija

Postavljanje igrača da posmatra drugo vozilo. Njihova kamera će biti prikvačena za vozilo i ako voze vozilo.

| Ime             | Deskripcija                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| playerid        | ID igrača koji će posmatrati vozilo                                                                                                        |
| targetvehicleid | ID vozila koje će igrač posmatrati                                                                                                         |
| mode            | Posmatranje [mode](../resources/spectatemodes). Općenito se može ostaviti prazno jer je prema zadanim postavkama postavljeno na "normalno" |

## Returns

1: Funkcija je uspješno izvršena. Imajte na umu da se uspjeh prijavljuje ako igrač nije u režimu gledatelja (TogglePlayerSpectating), al ništa se neće desiti.
TogglePlayerSpctating MORA biti prvo iskorišteno.

0: Funkcija neuspješno izvršena. Igrač, vozilo, ili oboje ne postoje.

## Primjeri

```c
TogglePlayerSpectating(playerid, 1);
PlayerSpectateVehicle(playerid, vehicleid);
```

## Zabilješke

:::warning

Red je presudan! Osigurajte da koristite TogglePlayerSpectating prije PlayerSpectateVehicle. Virtualni svjetovi i interijeri za playerid i vehicleid moraju biti isti kako bi ova funkcija radila kako treba.

:::

## Srodne Funkcije

- [PlayerSpectatePlayer](PlayerSpectatePlayer): Posmatranje igrača.
- [TogglePlayerSpectating](TogglePlayerSpectating): Započinjanje ili stopiranje posmatranja.
