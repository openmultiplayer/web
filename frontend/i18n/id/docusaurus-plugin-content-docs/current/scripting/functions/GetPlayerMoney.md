---
title: GetPlayerMoney
description: Mengambil jumlah uang yang dimiliki oleh pemain
tags: ["player"]
---

## Deskripsi

Mengambil jumlah uang yang dimiliki oleh pemain.

| Nama     | Deskripsi                               |
| -------- | ----------------------------------------- |
| playerid | ID dari pemain yang ingin dilihat uangnya |

## Returns

Jumlah uang yang dimiliki oleh pemain.

## Contoh

```c
public OnPlayerSpawn(playerid)
{
   new string[32];
   format(string, sizeof(string), "Uang anda senilai: $%i.", GetPlayerMoney(playerid));
   SendClientMessage(playerid, 0xFFFFFFAA, string);
}
```

## Fungsi Terkait

- [GivePlayerMoney](GivePlayerMoney): Memberikan uang ke pemain.
- [ResetPlayerMoney](ResetPlayerMoney): Mengatur uang pemain menjadi \$0.
