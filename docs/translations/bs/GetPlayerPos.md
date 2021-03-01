---
title: GetPlayerPos
description: Dobiti poziciju igrača koju predstavljaju X, Y i Z kordinate.
tags: ["player"]
---

## Deskripcija

Dobiti poziciju igrača koju predstavljaju X, Y i Z kordinate.

| Ime      | Deskripcija                                                           |
| -------- | --------------------------------------------------------------------- |
| playerid | ID igrača za dobiti poziciju.                                         |
| &Float:x | Float varijabla za pohraniti X kordinatu in, proslijeđeno referencom. |
| &Float:y | Float varijabla za pohraniti Y kordinata in, proslijeđeno referencom. |
| &Float:z | Float varijabla za pohraniti Z kordinata in, proslijeđeno referencom. |

## Returns

istina(true) o uspjehu.

lažno(false) u slučaju neuspjeha (tj. igrač nije povezan).

## Primjeri

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    // Proglasite 3 float varijable za pohranjivanje X, Y i Z kordinata u
    new Float:x, Float:y, Float:z;

    // Koristite GetPlayerPos, prosljeđujući 3 float varijable koje smo upravo kreirali
    GetPlayerPos(playerid, x, y, z);

    // Napravite preuzimanje novca na poziciji igrača
    CreatePickup(1212, 4, x, y, z, -1);
   return 1;
}
```

## Zabilješke

:::warning

Poznato je da ova funkcija vraća nepouzdane vrijednosti kada se koristi u OnPlayerDisconnect i OnPlayerRequestClass. To je zato što igrač nije mriješten.

:::

## Srodne Funkcije

- [SetPlayerPos](SetPlayerPos): Postavite poziciju igrača.
- [GetVehiclePos](GetVehiclePos): Doznajte položaj vozila.
- [IsPlayerInRangeOfPoint](IsPlayerInRangeOfPoint): Provjeri da li je igrač u blizini određene tačke.
- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): Dobij razmak između igrača i tačke.
