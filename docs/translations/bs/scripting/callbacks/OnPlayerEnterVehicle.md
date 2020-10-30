---
title: OnPlayerEnterVehicle
description: Ovaj callback je pozvan kada igrač krene da uđe u vozilo, u smislu da igrač nije još u vozilu u trenutku kada se ovaj callback poziva.
tags: ["player", "vehicle"]
---

## Deskripcija

Ovaj callback je pozvan kada igrač krene da uđe u vozilo, u smislu da igrač nije još u vozilu u trenutku kada se ovaj callback poziva.

| Ime         | Deskripcija                                    |
| ----------- | ---------------------------------------------- |
| playerid    | ID igrača koji pokušava da uđe u vozilo.       |
| vehicleid   | ID vozila u kojeg igrač pokušava ući.          |
| ispassenger | 0 ako ulazi kao vozač. 1 ako ulazi kao putnik. |

## Returns

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new string[128];
    format(string, sizeof(string), "Ulazis u vozilo ID %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback je pozvana kada igrač KRENE da uđe u vozilo, ne kada su UŠLI u njega. Pogledaj `OnPlayerStateChange`. Ovaj callback se poziva i kada je igraču odbijen mogućnost ulaska u vozilo (npr. Vozilo je zaključano ili puno).

:::

## Srodne Funkcije

- [PutPlayerInVehicle](../functions/PutPlayerInVehicle.md): Postavi igrača u vozilo.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat.md): Provjeri u kojem sjedištu se nalazi igrač.
