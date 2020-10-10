---
id: OnPlayerText
title: OnPlayerText
description: Callback ini akan terpanggil ketika player mengirimkan pesan chat.
tags: ["player"]
---

## Deskripsi

Callback ini akan terpanggil ketika player mengirimkan pesan chat.

| Nama     | Deskripsi                              |
| -------- | ---------------------------------------- |
| playerid | ID dari player yang mengetik teks nya. |
| text[]   | Teks yang player ketikkan.               |

## Returns

Ini akan selalu terpanggil pertama di filterscripts jadi mengembalikan nilai 1 akan melarang filterscript lain untuk melihatnya.

## Contoh

```c
public OnPlayerText(playerid, text[])
{
    new pText[144];
    format(pText, sizeof (pText), "(%d) %s", playerid, text);
    SendPlayerMessageToAll(playerid, pText);
    return 0; // Mengabaikan teks default dan mengirimkan teks kustom
}
```

## Catatan

:::tip

Callback ini akan terpanggil juga oleh NPC.

:::

## Fungsi Terkait

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer.md): Memaksa player mengirimkan text untuk satu player saja.
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll.md): Memaksa player mengirimkan pesan untuk semua player.
