---
title: IsPlayerNPC
description: Provera da li je igrac pravi igrac ili NPC.
tags: ["player", "npc"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Provera da li je igrac pravi igrac ili NPC.

| Name     | Description                 |
| -------- | --------------------------- |
| playerid | ID igraca koji se proverava |

## Returns

1: Igrac je NPC.

0: Igrac nije NPC.

## Examples

```c
public OnPlayerConnect(playerid)
{
    if (IsPlayerNPC(playerid))
    {
        SendClientMessageToAll(-1, "An NPC connected!");
        return 1;
    }

    // The other code here won't be executed unless its a player
}
```

## Related Functions

- [ConnectNPC](ConnectNPC.md): Konektuje NPC-a.
- [IsPlayerAdmin](IsPlayerAdmin.md): Proverava da li je igrac povezan na RCON.
