---
title: IsPlayerObjectMaterialSlotUsed
description: Provjerava da li je slot player-objekta materijala zauzet.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Deskripcija

Provjerava da li je slot player-objekt materijala zauzet.

| Ime           | Deskripcija                                 |
|---------------|---------------------------------------------|
| playerid      | ID igrača.                                  |
| objectid      | ID player-objekta.                          |
| materialIndex | Indeks materijala na objektu. (0 do 15)     |

## Returnovi

Funkcija vraća vrstu upotrebe slota za materijal.

`0` - Nijedan

`1` - Materijal

`2` - Tekst

## Primjeri

```c
new playerobjectid = CreatePlayerObject(playerid, 19371, 978.71143, -925.25708, 42.63720,   0.00000, 0.00000, 2.00000);
SetPlayerObjectMaterial(playerid, playerobjectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);

new type = IsPlayerObjectMaterialSlotUsed(playerid, playerobjectid, 0);
// type = 1
```

Još jedan primjer:

```c
new playerobjectid = CreatePlayerObject(playerid, 19174, 986.42767, -983.14850, 40.95220,   0.00000, 0.00000, 186.00000);
SetPlayerObjectMaterialText(playerid, playerobjectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);

new type = IsPlayerObjectMaterialSlotUsed(playerid, playerobjectid, 0);
// type = 2
```

## Srodne Funkcije

- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): Zamijeni teksturu player-objekta s teksturom iz drugog modela u igri.
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): Zamijeni teksturu player objekta sa tekstom.
- [GetPlayerObjectMaterial](GetPlayerObjectMaterial): Uzmi materijalne podatke iz indeksa player-objekta.
- [GetPlayerObjectMaterialText](GetPlayerObjectMaterialText): Uzmi materijalne tekstualne podatke iz indeksa player-objekta.
- [IsObjectMaterialSlotUsed](IsObjectMaterialSlotUsed): Provjerava da li je slot objekta materijala zauzet.
