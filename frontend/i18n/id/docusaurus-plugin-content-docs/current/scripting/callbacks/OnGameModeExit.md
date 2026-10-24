---
title: OnGameModeExit
sidebar_label: OnGameModeExit
description: Callback ini akan terpanggil ketika gamemode berakhir, entah itu lewat 'gmx', server yang dimatikan, atau GameModeExit.
tags: []
---

## Deskripsi

Callback ini akan terpanggil ketika gamemode berakhir, entah itu lewat 'gmx' server yang dimatikan, atau GameModeExit.

## Returns

Callback ini tidak mengelola pengembalian nilai.

Selalu terpanggil pertama di gamemode.

## Contoh

```c
public OnGameModeExit()
{
    print("Mode Game berakhir.");
    return 1;
}
```

## Catatan

:::tip

- Fungsi ini juga dapat digunakan dalam sebuah filterscript untuk mendeteksi apakah sebuah gamemode berubah dengan perintah RCON seperti changemode atau gmx, sebagaimana gamemode tidak dapat memuat ulang filterscript.
- Ketika menggunakan OnGameModeExit sehubungan dengan perintah konsol 'rcon gmx' perlu diingat akan ada potensi client bugs terjadi seperti contoh panggilan RemoveBuildingForPlayer yang berlebihan selama OnGameModeInit yang dapat mengakibatkan crash pada client.
- Callback ini TIDAK akan dipanggil apabila server crash atau prosesnya dimatikan dengan cara lain, seperti menggunakan perintah kill di linux.

:::

## Related Callbacks

Callback berikut mungkin berguna, karena terkait dengan callback ini dalam satu atau lain cara

- [OnFilterScriptExit](OnFilterScriptExit): Callback ini akan terpanggil ketika filterscript dibongkar.

## Related Functions

- [GameModeExit](../functions/GameModeExit): Keluar dari gamemode saat ini.
