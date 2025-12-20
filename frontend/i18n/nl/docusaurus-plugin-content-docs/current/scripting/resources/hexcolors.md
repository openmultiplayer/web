---
title: "Hex-kleuren"
sidebar_label: "Hex-kleuren"
description: "Uitleg over hexadecimale kleurweergave in SA:MP/open.mp."
---

## Wat is hex?

Het hexadecimale talstelsel (base 16) gebruikt 16 symbolen: 0–9 en A–F. `A` staat voor 10, `B` voor 11, …, `F` voor 15. Getallen worden als machten van 16 geschreven, vergelijkbaar met decimalen (machten van 10).

Voorbeeld: decimaal `255` is hex `FF` omdat `15*16^1 + 15*16^0 = 240 + 15`.

Hex in Pawn gebruikt de prefix `0x`, zoals `0x04` (vergelijk met `0b` voor binair).

## Hex-kleuren

Formaat:

```c
RR GG BB AA
```

- `RR`: rood (00–FF)
- `GG`: groen (00–FF)
- `BB`: blauw (00–FF)
- `AA`: alpha/transparantie (00–FF)

Voorbeelden:

```c
0x00000000 // zwart
0xFF0000FF // fel rood
0x00FF00FF // fel groen
0x0000FFFF // fel blauw
0xFFFFFFFF // wit

0xFFFF00FF // geel
0xFF00FFFF // paars
0x00FFFFFF // cyaan
```


