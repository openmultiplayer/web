---
title: StopAudioStreamForPlayer
sidebar_label: StopAudioStreamForPlayer
description: Zaustavlja trenutni audio tok za igrača.
tags: ["player"]
---

## Deskripcija

Zaustavlja trenutni audio tok za igrača.

| Ime      | Deskripcija                                       |
| -------- | ------------------------------------------------- |
| playerid | Igrač kojem želite zaustaviti trenutni audio tok. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    // Ako igrač napusti vozilo
    if (oldstate == PLAYER_STATE_DRIVER || oldstate == PLAYER_STATE_PASSENGER)
    {
        StopAudioStreamForPlayer(playerid); // Zaustavi audio stream
    }
    return 1;
}
```

## Srodne Funkcije

- [PlayAudioStreamForPlayer](PlayAudioStreamForPlayer): Reprodukuje audio tok za igrača.
- [PlayerPlaySound](PlayerPlaySound): Reprodukujte zvuk za igrača.
