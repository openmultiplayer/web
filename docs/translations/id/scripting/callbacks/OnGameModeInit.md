---
id: OnGameModeInit
title: OnGameModeInit
description: Callback ini terpanggil ketika memuat gamemode.
tags: []
---

## Deskripsi
Callback ini akan terpanggil ketika sebuah gamemode dimuat.

## Contoh

```c
public OnGameModeInit() 
{
    print("Mode Game berhasil dimuat");
    return 1;
}
```

## Noes

:::terpanggil

Fungsi ini dapat digunakan didalam filterscript
untuk mendeteksi apakah gamemode berubah dengan 
perintah RCON seperti changemode atau gmx, sebagaimana
gamemode tidak dapat memuat ulang filterscript.

:::

## Fungsi Terkait
