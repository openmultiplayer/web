---
title: OnPlayerInteriorChange
sidebar_label: OnPlayerInteriorChange
description: Pozvan kada igrač promijeni enterijer.
tags: ["player"]
---

## Deskripcija

Pozvan kada igrač promijeni enterijer. Može biti izazvano od strane `SetPlayerInterior` funkcije ili kada igrač uđe/izađe iz izgrade(u zgradu).

| Ime           | DescripDeskripcijation                                        |
| ------------- | ------------------------------------------------------------- |
| playerid      | ID igrača koji je promijenio enterijer.                       |
| newinteriorid | Interijer u kojem se igrač trenutno nalazi.                   |
| oldinteriorid | Interijer u kojem se igrač nalazio prije nego je ušao u novi. |

## Returns

Uvijek je pozvana prva u gamemode-u.

## Primjeri

```c
public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    new string[42];
    format(string, sizeof(string), "Otisao si iz enterijera ID %d u enterijer ID %d!", oldinteriorid, newinteriorid);
    SendClientMessage(playerid, COLOR_ORANGE, string);
    return 1;
}
```

## Srodne Funkcije

- [SetPlayerInterior](../functions/SetPlayerInterior.md): Postavlja igraču enterijer.
- [GetPlayerInterior](../functions/GetPlayerInterior.md): Dobijate trenutni enterijer igrača.
- [LinkVehicleToInterior](../functions/LinkVehicleToInterior.md): Promijenite enterijer u kojem se nalazi vozilo.
- [OnPlayerStateChange](OnPlayerStateChange.md): Pozvana kada igrač promijeni stanje.
