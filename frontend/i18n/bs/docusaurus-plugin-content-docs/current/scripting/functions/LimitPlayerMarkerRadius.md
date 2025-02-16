---
title: LimitPlayerMarkerRadius
description: Postavite radijus markera/oznake igrača.
tags: ["player"]
---

## Deskripcija

Postavite radijus markera igrača.

| Ime                 | Deskripcija                                        |
| ------------------- | -------------------------------------------------- |
| Float:marker_radius | Radijus na kojem će se markeri/oznake prikazivati. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnGameModeInit()
{
    LimitPlayerMarkerRadius(100.0);
}
```

## Srodne Funkcije

- [ShowPlayerMarkers](ShowPlayerMarkers): Odlučite hoće li server prikazivati ​​oznake na radaru.
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): Postavite marker/oznaku igrača.
- [LimitGlobalChatRadius](LimitGlobalChatRadius): Ograničite udaljenost između igrača potrebnih da biste vidjeli njihov chat.
