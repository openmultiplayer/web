---
title: ArePlayerWeaponsAllowed
sidebar_label: ArePlayerWeaponsAllowed
description: O jogador pode usar armas?
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

O jogador pode usar armas?

| Nome     | Descrição                        |
| -------- | -------------------------------- |
| playerid | O ID do jogador para verificar.  |

## Retorno

**true** - Jogador está permitido.
**false** - Jogador não está permitido.

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    if (ArePlayerWeaponsAllowed(playerid))
    {
        // fazer algo
    }
    return 1;
}
```

## Funções Relacionadas

- [AllowPlayerWeapons](AllowPlayerWeapons): Ativar/Desativar armas para um jogador.
