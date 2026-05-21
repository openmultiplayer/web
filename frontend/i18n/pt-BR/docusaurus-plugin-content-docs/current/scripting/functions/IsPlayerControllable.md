---
title: IsPlayerControllable
sidebar_label: IsPlayerControllable
description: "Verifique se o jogador é controlável."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifique se o jogador é controlável.

| Nome | Descrição |
| -------- | --------------------- |
| playerid | O ID do jogador. |

## Retornos

**true** - Controlável

**false** - Incontrolável

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    // Descongele o jogador se ele estiver congelado
    if (IsPlayerControllable(playerid) == false)
    {
        TogglePlayerControllable(playerid, true);
    }

    return 1;
}
```
## Funções Relacionadas

- [TogglePlayerControllable](TogglePlayerControllable): Alterna se um jogador pode controlar seu personagem ou não. O jogador também não poderá mover sua câmera.
