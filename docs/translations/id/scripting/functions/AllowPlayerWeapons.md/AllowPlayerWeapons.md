---
title: AllowPlayerWeapons
description: Memperbolehkan/Melarang Senjata Untuk Player
tags:
---

<VersionWarnID version='omp v1.1.0.2612' />
:::

## Deskripsi

Memperbolehkan/Melarang Senjata Untuk Player

| Nama     | Deskripsi                              |
| -------- | -------------------------------------- |
| playerid | ID player untuk mengizinkan Senjata   |
| bool:allow| True untuk mengizinkan False untuk Tidak Mengizinkan. |

## Returns

Fungsi ini selalu mengembalikan nilai true

## Contoh

```c
public OnPlayerConnect(playerid)
{
    AllowPlayerWeapons(playerid, true);
    return 1;
}
```

## Fungsi Terkait

- [ArePlayerWeaponsAllowed](ArePlayerWeaponsAllowed): Apakah bisa player menggunakan Senjata
