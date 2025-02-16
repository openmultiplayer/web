---
title: OnPlayerDeath
description: Callback ini akan terpanggil ketika pemain mati, entah itu dengan bunuh diri atau terbunuh oleh pemain lain.
tags: ["player"]
---

## Deskripsi

Callback ini akan terpanggil ketika pemain mati, entah itu dengan bunuh diri atau terbunuh oleh pemain lain.

| Nama          | Deskripsi                                                                             |
|---------------|---------------------------------------------------------------------------------------|
| playerid      | ID dari pemain yang mati.                                                             |
| killerid      | ID dari pemain yang membunuh pemain yang mati, atau INVALID_PLAYER_ID jika tidak ada. |
| WEAPON:reason | ID dari alasan untuk kematian pemain.                                                 |

## Returns

0 - Akan melarang filterscript lain untuk menerima callback ini.

1 - Mengindikasikan bahwa callback ini akan dilanjutkan ke filtercript lain.

Selalu terpanggil pertama di filterscripts.

## Contoh

```c
new PlayerDeaths[MAX_PLAYERS];
new PlayerKills[MAX_PLAYERS];

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendDeathMessage(killerid, playerid, reason); // Menunjukkan metode bunuh di killfeed

    // Cek apakah killerid valid sebelum melakukan apapun dengan itu
    if(killerid != INVALID_PLAYER_ID)
    {
        PlayerKills[killerid] ++;
    }

    // Diluar dari cek, handle sesuatu untuk playerid (ini akan selalu valid)
    PlayerDeaths[playerid] ++;
    return 1;
}
```

## Catatan

:::tip

Alasan akan mengembalikan nilai 37 (flame thrower) dari jenis api apapun (seperti molotov, 18) Alasan akan mengembalikan nilai 51 dari senjata apapun yang membuat ledakan (seperti RPG, grenade) Anda tidak perlu mengecek apakah killerid valid sebelum menggunakannya di SendDeathMessage. INVALID_PLAYER_ID adalah parameter killer ID yang valid didalam fungsi itu. playerid hanyalah satu-satunya yang dapat memanggil callback. (baik untuk anti fake death)

:::

:::warning

Anda HARUS cek apakah 'killerid' valid (bukan INVALID_PLAYER_ID) sebelum menggunakannya didalam array (atau dimana saja), yang bisa menyebabkan skrip OnPlayerDeath menjadi crash (tidak semua skrip). Ini karena INVALID_PLAYER_ID bernilai 65535, dan ketika sebuah array hanya mempunyai elemen 'MAX_PLAYERS', misalkan 500, Anda akan mencoba mengakses index diatas 499, yang dimana itu luar batas.

:::

## Fungsi Terkait

- [SendDeathMessage](../functions/SendDeathMessage): Menambahkan kematian didalam death list.
- [SetPlayerHealth](../functions/SetPlayerHealth): Mengatur darah pemain.
