---
title: GetPlayerAmmo
description: Dobiva količinu municije u trenutnom igračevom oružju.
tags: ["player"]
---

## Deskripcija

Dobiva količinu municije u trenutnom igračevom oružju.

| Ime      | Deskripcija                            |
| -------- | -------------------------------------- |
| playerid | ID igrača za dobiti količinu municije. |

## Returns

Količina municije u trenutnom igračevom oružju.

## Primjeri

```c
ShowPlayerAmmo(playerid)
{
    new
        plyAmmo = GetPlayerAmmo(playerid),
        infoString[16];

    format(infoString, sizeof(infoString), "Ammo: %i", plyAmmo);
    SendClientMessage(playerid, -1, infoString);
}
```

## Zabilješke

:::warning

Streljivo može sadržavati 16-bitne vrijednosti, pa će vrijednosti preko 32767 vratiti pogrešne vrijednosti.

:::

## Srodne Funkcije

- [SetPlayerAmmo](SetPlayerAmmo): Postavite municiju oružja određenog igrača.
- [GetPlayerWeaponData](GetPlayerWeaponData): Saznajte informacije o oružju koje igrač ima.
