---
title: IsObjectMaterialSlotUsed
sidebar_label: IsObjectMaterialSlotUsed
description: Provjerava da li je slot objekta materijala zauzet.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Deskripcija

Provjerava da li je slot objekta materijala zauzet.

| Ime           | Deskripcija                                 |
|---------------|---------------------------------------------|
| objectid      | ID objekta.                                 |
| materialIndex | Indeks materijala na objektu. (0 do 15)     |

## Returns

Funkcija vraća vrstu upotrebe slota za materijal.

`0` - Nijedan

`1` - Materijal

`2` - Tekst

## Primjeri

```c
new objectid = CreateObject(19371, 978.71143, -925.25708, 42.63720,   0.00000, 0.00000, 2.00000);
SetObjectMaterial(objectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);

new type = IsObjectMaterialSlotUsed(objectid, 0);
// type = 1
```

Još jedan primjer:

```c
new objectid = CreateObject(19174, 986.42767, -983.14850, 40.95220,   0.00000, 0.00000, 186.00000);
SetObjectMaterialText(objectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);

new type = IsObjectMaterialSlotUsed(objectid, 0);
// type = 2
```

## Srodne Funkcije

- [SetObjectMaterial](SetObjectMaterial): Zamijeni teksturu objekta s teksturom iz drugog modela u igri.
- [SetObjectMaterialText](SetObjectMaterialText): Zamijeni teksturu objekta sa tekstom.
- [GetObjectMaterial](GetObjectMaterial): Uzmi materijalne podatke iz indeksa objekta.
- [GetObjectMaterialText](GetObjectMaterialText): Uzmi materijalne tekstualne podatke iz indeksa objekta.
- [IsPlayerObjectMaterialSlotUsed](IsPlayerObjectMaterialSlotUsed): Provjerava da li je slot player-objekta materijala zauzet.
