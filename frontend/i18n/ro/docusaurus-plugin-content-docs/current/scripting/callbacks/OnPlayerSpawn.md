---
title: OnPlayerSpawn
description: Acest callback este apelat atunci când apare un jucător.
tags: ["player"]
---

## Descriere

Acest callback este apelat atunci când apare un jucător.

| Name     | Descriere                          |
| -------- | ---------------------------------- |
| playerid | ID-ul jucătorului care a apărut.   |

## Returnări

0 - Va împiedica alte filterscript-uri să primească acest callback.

1 - Indică faptul că acest apel invers va fi transmis următorului filterscript.

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME],
    string[40];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));
    format(string, sizeof(string), "%s a apărut cu succes.", PlayerName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Note

:::tip

Jocul scade uneori \$100 de la jucători după apariție.

:::

## Funcții similare

- [SpawnPlayer](../functions/SpawnPlayer): Forțați un jucător să apară.
- [AddPlayerClass](../functions/AddPlayerClass): Adăugați o clasă.
- [SetSpawnInfo](../functions/SetSpawnInfo): Setați setarea de apariție pentru un jucător.