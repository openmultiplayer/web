---
title: GetPlayerCameraUpVector
description: Ova funkcija vraća vektor koji pokazuje na gornju stranu pogleda kamere, ili, drugim riječima, na srednji vrh vašeg ekrana.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Ova funkcija vraća vektor koji pokazuje na gornju stranu pogleda kamere, ili, drugim riječima, na srednji vrh vašeg ekrana.

| Ime      | Deskripcija                                                    |
| -------- | -------------------------------------------------------------- |
| playerid | ID igrača za kojeg želite izvrštiti funkciju                   |
| Float:x  | Float varijabla za čuvanje X pozicije, prosljeđeno referencom  |
| Float:y  | Float varijabla za čuvanje Y pozicije, prosljeđeno referencom  |
| Float:z  | Float varijabla za čuvanje Z pozicije, prosljeđeno referencom  |

## Returns

Pozicija je sačuvana u određenim varijablama.

## Zabilješke

:::warning

Ovaj funkcija je obrisana verziji SA-MP version 0.3b

:::

## Srodne Funkcije

- [GetPlayerCameraPos](GetPlayerCameraPos): Dobijanje pozicija igračeve kamere.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Dobijanje prednjeg vektora kamere igrača.
