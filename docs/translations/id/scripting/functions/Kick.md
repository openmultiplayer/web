---
title: Kick
description: Kick player dari server. Player harus keluar dari game dan re-connect jika mereka masih ingin lanjut bermain.
tags: ["administration"]
---

## Deskripsi

Kick player dari server. Player harus keluar dari game dan re-connect jika mereka masih ingin lanjut bermain.

| Nama     | Deskripsi                     |
| -------- | ----------------------------- |
| playerid | ID player yang ingin di kick. |

## Returns

Function ini selalu me-return 1, walaupun jika function gagal di eksekusi (tidak ada player tersebut didalam server).

## Catatan

:::warning

Pada versi SA-MP 0.3x, tindakan apa pun yang diambil langsung sebelum Kick() (seperti mengirim pesan dengan SendClientMessage) tidak akan sampai ke player. Timer harus digunakan untuk menunda kick.

:::

## Contoh

```c
// Untuk memunculkan pesan (contoh: alasan) untuk player sebelum koneksi terputus
// Anda harus menggunakan timer untuk membuat sebuah delay. Delay ini hanya membutuhkan beberapa milisekon saja,
// akan  tetapi contoh ini menggunakan satu detik penuh hanya untuk berjaga-jaga.

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/kickme", true) == 0)
    {
        // Kick player yang menggunakan command ini.

        // Pertama, kirim player nya sebuah pesan.
        SendClientMessage(playerid, 0xFF0000FF, "You have been kicked!");

        // Mem-kick player nya sedetik kemudian menggunakan timer.
        SetTimerEx("DelayedKick", 1000, false, "i", playerid);
        return 1;
    }
    return 0;
}

forward DelayedKick(playerid);
public DelayedKick(playerid)
{
    Kick(playerid);
    return 1;
}
```

## Related Functions

- [Ban](Ban): Ban player yang sedang berada di dalam server.
- [BanEx](BanEx): Ban player dengan alasan.