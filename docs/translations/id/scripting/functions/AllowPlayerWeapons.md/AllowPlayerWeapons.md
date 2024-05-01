--- 
title: AllowPlayerWeapons
::warning

Fungsi ini ditambahkan pada omp v1.1.0.2612 dan tidak akan berfungsi pada versi sebelumnya!
:::
description: Mengaktifkan/Menonaktifkan Senjata Untuk Pemain
---

|   Nama     |   Deskripsi                                   |
|------------------------------------------------------------|
|  Playerid  | ID Pemain Untuk Mengizinkan Senjata           |
|------------------------------------------------------------|
| bool:allow | True untuk Mengizinkan & False Untuk Melarang |

## Returns

Fungsi Ini Selalu Mengembalikan Nilai True

## Contoh

```c
public OnPlayerConnect(playerid)
{
    AllowPlayerWeapons(playerid, true);
    return 1;
}
```

## Fungsi Terkait

- [ArePlayerWeaponsAllowed](ArePlayerWeaponsAllowed): Apakah Boleh Player Menggunakan Senjata?
