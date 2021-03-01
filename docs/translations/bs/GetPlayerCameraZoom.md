---
title: GetPlayerCameraZoom
description: Dohvata nivo zumiranja kamere za određenog igrača.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3z i ne radi u nižim verzijama!

:::

## Deskripcija

Dohvata nivo zumiranja kamere za određenog igrača.

| Ime      | Deskripcija                                 |
| -------- | ------------------------------------------- |
| playerid | ID igrača za kojeg želite izvršiti funkciju |

## Returns

Zoom level igračeve kamere (kamera, snajper...), float tip.

## Primjeri

```c
new szString[144];
format(szString, sizeof(szString), "Vaš zoom level je: %f", GetPlayerCameraZoom(playerid));
SendClientMessage(playerid, -1, szString);
```

## Zabilješke

:::tip

Ova funkcija dohvata zoom level GAME kamere (uključujući snajper), ali ne i kameru WEAPON.

:::

## Srodne Funkcije

- [GetPlayerCameraAspectRatio](GetPlayerCameraAspectRation): Dobijanje omjera igračeve kamere.
- [GetPlayerCameraPos](GetPlayerCameraPos): Dobijanje pozicije igračeve kamere.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Dobijanje prednjeg vektora kamere igrača.
