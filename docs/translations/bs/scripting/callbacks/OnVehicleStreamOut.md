---
id: OnVehicleStreamOut
title: OnVehicleStreamOut
description: Ovaj callback je pozvan kada se vozilo prestane pojavljivati u igračevom klijentu (previše je daleko i ne može da ga vidi).
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Ovaj callback je pozvan kada se vozilo prestane pojavljivati u igračevom klijentu (previše je daleko i ne može da ga vidi).

| Ime         | Deskripcija                                                   |
| ----------- | ------------------------------------------------------------- |
| vehicleid   | ID vozila koje se prestalo pojavljivati u igračevom klijentu. |
| forplayerid | ID igrača u čijem se klijentu prestalo pojavljivati vozilo.   |

## Returns

Uvijek je pozvan prvo u filterskriptama.

## Primjeri

```c
public OnVehicleStreamOut(vehicleid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Vozilo %d se prestalo prikazivati u tvom klijentu", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback pozvat će i NPC.

:::

## Srodne Funkcije
