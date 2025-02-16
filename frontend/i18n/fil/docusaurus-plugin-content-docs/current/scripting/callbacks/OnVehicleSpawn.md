---
title: OnVehicleSpawn
sidebar_label: OnVehicleSpawn
description: This callback is called when a vehicle respawns.
tags: ["vehicle"]
---

:::warning

Ang callback na ito ay tinatawag **lamang** kapag ang sasakyan ay **muling** umusbong! CreateVehicle at AddStaticVehicle(Ex) ay **hindi** magti-trigger ng callback na ito.

:::

## Paglalarawan

Ang callback na ito ay tinatawag kapag ang isang sasakyan ay nag respawn.

| Name      | Description                         |
| --------- | ----------------------------------- |
| vehicleid | Ang ID ng sasakyan na nag respawn. |

## Returns

0 - Pipigilan ang iba pang mga filterscript mula sa pagtanggap ng callback na ito.

1 - Isinasaad na ang callback na ito ay ipapasa sa susunod na filterscript.

Lagi itong na tatawag una sa mga filterscript.

## Halimbawa ng Paggamit

```c
public OnVehicleSpawn(vehicleid)
{
    printf("Vehicle %i spawned!",vehicleid);
    return 1;
}
```

## Mga Kaugnay na Callbacks

Maaaring maging kapaki-pakinabang ang mga sumusunod na callback, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa.


- [OnVehicleDeath](./OnVehicleDeath): Ang callback na ito ay tinatawag kapag nasira ang isang sasakyan.
- [OnPlayerSpawn](./OnPlayerSpawn): Tinatawag ang callback na ito kapag nag-spawn ang isang player.

## Mga Kaugnay na Functions

Maaaring maging kapaki-pakinabang ang mga sumusunod na function, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa.

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn): Respawn ang sasakyan.
- [CreateVehicle](../functions/CreateVehicle): Gumawa ng sasakyan.