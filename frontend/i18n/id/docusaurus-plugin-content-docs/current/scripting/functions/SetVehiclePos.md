---
title: SetVehiclePos
sidebar_label: SetVehiclePos
description: Set posisi pada kendaraaan.
tags: ["vehicle"]
---

## Deskripsi

Set posisi pada kendaraan.

| Nama      | Deskripsi                                  |
| --------- | -------------------------------------------- |
| vehicleid | ID Kendaraan yang ingin di set posisi   |
| Float:x   | Koordinat X untuk set posisi pada kendaraan. |
| Float:y   | Koordinat Y untuk set posisi pada kendaraan. |
| Float:z   | Koordinat Z untuk set posisi pada kendaraan. |

## Returns

1: Fungsi berhasil dijalankan.

0: Fungsi gagal dijalankan. Ini berarti kendaraan tidak ada.

## Contoh

```c
// Letakkan kendaraan player pada koordinat 0, 0, 3 (Tengah Map SA)
new vehicleid = GetPlayerVehicleID(playerid);
SetVehiclePos(vehicleid, 0, 0, 3);
```

## Catatan

:::warning

Kendaraan kosong tidak akan jatuh setelah diteleportasi ke udara.

:::

## Fungsi Terkait

- [SetPlayerPos](SetPlayerPos): Set player posisi.
- [GetVehiclePos](GetVehiclePos): Mendapatkan posisi kendaraan.
- [SetVehicleZAngle](SetVehicleZAngle): Atur arah kendaraan.
