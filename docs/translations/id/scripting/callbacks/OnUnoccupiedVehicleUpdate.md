---
title: OnUnoccupiedVehicleUpdate
description: Callback ini dipanggil ketika klien pemain memperbarui/menyinkronkan posisi kendaraan yang tidak mereka kendarai. Hal ini dapat terjadi di luar kendaraan atau ketika pemain menjadi penumpang kendaraan yang tidak memiliki pengemudi.
tags: ["vehicle", "player", "float"]
---

:::warning

Callback ini telah ditambahkan dalam SA-MP 0.3c R3 dan tidak akan bekerja pada versi sebelumnya!

:::

## Deskripsi

Callback ini dipanggil ketika klien pemain memperbarui/menyinkronkan posisi kendaraan yang tidak mereka kendarai. Hal ini dapat terjadi di luar kendaraan atau ketika pemain menjadi penumpang kendaraan yang tidak memiliki pengemudi.

| Nama           | Deskripsi                                                         |
| -------------- | ----------------------------------------------------------------- |
| vehicleid      | ID kendaraan yang posisinya diperbarui                            |
| playerid       | ID pemain yang mengirim pembaruan sinkronisasi posisi kendaraan   |
| passenger_seat | ID kursi jika pemain adalah penumpang. 0 = tidak di dalam kendaraan, 1 = penumpang depan, 2 = kiri belakang, 3 = kanan belakang, 4+ adalah untuk coach/bus, dll. Dengan banyak kursi penumpang.   |
| new_x          | Koordinat X baru dari kendaraan. Parameter ini ditambahkan pada 0.3z. Biarkan saja jika menggunakan versi sebelumnya.  |
| new_y          | Koordinat Y baru dari kendaraan. Parameter ini ditambahkan pada 0.3z. Biarkan saja jika menggunakan versi sebelumnya.  |
| new_z          | Koordinat Z baru dari kendaraan. Parameter ini ditambahkan pada 0.3z. Biarkan saja jika menggunakan versi sebelumnya.  |
| vel_x          | Kecepatan X baru dari kendaraan. Parameter ini ditambahkan dalam 0.3z R4. Biarkan saja jika menggunakan versi sebelumnya.  |
| vel_y          | Kecepatan Y baru dari kendaraan. Parameter ini ditambahkan dalam 0.3z R4. Biarkan saja jika menggunakan versi sebelumnya.  |
| vel_z          | Kecepatan Z baru dari kendaraan. Parameter ini ditambahkan dalam 0.3z R4. Biarkan saja jika menggunakan versi sebelumnya.  |

## Returns

Ini selalu dipanggil pertama kali dalam filterscript, jadi mengembalikan 0 di sana juga menghalangi script lain untuk melihatnya.

## Contoh

```c
public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)
{
    // Periksa apakah berpindah menjauh
    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)
    {
        // Menolak pembaruan
        return 0;
    }

    return 1;
}
```

## Catatan

:::warning

Callback ini sangat sering dipanggil per detik per kendaraan yang tidak dihuni. Anda harus berhati-hati dalam menempatkan pemrosesan operasi penulisan/pembacaan file yang kompleks dalam pemanggilan ini. GetVehiclePos akan mengembalikan koordinat lama dari kendaraan sebelum pembaruan ini.

:::

## Callback Terkait

Callback berikut ini mungkin berguna, karena terkait dengan callback ini atau yang lainnya.
- [OnTrailerUpdate](../callbacks/OnTrailerUpdate.md): Dipanggil ketika posisi trailer disinkronkan oleh klien.
