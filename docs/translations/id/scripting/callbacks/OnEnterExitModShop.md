---
id: OnEnterExitModShop
title: OnEnterExitModShop
description: Callback ini akan terpanggil ketika player memasuki atau keluar dari mod shop.
tags: []
---

:::warning

Callback ini telah ditambahkan dalam SA-MP 0.3a dan tidak akan bekerja pada versi sebelumnya!

:::

## Deskripsi

Callback ini akan terpanggil ketika player memasuki atau keluar dari mod shop.

| Nama       | Deskripsi                                                        |
| ---------- | ---------------------------------------------------------------- |
| playerid   | ID dari player yang masuk atau keluar dari modshop               |
| enterexit  | 1 jika player masuk 0 jika player keluar                         |
| interiorid | ID Interior dari modshop yang player masuki (atau 0 jika keluar) |

## Returns

Ini akan selalu terpanggil pertama di filterscripts

## Contoh

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if(enterexit == 0) // Jika enterexit bernilai 0, tandanya mereka sudah keluar
    {
        SendClientMessage(playerid, COLOR_WHITE, "Keren abiez kendaraannya! tapi kena pajak $100 jiahahaha.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## Catatan

:::warning

Bug yang dikenal: Player akan menyatu ketika berada di dalam mod shop yang sama.

:::

## Fungsi Terkait

- [AddVehicleComponent](../functions/AddVehicleComponent.md): Menambahkan komponen ke kendaraan.
