---
title: OnActorStreamIn
sidebar_label: OnActorStreamIn
description: Callback ini akan terpanggil ketika sebuah aktor berada di jangkauan stream dari klien pemain.
tags: []
---

:::warning

Fungsi ini telah ditambahkan dalam SA-MP 0.3.7 dan tidak bekerja pada versi dibawahnya!

:::

## Deskripsi

Callback ini akan terpanggil ketika sebuah aktor berada di jangkauan stream dari klien pemain.

| Nama        | Deskripsi                                                       |
| ----------- | --------------------------------------------------------------- |
| actorid     | ID dari aktor yang berada dalam jangakauan stream klien pemain. |
| forplayerid | ID dari pemain yang berada di jangkauan stream aktor.           |

## Returns

Selalu terpanggil pertama di filterscripts.

## Contoh

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new sring[40];
    format(string, sizeof(string), "Actor %d berada disekitar anda.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Catatan

:::tip

Callback ini akan terpanggil juga oleh NPC.

:::

## Fungsi Terkait
