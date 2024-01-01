---
title: OnPlayerClickPlayer
description: Terpanggil ketika pemain mengklik dua kali pemain yang berada di scoreboard.
tags: ["player"]
---

:::warning

Fungsi ini telah ditambahkan dalam SA-MP 0.3a dan tidak bekerja pada versi dibawahnya!

:::

## Deskripsi

Terpanggil ketika pemain mengklik dua kali pemain yang berada di scoreboard.

| Name            | Description                                                    |
| --------------- | -------------------------------------------------------------- |
| playerid        | ID dari pemain yang mengklik pemain yang berada di scoreboard. |
| clickedplayerid | ID dari pemain yang di klik oleh playerid.                     |
| source          | Sumber yang player klik.                                       |

## Returns

0 - Akan melarang filterscript lain untuk menerima callback ini.

1 - Mengindikasikan bahwa callback ini akan dilanjutkan ke filtercript lain.

Selalu terpanggil pertama di filterscripts.

## Contoh

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, source)
{
    new message[32];
    format(message, sizeof(message), "Anda mengklik pada pemain ID: %d", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, message);
    return 1;
}
```

## Catatan

:::tip

Saat ini hanya ada satu 'source' (0 - CLICK_SOURCE_SCOREBOARD). Keberadaan argumen ini menunjukkan akan adanya sumber lain yang akan didukung di masa depan nanti.

:::

## Fungsi Terkait

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Terpanggil ketika player mengklik pada textdraw.
