---
title: SetPlayerCheckpoint
description: Postavlja checkpoint (crveni krug) za igraca.
tags: ["player", "checkpoint"]
---

## Description

Postavlja checkpoint (crveni krug) za igraca. Takodje pokazuje crvenu kocku na mapi. Kada igrac udje u checkpoint, OnPlayerEnterCheckpoint se poziva i izvrsava se ono sto je u njemu.

| Name       | Description                            |
| ---------- | -------------------------------------- |
| playerid   | ID igraca kome se postavlja checkpoint |
| Float:x    | X koordinata checkpointa.              |
| Float:y    | Y koordinata checkpointa.              |
| Float:z    | Z koordinata checkpointa.              |
| Float:size | Velicina checkpointa                   |

## Returns

1: Funkcija je uspesno izvrsena.

0: Funkcija nije uspesno izvrsena. To znaci da navedeni igrac ne postoji.

## Examples

```c
// U ovom primeru se checkpoint postavlja kada se igrac spawna
// Kada udju u checkpoint dobijaju 1000$ i checkpoint se gasi

new bool: gOnCheck[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    gOnCheck[playerid] = true;
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    if (gOnCheck[playerid]) // Ako je uslov ispunjen
    {
        GivePlayerMoney(playerid, 1000);
        DisablePlayerCheckpoint(playerid);
        gOnCheck[playerid] = false;
    }
    return 1;
}
```

## Notes

:::warning

Checkpointi su asinhroni, sto znaci da samo jedan moze da se prikaze u isto vreme. Da bi se checkpoint 'streamovao' (samo se prikaze kada je igrac dovoljno blizu), koristiti checkpoint streamer.

:::

## Related Functions

- [DisablePlayerCheckpoint](DisablePlayerCheckpoint.md): Gasi trenutno aktivni checkpoint igracu.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint.md): Proverava da li je igrac u checkpointu.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint.md): Kreiraj Race Checkpoint za igraca.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint.md): Gasi trenutno aktivni race checkpoint igracu.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint.md): Proverava da li je igrac u race chekcpointu.
- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint.md): Poziva se kada igrac udje u checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint.md): Poziva se kada igrac izadje iz checkpointa.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint.md): Poziva se kada igrac udje u race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint.md): Poziva se kada igrac izadje iz race checkpointa.
