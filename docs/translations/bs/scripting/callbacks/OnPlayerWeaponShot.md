---
title: OnPlayerWeaponShot
description: Ovaj callback je pozvan kada igrač ispali hitac iz oružja.
tags: ["player"]
---

## Deskripcija

Ovaj callback je pozvan kada igrač ispali hitac iz oružja. Samo oružja sa mecima su podržana. Drive-by je podržan samo od strane putnika (ne vozačev drive-by, i ne hice koje pucate iz sea sparrowa / huntera).

| Ime                     | Deskripcija                                                                                                |
|-------------------------|------------------------------------------------------------------------------------------------------------|
| playerid                | ID igrača koji je ispalio hitac.                                                                           |
| WEAPON:weaponid         | ID [oružja](../resources/weaponids) iz kojeg je igrač ispalio hitac.                                       |
| BULLET_HIT_TYPE:hittype | [Tip](../resources/bullethittypes) onoga što je hitac pogodio (ništa, igrača, vozilo, ili (player)object). |
| hitid                   | ID igrača, vozila ili objekta u koji je ispaljen hitac.                                                    |
| Float:fX                | X kordinata u koju je ispalje hitac.                                                                       |
| Float:fY                | Y kordinata u koju je ispalje hitac.                                                                       |
| Float:fZ                | Z kordinata u koju je ispalje hitac.                                                                       |

## Returns

0 - Spriječi da metak nanese povredu.

1 - Dozvoli da metak nanese povredu.

Uvijek je pozvan prvo u flterskripti te će return-ovanje 0 ovdje blokirati ostale skripte da ga vide.

## Primjeri

```c
public OnPlayerWeaponShot(playerid, WEAPON:weaponid, BULLET_HIT_TYPE:hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    new szString[144];
    format(szString, sizeof(szString), "Weapon %i fired. hittype: %i   hitid: %i   pos: %f, %f, %f", weaponid, hittype, hitid, fX, fY, fZ);
    SendClientMessage(playerid, -1, szString);
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback je pozvan samo kada je is only called when kompenzacija zakašnjenja omogućena. Ako je hittype:

- `BULLET_HIT_TYPE_NONE`: fX, fY i fZ parametri su normalne kordinate, dati će 0.0 za kordinatu ako ništa nije pogođeno (npr. daleki objekat kojeg metak ne može dohvatiti);
- Ostali: fX, fY i fZ su pomaci u odnosu na hitid.

:::

:::tip

[GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors) se može koristiti u ovom callbacku za više detalja o vektoru metka.

:::

:::warning

Poznati Bag(ovi):

- Nije pozvan kada ispalite hitac u vozilo kao vozač ili ako gledate iza sa omogućenim aim-anjem (pucanje u zrak).
- Pozvan je kada `BULLET_HIT_TYPE_VEHICLE` sa korektnim hitid-em (hit iz igračevog vozila) ako pucate igrača koji je u vozilu. Neće biti pozvan kao `BULLET_HIT_TYPE_PLAYER` nikako.
- Djelomično popravljeno u SA-MP 0.3.7: Ako zlonamjerni korisnik pošalje lažne podatke o fake oružju, drugi klijenti igrača mogu se zalediti ili crashovati. Da biste se izborili protiv toga, provjerite može li prijavljeni weaponid stvarno ispaliti metke.

:::

## Srodne Funkcije

- [GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors): Dohvaća vektor zadnjeg hica kojeg je igrač ispalio.
