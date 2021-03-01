---
title: PlayerPlaySound
description: Puštanje određenog zvuka za igrača.
tags: ["player"]
---

## Deskripcija

Puštanje određenog zvuka za igrača.

Za biblioteku koja sadrži sve zvukove, pogledajte [this](https://github.com/WoutProvost/samp-sound-array).

| Ime      | Deskripcija                                                       |
| -------- | ----------------------------------------------------------------- |
| playerid | ID igrača za kojeg će se pustiti zvuk                             |
| soundid  | Zvuk koji će se pustiti                                           |
| Float:x  | X kordinata za zvuk gdje će se pustiti. (0.0 za nikakvu poziciju) |
| Float:y  | Y kordinata za zvuk gdje će se pustiti. (0.0 za nikakvu poziciju) |
| Float:z  | Z kordinata za zvuk gdje će se pustiti. (0.0 za nikakvu poziciju) |

## Returns

1: Funkcija je uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da igrač nije konektovan.

## Primjeri

```c
// zvuk udaranja (odgovara za komande poput /slap well). Zvuk će biti tih, kao izvor je zapravo 10 metara iznad igrača.
PlayerPlaySound(playerid, 1130, 0.0, 0.0, 10.0);
```

## Zabilješke

:::tip

Koristite samo koordinate ako želite da pustite zvuk na određenoj poziciji. Postavite koordinate svima na 0.0 da bi samo pustili zvuk.

:::

## Srodne Funkcije

- [PlayCrimeReportForPlayer](PlayCrimeReportForPlayer): Puštanje izvještaja o zločinu za igrača.
- [PlayAudioStreamForPlayer](PlayAudioStreamForPlayer): Puštanje audio stream-a za igrača.
- [StopAudioStreamForPlayer](StopAudioStreamForPlayer): Prekidanje trenutnog audio stream-a za igrača.
