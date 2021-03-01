---
title: GetPlayerCameraAspectRatio
description: Dohvaća omjer slike kamere igrača.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3z i ne radi u nižim verzijama!

:::

## Deskripcija

Dohvaća omjer slike kamere igrača.

| Ime      | Deskripcija                             |
| -------- | --------------------------------------- |
| playerid | ID igrača za dobiti omjer slike kamere. |

## Returns

Omjer slike kamere igrača, kao float. Omjer slike može biti jedna od tri vrijednosti: 4:3 (1,3333334, Float: 0x3FAAAAAB) kada je široki zaslon isključen, 5: 4 (1,2470589, Float: 0x3F9F9FA0) kada je uključen režim poštanskog sandučića i 16: 9 (1,7764707, Float: 0x3FE36364) kada je široki zaslon uključen bez obzira na način poštanskog sandučeta.

## Primjeri

```c
new szString[144];
format(szString, sizeof(szString), "Vaš omjer slike je: %f", GetPlayerCameraAspectRatio(playerid));
SendClientMessage(playerid, -1, szString);
```

## Zabilješke

:::tip

Povratna vrijednost ove funkcije predstavlja vrijednost opcije "široki zaslon" u postavkama prikaza igre, a ne stvarni omjer prikaza zaslona igrača.

:::

## Srodne Funkcije

- [GetPlayerCameraZoom](GetPlayerCameraZoom): Dobij nivo zumiranja kamere igrača.
- [GetPlayerCameraPos](GetPlayerCameraPos): Saznajte gdje je kamera igrača.
- [GetPlayerCameraFrontVector](GetPlayerVameraFrontVector): Dobij prednji vektor kamere igrača.
