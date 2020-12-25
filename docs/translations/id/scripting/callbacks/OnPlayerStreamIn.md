---
title: OnPlayerStreamIn
description: Callback ini akan terpanggil ketika pemain di sekitar pemain lain.
tags: ["player"]
---

:::warning

Callback ini telah ditambahkan dalam SA-MP 0.3a dan tidak akan bekerja pada versi sebelumnya!

:::

## Deskripsi

Callback ini akan terpanggil ketika player di sekitar player lain.

| Nama        | Deskripsi                                                 |
| ----------- | ------------------------------------------------------ |
| playerid    | ID pemain yang berada di sekitar pemain. |
| forplayerid | ID pemain. | // Kalau salah tolong koreksi

## Returns

Ini akan selalu terpanggil pertama di filterscripts

## Contoh
```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Player %d berada di sekitarmu.", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Catatan

::tip
Callback ini juga dipanggil oleh NPC
::

## Fungsi Terkait
// Tidak Ada
