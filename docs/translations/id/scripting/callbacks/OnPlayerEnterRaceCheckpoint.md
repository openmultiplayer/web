---
title: OnPlayerEnterRaceCheckpoint
description: Callback ini akan terpanggil ketika pemain masuk ke sebuah checkpoint balapan. (terpanggil jika memasuki sebuah checkpoint dari fungsi SetPlayerRaceCheckpoint)
tags: ["player"]
---

## Deskripsi

Callback ini akan terpanggil ketika pemain masuk ke sebuah checkpoint balapan. (terpanggil jika memasuki sebuah checkpoint dari fungsi [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint.md))

| Nama     | Deskripsi                                       |
| -------- | ----------------------------------------------- |
| playerid | ID dari pemain yang memasuki checkpoint balapan |

## Returns

Ini selalu dipanggil pertama kali dalam filterscript

## Contoh

```c
public OnPlayerEnterRaceCheckpoint(playerid)
{
    printf("Pemain %d memasuki sebuah checkpoint balapan!", playerid);
    return 1;
}
```

## Catatan

:::tip

Callback ini juga dapat dipanggil oleh NPC

:::

## Callback Terkait

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint.md): Callback ini terpanggil jika pemain memasuki sebuah checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint.md): Callback ini terpanggil jika pemain meninggalkan sebuah checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint.md): Callback ini terpanggil jika pemain meninggalkan sebuah checkpoint balapan.

## Fungsi Terkait

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint.md): Membuat sebuah checkpoint untuk pemain.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint.md): Menonaktifkan checkpoint pemain.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint.md): Memeriksa apakah pemain sedang berada di dalam checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint.md): Membuat sebuah checkpoint balapan untuk pemain.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint.md): Menonaktifkan checkpoint balapan pemain.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint.md): Memeriksa apakah pemain sedang berada di dalam checkpoint balapan.
