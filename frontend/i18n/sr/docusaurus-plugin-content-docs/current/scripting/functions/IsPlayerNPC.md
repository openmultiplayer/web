---
title: IsPlayerNPC
sidebar_label: IsPlayerNPC
description: Provera da li je igrac pravi igrac ili NPC.
tags: ["player", "npc"]
---

## Опис

Provera da li je igrac pravi igrac ili NPC.

| Name     | Description                 |
| -------- | --------------------------- |
| playerid | ID igraca koji se proverava |

## Враћа

**true**: Играч је NPC.

**false**: Играч није NPC.

## Примери

```c
public OnPlayerConnect(playerid)
{
    if (IsPlayerNPC(playerid))
    {
        SendClientMessageToAll(-1, "An NPC connected!");
        return 1;
    }

    // Даљи код неће бити извршен уколико 'playerid' није играч
}
```

## Повезане функције

- [ConnectNPC](ConnectNPC): Повезује NPC-a.
- [IsPlayerAdmin](IsPlayerAdmin): Проверава да ли је играч повезан на RCON.
