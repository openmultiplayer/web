---
title: BanEx
description: Ban player dengan alasan.
tags: ["administration"]
---

## Description

Ban player dengan alasan.

| Name     | Description                  |
| -------- | ---------------------------- |
| playerid | ID player yang mau di ban. |
| reason   | Alasan ban.      |

## Returns

Function ini tidak me-return value yang spesifik.

## Examples

```c
public OnPlayerCommandText( playerid, cmdtext[] )
{
    if (!strcmp(cmdtext, "/banme", true))
    {
        // Bans the player who executed this command and includes a reason ("Request")
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
    //reason - Alasan ban yang telah digunakan BanEx.
    SendClientMessage(playerid, color, message);
    SetTimerEx("BanExPublic", 1000, false, "ds", playerid, reason);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        //Ban player yang menggunakan command ini.
        BanExWithMessage(playerid, 0xFF0000FF, "Anda telah di Banned!", "Request");
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

- [Ban](Ban): Ban player yang sedang berada di dalam server.
- [Kick](Kick): Kick player dari server.
