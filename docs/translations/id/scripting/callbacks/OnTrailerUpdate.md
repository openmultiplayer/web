---
title: OnTrailerUpdate
description: Callback ini akan terpanggil ketika pemain menderek atau menancapkan sebuah kendaraan.
tags: ["player", "vehicle"]
---

:::warning

Callback ini telah ditambahkan dalam SA-MP 0.3z R4 dan tidak akan bekerja pada versi sebelumnya!

:::

## Deskripsi

Callback ini akan terpanggil ketika pemain menderek atau menancapkan sebuah kendaraan.

| Nama      | Deskripsi                                                 |
| --------- | --------------------------------------------------------- |
| playerid  | ID dari pemain yang menderek/menancapkan sebuah kendaraan |
| vehicleid | ID dari kendaraan yang ingin diderek/ditancapkan          |

## Returns

0 - Membatalkan semua penggabungan trailer yang dikirim oleh pemain lain. Penggabungan tetap dikirim ke pemain terdahulu.

1 - Memproses penggabungan trailer dengan normal dan menyinkronkan itu diantara semua pemain.

Ini selalu dipanggil pertama kali dalam filterscript

## Contoh

```c
public OnTrailerUpdate(playerid, vehicleid)
{
    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid));
    return 0;
}
```

## Catatan

:::warning

Callback ini sangat sering dipanggil per detik per trailer. Anda harus berhati-hati dalam menempatkan pemrosesan operasi penulisan/pembacaan file yang kompleks dalam pemanggilan ini.

:::

## Fungsi Terkait

Callback berikut ini mungkin berguna, karena terkait dengan callback ini atau yang lainnya.
- [OnUnoccupiedVehicleUpdate](../callbacks/OnUnoccupiedVehicleUpdate.md): Callback ini dipanggil ketika posisi kendaraan tanpa pengemudi disinkronkan oleh klien.

## Fungsi Terkait

Callback berikut ini mungkin berguna, karena terkait dengan callback ini atau yang lainnya.
- [GetVehicleTrailer](../functions/GetVehicleTrailer.md): Periksa trailer apa yang ditarik oleh kendaraan..
- [IsTrailerAttachedToVehicle](../functions/IsTrailerAttachedToVehicle.md): Periksa apakah trailer terpasang pada kendaraan.
- [AttachTrailerToVehicle](../functions/AttachTrailerToVehicle.md): Memasang trailer ke kendaraan.
- [DetachTrailerFromVehicle](../functions/DetachTrailerFromVehicle.md): Melepaskan trailer dari kendaraan.
