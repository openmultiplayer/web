---
title: OnPlayerDisconnect
description: Callback ini akan terpanggil ketika pemain keluar dari server.
tags: ["player"]
---

## Deskripsi

Callback ini akan terpanggil ketika pemain terputus dari server.

| Nama     | Deskripsi                                              |
| -------- | ------------------------------------------------------ |
| playerid | ID dari pemain yang terputus.                          |
| reason   | ID dari alasan pemutusan koneksi. Lihat tabel dibawah. |

## Returns

0 - Akan melarang filterscript lain untuk menerima callback ini.

1 - Mengindikasikan bahwa callback ini akan dilanjutkan ke filtercript lain.

Selalu terpanggil pertama di filterscripts.

## Contoh

```c
public OnPlayerDisconnect(playerid, reason)
{
    new
        szString[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    new szDisconnectReason[3][] =
    {
        "Timeout/Crash",
        "Quit",
        "Kick/Ban"
    };

    format(szString, sizeof szString, "%s keluar dari server (%s).", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

## Catatan

:::tip

Beberapa fungsi mungkin tidak dapat bekerja dengan benar ketika digunakan di dalam callback ini karena pemain sudah terputus ketika callback ini terpanggil. Ini artinya anda tidak bisa mendapatkan informasi yang tidak ambigu dari fungsi seperti GetPlayerIp dan GetPlayerPos.

:::

## Fungsi Terkait
