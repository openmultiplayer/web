---
title: Ban
description: Ban player yang sedang berada di dalam server.
tags: ["administration"]
---

## Deskripsi

Ban player yang sedang berada di dalam server. Player tersebut tidak bisa join lagi selamanya. Ban Player berbasis IP, dan akan disimpan di dalam format file samp.ban di dalam direktori root server. BanEx dapat digunakan untuk memberi alasan mengapa player tersebut di ban. IP ban dapat di tambah/di hapus menggunakan command RCON banip dan unbanip (SendRconCommand).

| Nama     | Deskripsi                  |
| -------- | ---------------------------- |
| playerid | ID player yang mau di ban. |

## Returns

Function ini tidak mengembalikan value yang spesifik.

## Contoh

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // Ban player yang menggunakan command ini.
        Ban(playerid);
        return 1;
    }
}
// Untuk memunculkan pesan (contoh: alasan) untuk player sebelum koneksi terputus
// Anda harus menggunakan timer untuk membuat sebuah delay. Delay ini hanya membutuhkan beberapa milisekon saja,
// akan  tetapi contoh ini menggunakan satu detik penuh hanya untuk berjaga-jaga.

forward DelayedBan(playerid);
public DelayedBan(playerid)
{
    Ban(playerid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // Ban player yang menggunakan command ini.

        // Pertama, kirim player nya sebuah pesan.
        SendClientMessage(playerid, 0xFF0000FF, "Anda telah di banned!");

        // Mem-ban player nya sedetik kemudian menggunakan timer.
        SetTimerEx("DelayedBan", 1000, false, "d", playerid);
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

Pada versi SA-MP 0.3x, tindakan apa pun yang diambil langsung sebelum Ban() (seperti mengirim pesan dengan SendClientMessage) tidak akan sampai ke player. Timer harus digunakan untuk menunda ban.
:::

## Related Functions

- [BanEx](BanEx): Ban player dengan alasan.
- [Kick](Kick): Kick player dari server.