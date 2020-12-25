---
title: OnPlayerStreamIn
description: Callback ini akan terpanggil ketika pemain di sekitar pemain lain.
tags: ["player"]
---

<VersionWarnID name='Callback' version='SA-MP 0.3a' />

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

<TipNPCCallbacks />

## Fungsi Terkait
// Tidak Ada
