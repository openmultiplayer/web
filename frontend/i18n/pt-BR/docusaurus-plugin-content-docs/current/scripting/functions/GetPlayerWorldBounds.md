---
title: GetPlayerWorldBounds
sidebar_label: GetPlayerWorldBounds
description: "Obtenha os limites mundiais de um jogador."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha os limites mundiais de um jogador.

| Nome | Descrição |
| ----------- | ---------------------------------------------------------------------------- |
| playerid | O ID do jogador.                                                        |
| &Float:maxX | Uma variável float na qual armazenar a coordenada maxX, passada por referência. |
| &Float:minX | Uma variável flutuante na qual armazenar a coordenada minX, passada por referência. |
| &Float:maxY | Uma variável flutuante na qual armazenar a coordenada maxY, passada por referência. |
| &Float:minY | Uma variável flutuante na qual armazenar a coordenada minY, passada por referência. |

## Retornos

Esta função não retorna um valor específico.

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerWorldBounds(playerid, -1212.0, -1420.0, 2628.5, 2430.5);

    new
        Float:maxX,
        Float:minX,
        Float:maxY,
        Float:minY;

    GetPlayerWorldBounds(playerid, maxX, minX, maxY, minY);
    // máxX = -1212,0
    // minX = -1420,0
    // máxY = 2628,5
    // minY = 2.430,5
    return 1;
}
```
## Funções Relacionadas

- [SetPlayerWorldBounds](SetPlayerWorldBounds): Defina os limites mundiais para um jogador. Os jogadores não podem sair dos limites (serão empurrados de volta).
- [ClearPlayerWorldBounds](ClearPlayerWorldBounds): Redefine os limites mundiais do jogador para os limites mundiais padrão.
