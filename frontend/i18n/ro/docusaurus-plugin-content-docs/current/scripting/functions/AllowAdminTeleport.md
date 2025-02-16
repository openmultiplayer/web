---
title: AllowAdminTeleport
sidebar_label: AllowAdminTeleport
description: Această funcție va determina dacă administratorii RCON vor fi teleportați la punctul lor de cale atunci când vor seta unul.
tags: []
---

:::warning

Această funcție, începând cu 0.3d, este depreciată. Vă rugăm să consultați [OnPlayerClickMap](../callbacks/OnPlayerClickMap.md).

:::

## Descriere

Această funcție va determina dacă administratorii RCON vor fi teleportați la punctul lor de cale atunci când vor seta unul.

| Nume  | Descriere                                  |
| ----- | ------------------------------------------ |
| allow | 0 pentru a dezactiva și 1 pentru a activa. |

## Se intoarce

Această funcție nu returnează valori specifice.

## Exemple

```c
public OnGameModeInit()
{
    AllowAdminTeleport(1);
    // Other stuff
    return 1;
}
```

## Funcții conexe

- [IsPlayerAdmin](IsPlayerAdmin.md): Verifică dacă un jucător este conectat la RCON.
- [AllowPlayerTeleport](AllowPlayerTeleport.md): Comutați teleportarea punctelor de parcurs pentru jucători.
