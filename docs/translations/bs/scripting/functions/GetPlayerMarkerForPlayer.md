---
title: GetPlayerMarkerForPlayer
description: Dobij boju igračovog nametag-a i radara za drugog igrača.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Deskripcija

Dobij boju igračovog **nametag-a** i **radara** za drugog igrača.

| Ime      | Deskripcija                                                                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | Igrač koji može vidjeti igračevu promijenjenu boju blipa/nametag-a                                                                              |                        |
| targetid | Igrač čija je boja promijenjena.                                                                                                                |

## Return-ovi

Boja **nametag-a** i **radara** target igrača.

## Primjeri

```c
GetPlayerMarkerForPlayer(playerid, targetid);
```

## Srodne Funkcije

- [ShowPlayerMarkers](ShowPlayerMarkers): Odluči da li server treba da prikazuje markere na radaru.
- [LimitPlayerMarkerRadius](LimitPlayerMarkerRadius): Ograniči radijus markera igrača.
- [SetPlayerColor](SetPlayerColor): Postavi boju igrača.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): Prikaži ili sakrij nametag određenog igrača.
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): Postavi marker igrača za određenog igrača.
