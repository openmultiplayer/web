---
title: GetPlayerCameraPos
description: Dobijanje pozicije kamere igrača.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Dobijanje pozicija kamere igrača.

| Ime      | Deskripcija                                                    |
| -------- | -------------------------------------------------------------- |
| playerid | ID igrača od kojeg želimo dobiti poziciju kamere               |
| Float:x  | Float varijabla za čuvanje X pozicije, prosljeđeno referencom  |
| Float:y  | Float varijabla za čuvanje Y pozicije, prosljeđeno referencom  |
| Float:z  | Float varijabla za čuvanje Z pozicije, prosljeđeno referencom  |

## Returns

Igračeva pozicija je sačuvana u određenim varijablama.

## Primjeri

```c
public OnPlayerDisconnect(playerid)
{
    new Float:x, Float:y, Float:z;
    GetPlayerCameraPos(playerid, x, y, z);

    printf("Igrač je otišao kada je njegova kamera bila na %f,%f,%f.", x, y, z);
    // Ovo biste mogli napisati u korisničku datoteku.

    return 1;
}
```

## Zabilješke

:::warning

Pozicija igračeve kamere se samo update-uje jednom po sekundi, osim ako cilja. Preporučuje se da se postavi jednosekundni tajmer ako želite poduzeti radnju koja se oslanja na položaj igračeve kamere.

:::

## Srodne Funkcije

- [SetPlayerCameraPos](SetPlayerCameraPos): Postavljanje pozicije igračeve kamere.
- [GetPlayerCameraZoom](GetPlayerCameraZoom): Dobijanje zoom levela igračeve kamere.
- [GetPlayerCameraAspectRatio](GetPlayerCameraAspectRation): Dobijanje omjera igračeve kamere.
- [GetPlayerCameraMode](GetplayerCameraMode): Dobijanje režima igračeve kamere.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Dobijanje prednjeg vektora kamere igrača.
