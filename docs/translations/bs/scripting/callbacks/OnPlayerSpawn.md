---
title: OnPlayerSpawn
description: Ovaj callback je pozvan kada se igrač spawnuje (stvori).
tags: ["player"]
---

## Deskripcija

Ovaj callback je pozvan kada se igrač spawnuje (stvori). (npr. nakon korištenja SpawnPlayer funkcije)

| Ime      | Deskripcija                          |
| -------- | ------------------------------------ |
| playerid | ID igrača koji je spawnovao/stvorio. |

## Returns

1 - Spriječiti će da druge filterskripte primaju ovaj callback.

0 - Govori da će ovaj callback biti proslijeđen do naredne filterskripte.

Uvijek je pozvan prvo u filterskripti.

## Primjeri

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME],
    string[40];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));
    format(string, sizeof(string), "%s has spawned successfully.", PlayerName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Zabilješke

:::tip

Igrica ponekad odbija igraču \$100 nakon spawnovanja.

:::

## Srodne Funkcije

- [SpawnPlayer](../functions/SpawnPlayer): Forsira igrača da se spawnuje/stvori.
- [AddPlayerClass](../functions/AddPlayerClass): Dodaj klasu.
- [SetSpawnInfo](../functions/SetSpawnInfo): Postavi opcije spawnovanja za igrača.
