---
title: GetPlayerMoney
description: Mengambil jumlah uang yang dimiliki oleh pemain
tags: ["player"]
---

## Description

Retrieves the amount of money a player has.

| Name     | Description                               |
| -------- | ----------------------------------------- |
| playerid | ID dari pemain yang akan diambil uang nya |

## Returns

Jumlah uang yang dimiliki oleh pemain.

## Examples

```c
public OnPlayerSpawn(playerid)
{
   new string[32];
   format(string, sizeof(string), "Uang anda: $%i.", GetPlayerMoney(playerid));
   SendClientMessage(playerid, 0xFFFFFFAA, string);
}
```

## Related Functions

- [GivePlayerMoney](GivePlayerMoney): Memberikan uang ke pemain.
- [ResetPlayerMoney](ResetPlayerMoney): Mengatur uang pemain menjadi \$0.
