---
title: IsPlayerInRangeOfPoint
description: Memeriksa apakah pemain berada dalam jangkauan suatu titik.
tags: ["player"]
---

## Deskripsi

Memeriksa apakah pemain berada dalam jangkauan suatu titik. Fungsi asalnya lebih cepat dari pada implementasi PAWN menggunakan rumus jarak.

| Nama        | Deskripsi                                                            |
| ----------- | ---------------------------------------------------------------------- |
| playerid    | ID dari pemain                                                  |
| Float:range | Jarak terjauh pemain dapat berada di titik dalam jangkauan |
| Float:x     | Kordinat x dari titik untuk mengecek jangkauan                   |
| Float:y     | Kordinat y dari titik untuk mengecek jangkauan                   |
| Float:z     | Kordinat z dari titik untuk mengecek jangkauan                   |

## Returns

true - Pemain berada didalam titik jangkauan.

false - Pemain tidak berada didalam titik jangkauan.

## Contoh

```c
if (!strcmp("/stadium", cmdtext))
{
    if (IsPlayerInRangeOfPoint(playerid, 7.0, 2695.6880, -1704.6300, 11.8438))
    {
        SendClientMessage(playerid,0xFFFFFFFF,"Anda tidak berada di pintu masuk stadium!");
    }
    return 1;
}
```

## Fungsi Terkait

- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): Mendapatkan jarak antara pemain dan titik jangkauan.
- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): Mendapatkan jarak antara kendaraan dan titik jangkauan.
- [GetPlayerPos](GetPlayerPos): Mendapatkan posisi pemain.