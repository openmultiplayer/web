---
title: SetWeather
description: Mengatur cuaca untuk semua player.
tags: []
---

## Deskripsi

Mengatur cuaca untuk semua player.

| Nama      | Deskripsi                                      |
| --------- | ------------------------------------------------ |
| weatherid | ID [cuaca](../resources/weatherid)|

## Returns

Fungsi ini tidak mengembalikan nilai tertentu.

## Contoh

```c
if (!strcmp(cmdtext, "/sandstorm", true))
{
    SetWeather(19);
    return 1;
}
```

## Catatan

:::tip

Jika TogglePlayerClock menyala, Cuaca perlahan-lahan akan berubah dari waktu ke waktu, alih alih berubah secara instant. Hanya ada 21 ID cuaca yang valid dalam game (0 - 20), Namun game tidak memiliki bentuk cek jangkauan.

:::

## Fungsi Terkait

- [SetPlayerWeather](SetPlayerWeather): Set cuaca untuk player.
- [SetGravity](SetGravity): Set global gravitasi.
