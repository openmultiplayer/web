---
title: GetPlayerArmour
description: Ova funkcija sprema armor igrača u varijablu.
tags: ["player"]
---

## Deskripcija

Ova funkcija sprema armor igrača u varijablu.

| Ime           | Deskripcija                                        |
| ------------- | -------------------------------------------------- |
| playerid      | ID igrač za koji želite dobiti armor.              |
| &Float:armour | Float za pohraniti armor, proslijeđeno referencom. |

## Returns

1 - uspješno

1 - greška (tj. igrač nije povezan).

Armor igrača je pohranjen u navedenu varijablu.

## Primjeri

```c
new
    Float:armour,
    string[40];
GetPlayerArmour(playerid, armour);
format(string, sizeof string, "SERVER: Vaš armor je na %0.f procenata", armour);
SendClientMessage(playerid, 0xFFFFFFAA, string);
```

## Zabilješke

:::warning

Iako se armor može postaviti na gotovo beskonačne vrijednosti na strani servera, pojedinačni clienti prijavit će vrijednosti samo do 255. Sve veće će se omotati; 256 postaje 0, 257 postaje 1 itd. armor se dobiva zaokružen na cijele brojeve: postavite 50,15, ali uzmite 50,0

:::

## Srodne Funkcije

- [SetPlayerArmour](SetPlayerArmour): Postavi armor igrača.
- [GetPlayerHealth](GetPlayerHealth): Doznaj koliko healtha ima igrač.
- [GetVehicleHealth](GetVehicleHealth): Provjeri helte vozila.
