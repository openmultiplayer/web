---
title: SetVehicleHealth
sidebar_label: SetVehicleHealth
description: Set health kendaraan.
tags: ["vehicle"]
---

## Deskripsi

Mengatur Health kendaraan. Ketika kendaraan menurun, mesin kendaraan akan mengeluarkan asap, dan akhirnya api ketika menurun health kendaraan berkurang menjadi 250 (%25)

| Nama         | Deskripsi                                 |
| ------------ | ------------------------------------------- |
| vehicleid    | ID Kendaraan untuk set health kendaran |
| Float:health | Health, diberikan sebagai nilai Float         |

## Returns

1: Fungsi berhasil dijalankan.

0: Fungsi gagal dijalankan. Ini berarti kendaraan tidak ada.

## Contoh

```c
if (strcmp("/fixengine", cmdtext, true) == 0)
{
    new
        vehicleid = GetPlayerVehicleID(playerid);

    SetVehicleHealth(vehicleid, 1000);
    SendClientMessage(playerid, COLOUR_WHITE, "Mesin kendaraan berhasil di benarkan");
    return 1;
}
```

## Catatan

:::tip

Full health kendaraan adalah 1000. Nilai yang lebih tinggi dimungkinkan. Untuk informasi lebih lanjut tentang health values, lihat [ini.](../resources/vehiclehealth)

:::

## Fungsi terkait

- [GetVehicleHealth](GetVehicleHealth): Cek health kendaraan.
- [RepairVehicle](RepairVehicle): Memperbaiki sebuah kendaraan.
- [SetPlayerHealth](SetPlayerHealth): Mengset health player.
- [OnVehicleDeath](../callbacks/OnVehicleDeath): Dipanggil ketika kendaraan hancur / meledak.
