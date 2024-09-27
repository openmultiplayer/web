---
title: ClearBanList
description: Membersihkan list ban
tags: ["administration"]
---
:::warning

Fungsi ini ditambahkan dalam omp v1.1.0.2612 dan tidak akan berfungsi pada versi sebelumnya!

:::

## Deskripsi

Membersihkan list ban

## Retunrns

**true** - Berhasil
**false** - Fungsi gagal dijalankan

## Contoh

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/clearbanlist", true))
    {
        if (!IsPlayerAdmin(playerid))
        {
            return 1;
        }

        ClearBanList();
        SendClientMessage(playerid, -1, "[SERVER]: Semua list ban telah dibersihkan.");
        return 1;
    }
    return 0;
}
```

## Catatan

:::tip

Kamu juga dapat melihat list ban di file bans.json

:::


## Fungsi terkait

[BlockIpAddress](BlockIpAddress): Memblokir alamat ip player agar tidak bisa tersambung kedalam server dalam jangka waktu yang ditentukan
[UnBlockIpAddress](UnBlockIpAddress): Membuka blokir alamat ip player
[Ban](Ban): Melarang player untuk bermain di server
[BanEx](BanEx): Melarang player untuk bermain di server dengan alasan khusus
[Kick](Kick): Menendang player dari server
[IsBanned](IsBanned): Memeriksa apakah ip dari player itu diberikan larangan
