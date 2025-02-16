---
title: OnPlayerFinishedDownloading
sidebar_label: OnPlayerFinishedDownloading
description: Ovaj callback je pozvan kada igrač dovrši preuzimanje custom modela.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.DL R1 i ne radi u nižim verzijama!

:::

## Deskripcija

Ovaj callback je pozvan kada igrač dovrši preuzimanje custom modela. Za više informmacija o tome kako dodati custom modele u vaš server, pogledajte pogledajte nit izdanja i ovaj vodič.

| Ime          | Deskripcija                                                                             |
| ------------ | --------------------------------------------------------------------------------------- |
| playerid     | ID igrača koji je dovršio preuzimanje custom modela.                                    |
| virtualworld | ID virtualnog svijeta (virtual world) igrača koji je dovršio preuzimanje custom modela. |

## Returns

This callback does not handle returns.

## Primjeri

```c
public OnPlayerFinishedDownloading(playerid, virtualworld)
{
    SendClientMessage(playerid, 0xffffffff, "Downloads finished.");
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback je pozvan svaki put kada igrač promijeni virtualni svijet (virtual world), iako nema modela koji su prezentovani u tom virtualnom svijetu.

:::

## Srodne Funkcije
