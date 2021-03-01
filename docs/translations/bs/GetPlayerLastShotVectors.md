---
title: GetPlayerLastShotVectors
description: Dohvaća početni i krajnji (pogođeni) položaj posljednjeg metka koji je igrač ispalio.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3z i ne radi u nižim verzijama!

:::

## Deskripcija

Dohvaća početni i krajnji (pogođeni) položaj posljednjeg metka koji je igrač ispalio.

| Ime             | Deskripcija                                                       |
| --------------- | ----------------------------------------------------------------- |
| playerid        | ID player to get the last bullet shot information of.             |
| &Float:fOriginX | Float varijabla za pohraniti X kordinatu odakle je metak potekao. |
| &Float:fOriginY | Float varijabla za pohraniti Y kordinata odakle je metak potekao. |
| &Float:fOriginZ | Float varijabla za pohraniti Z kordinata odakle je metak potekao. |
| &Float:fHitPosX | Float varijabla za pohraniti X kordinatu gdje je metak pogodiot.  |
| &Float:fHitPosY | Float varijabla za pohraniti Y kordinata gdje je metak pogodiot.  |
| &Float:fHitPosY | Float varijabla za pohraniti Z kordinata gdje je metak pogodiot.  |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni igrač ne postoji.

Pozicija zadnjeg metka pohranjena je u navedenim varijablama.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/lastshot", true) == 0)
    {
        new lsString[128],
            Float:fOriginX, Float:fOriginY, Float:fOriginZ,
            Float:fHitPosX, Float:fHitPosY, Float:fHitPosZ;

        GetPlayerLastShotVectors(playerid, fOriginX, fOriginY, fOriginZ, fHitPosX, fHitPosY, fHitPosZ);
        format(lsString, 128, "Informacije posljednjeg ispaljenog metka: Origin: %f, %f, %f. Hit position: %f, %f, %f", fOriginX, fOriginY, fOriginZ, fHitPosX, fHitPosY, fHitPosZ);
        SendClientMessage(playerid, -1, lsString);
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::warning

Ova funkcija će raditi samo kad je omogućena kompenzacija zaostajanja (lag compensation). Ako igrač ništa ne pogodi, pogođene pozicije će biti 0. To znači da trenutno ne možete izračunati koliko metak putuje kroz otvoreni zrak.

:::

## Srodne Funkcije

- [GetPlayerWeaponData](GetPlayerWeaponData): Saznajte informacije o oružju koje igrač ima.
- [GetPlayerWeapon](GetPlayerWeapon): Provjeri koje oružje igrač trenutno drži.
- [VectorSize](VectorSize): Dobijte dužinu (normu) vektora.
- [OnPlayerWeaponShot](../callbacks/OnPlayerWeaponShot): Pozvano kada igrač koristi oružje.
