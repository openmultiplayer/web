---
title: OnPlayerStreamOut
description: Callback ini akan terpanggil ketika pemain menjauh dari pemain lain.
tags: ["player"]
---

<VersionWarnID name='Callback' version='SA-MP 0.3a' />

## Deskripsi

Callback ini akan terpanggil ketika pemain menjauhi pemain lain

| Nama        | Deskripsi                                                 |
| ----------- | ------------------------------------------------------ |
| playerid    | ID pemain yang menjauh dari pemain. |
| forplayerid | ID pemain. | // Kalau salah tolong koreksi

## Returns

Ini akan selalu terpanggil pertama di filterscripts

## Contoh
```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "Pemain ID %d telah menjauhimu.", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## Catatan

<TipNPCCallbacks />

## Fungsi Terkait
// Tidak Ada
