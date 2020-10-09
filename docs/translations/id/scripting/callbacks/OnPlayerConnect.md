---
id: OnPlayerConnect
title: OnPlayerConnect
description: Callback ini akan terpangil ketika player terhubung kedalam server.
tags: ["player"]
---

## Deskripsi

Callback ini akan terpanggil ketika player terhubung kedalam server.

| Nama     | Deskripsi                          |
| -------- | ------------------------------------ |
| playerid | ID player yang terkoneksi. |

## Returns

0 - Akan melarang filterscript lain untuk menerima callback ini.

1 - Mengindikasikan bahwa callback ini akan dilanjutkan ke filtercript lain.

Selalu terpanggil pertama di filterscripts.

## Contoh

```c
public OnPlayerConnect(playerid)
{
    new string[64], pName[MAX_PLAYER_NAME];
    GetPlayerName(playerid, pName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s telah terkoneksi kedalam server, selamat datang!", pName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## Catatan

:::tip

Callback ini juga akan terpanggil oleh NPC.

:::

## Fungsi Terkait
