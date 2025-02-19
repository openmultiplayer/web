---
title: BanEx
sidebar_label: BanEx
description: Melarang player dengan alasan.
tags: ["administration"]
---

## Deskripsi

Melarang player dengan alasan.

| Name     | Description                            |
| -------- | -------------------------------------- |
| playerid | ID player yang ingin dilarang bermain. |
| reason   | Alasan dilarang bermain.               |

## Returns

Fungsi ini tidak me-return value yang spesifik.

## Contoh

```c
public OnPlayerCommandText( playerid, cmdtext[] )
{
    if (!strcmp(cmdtext, "/banme", true))
    {
        // Melarang player yang mengeksekusi perintah ini dengan mencantumkan alasan ("Request")
        BanEx(playerid, "Request");
        return 1;
    }
}
/*Untuk memunculkan pesan (contoh: alasan) untuk player sebelum koneksi terputus
Anda harus menggunakan timer untuk membuat sebuah delay. Delay ini hanya membutuhkan beberapa milisekon saja,
akan  tetapi contoh ini menggunakan satu detik penuh hanya untuk berjaga-jaga.*/

forward BanExPublic(playerid, reason[]);

public BanExPublic(playerid, reason[])
{
    BanEx(playerid, reason);
}

stock BanExWithMessage(playerid, color, message[], reason[])
{
    //reason - Alasan larangan yang telah digunakan BanEx.
    SendClientMessage(playerid, color, message);
    SetTimerEx("BanExPublic", 1000, false, "ds", playerid, reason);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        //Larang player yang menggunakan perintah ini.
        BanExWithMessage(playerid, 0xFF0000FF, "Anda telah di Banned!", "Request");
        return 1;
    }
    return 0;
}
```

## Catatan

:::warning

Tindakan apa pun yang diambil langsung sebelum Ban() (seperti mengirim pesan dengan SendClientMessage) tidak akan sampai ke player, oleh karena itu timer harus digunakan untuk menunda pelarangan

:::

## Fungsi Terkait

- [Ban](Ban): Melarang player yang sedang berada di dalam server.
- [Kick](Kick): Kick player dari server.
