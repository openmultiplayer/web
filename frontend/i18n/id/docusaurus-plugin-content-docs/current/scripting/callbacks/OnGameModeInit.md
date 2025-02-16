---
title: OnGameModeInit
sidebar_label: OnGameModeInit
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

## Catatan

:::tip

Fungsi ini dapat digunakan dalam sebuah filterscript untuk mendeteksi apakah sebuah gamemode berubah dengan perintah RCON seperti changemode atau gmx, sebagaimana gamemode tidak dapat memuat ulang filterscript.

:::

## Fungsi Terkait
