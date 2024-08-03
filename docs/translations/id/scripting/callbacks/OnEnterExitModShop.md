---
title: OnEnterExitModShop
description: Callback ini akan terpanggil ketika pemain memasuki atau keluar dari mod shop.
tags: []
---

## Deskripsi

Callback ini akan terpanggil ketika pemain memasuki atau keluar dari mod shop.

| Nama       | Deskripsi                                                        |
| ---------- | ---------------------------------------------------------------- |
| playerid   | ID dari pemain yang masuk atau keluar dari modshop               |
| enterexit  | 1 jika pemain masuk 0 jika player keluar                         |
| interiorid | ID Interior dari modshop yang pemain masuki (atau 0 jika keluar) |

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

Bug yang dikenal: Pemain akan menyatu ketika berada di dalam mod shop yang sama.

:::

## Fungsi Terkait

- [AddVehicleComponent](../functions/AddVehicleComponent.md): Menambahkan komponen ke kendaraan.
