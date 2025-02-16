---
title: OnPlayerSpawn
sidebar_label: OnPlayerSpawn
description: Callback ini akan terpanggil ketika pemain spawn.
tags: ["player"]
---

## Deskripsi

Callback ini akan terpanggil ketika pemain spawn. (misalnya saat sudah memanggil fungsi SpawnPlayer)

| Nama     | Deskripsi                     |
| -------- | ----------------------------- |
| playerid | ID dari pemain yang di spawn. |

## Returns

0 - Akan melarang filterscript lain untuk menerima callback ini.

1 - Mengindikasikan bahwa callback ini akan dilanjutkan ke filtercript lain.

Selalu terpanggil pertama di filterscripts.

## Contoh

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME],
    string[40];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));
    format(string, sizeof(string), "%s telah sukses terspawn.", PlayerName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Catatan

:::tip

Terkadang game akan mengurangi \$100 dari pemain setelah spawn.

:::

## Fungsi Terkait

- [SpawnPlayer](../functions/SpawnPlayer.md): Memaksa pemain untuk spawn.
- [AddPlayerClass](../functions/AddPlayerClass.md): Menambahkan kelas.
- [SetSpawnInfo](../functions/SetSpawnInfo.md): Menambahkan pengaturan spawn untuk pemain.
