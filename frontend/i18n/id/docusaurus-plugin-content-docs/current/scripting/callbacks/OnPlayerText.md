---
title: OnPlayerText
description: Callback ini akan terpanggil ketika pemain mengirimkan pesan chat.
tags: ["player"]
---

## Deskripsi

Callback ini akan terpanggil ketika pemain mengirimkan pesan chat.

| Nama     | Deskripsi                              |
| -------- | -------------------------------------- |
| playerid | ID dari pemain yang mengetik teks nya. |
| text[]   | Teks yang pemain ketikkan.             |

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

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer.md): Memaksa pemain mengirimkan text untuk satu pemain saja.
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll.md): Memaksa pemain mengirimkan pesan untuk semua pemain.
