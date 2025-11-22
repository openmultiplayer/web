---
title: OnVehicleDeath
sidebar_label: OnVehicleDeath
description: Ovaj callback je pozvan kada se vozilo unište - bilo eksplozijom ili utapanjem u vodi.
tags: ["vehicle"]
---

## Deskripcija

Ovaj callback je pozvan kada se vozilo unište - bilo eksplozijom ili utapanjem u vodi.

| Ime       | Deskripcija                                                                                                                                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| vehicleid | ID vozila koje je uništeno.                                                                                                                   |
| killerid  | ID igrača koji je prijavio (sinhronizovao) uništenje vozila (ime je obmanjujuće). Generalno vozač ili putnik (ako ih ima) ili najbliži igrač. |

## Returns

Uvijek je pozvan prvo u filterskriptama.

## Primjeri

```c
public OnVehicleDeath(vehicleid, killerid)
{
    new string[64];
    format(string, sizeof(string), "Vozilo %i je uništeno. Prijavljeno od strane igrača %i.", vehicleid, killerid);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callbak će također biti pozvan kada vozilo uđe u vodu, ali vozilo može biti sačuvano od uništenja teleportiranjem ili ako ga izvadite iz vode (upravljanjem, ako je samo djelomično potopljeno). Callback neće biti pozvan drugi put, i vozilo će možda nestati kada igrač izađe, ili nakon kratkog vremena.

:::

## Srodne Funkcije

- [SetVehicleHealth](../functions/SetVehicleHealth): Postavi healthe vozila.
