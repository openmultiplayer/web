---
title: OnPlayerSpawn
description: Callback ini akan terpanggil ketika pemain melakukan perubahan status.
tags: ["player"]
---

## Deskripsi

Callback ini akan terpanggil ketika pemain melakukan perubahan status. (misalnya saat player yang sedang mengendarai)

| Name     | Description                                     |
| -------- | ----------------------------------------        |
| playerid | ID dari pemain yang melakukan perubahan status. |
| newstate | Status baru dari player.                        |
| oldstate | Status lama dari player.                        |

Pergi ke [Player States](../resources/playerstates) untuk list semua variable player state.

## Returns

0 - Akan melarang filterscript lain untuk menerima callback ini.

1 - Mengindikasikan bahwa callback ini akan dilanjutkan ke filtercript lain.

Selalu terpanggil pertama di filterscripts.

## Contoh
```c
public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Player entered a vehicle as a driver
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); // Menambahkan NOS ke Kendaraan Anda
    }
    return 1;
}
```
## Catatan

:::tip

Callback ini juga dipanggil oleh NPC

:::

## Fungsi Terkait

- [GetPlayerState](../functions/GetPlayerState): Mendapatkan status pemain saat ini
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction): Mendapatkan animasi spesial pemain saat ini.
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction): Mengatur animasi spesial pemain.
