---
title: OnPlayerLeaveCheckpoint
description: Callback ini akan terpanggil ketika pemain keluar dari sebuah checkpoint. (terpanggil jika meninggalkan sebuah checkpoint dari fungsi SetPlayerCheckpoint)
tags: ["player"]
---

## Deskripsi

Callback ini akan terpanggil ketika pemain keluar dari sebuah checkpoint. (terpanggil jika meninggalkan sebuah checkpoint dari fungsi [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint.md))

| Nama     | Deskripsi                                   |
| -------- | ------------------------------------------- |
| playerid | ID dari pemain yang meninggalkan checkpoint |

## Returns

Ini selalu dipanggil pertama kali dalam filterscript

## Contoh

```c
public OnPlayerLeaveCheckpoint(playerid)
{
    printf("Pemain %i meninggalkan sebuah checkpoint!", playerid);
    return 1;
}
```

## Catatan

:::tip

Callback ini juga dapat dipanggil oleh NPC

:::

## Callback Terkait

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint.md): Callback ini terpanggil jika pemain memasuki sebuah checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint.md): Callback ini terpanggil jika pemain memasuki sebuah checkpoint balapan.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint.md): Callback ini terpanggil jika pemain meninggalkan sebuah checkpoint balapan.

## Fungsi Terkait

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint.md): Membuat sebuah checkpoint untuk pemain.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint.md): Menonaktifkan checkpoint pemain.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint.md): Memeriksa apakah pemain sedang berada di dalam checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint.md): Membuat sebuah checkpoint balapan untuk pemain.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint.md): Menonaktifkan checkpoint balapan pemain.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint.md): Memeriksa apakah pemain sedang berada di dalam checkpoint balapan.
