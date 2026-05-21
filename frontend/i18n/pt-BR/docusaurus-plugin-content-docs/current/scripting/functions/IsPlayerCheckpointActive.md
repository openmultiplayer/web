---
title: IsPlayerCheckpointActive
sidebar_label: IsPlayerCheckpointActive
description: "Verifique se o jogador tem um ponto de controle visível no momento."
tags: ["player", "checkpoint"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifique se o jogador tem um ponto de controle visível no momento.

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador a ser verificado. |

## Valores de retorno

Retorna **false** se não houver nenhum ponto de verificação mostrado atualmente, caso contrário, retorna **true**

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerCheckpointActive(playerid))
    {
        // Faça alguma coisa
    }
}
```
## Funções Relacionadas

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Crie um ponto de verificação para um jogador.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Verifica se um jogador está em um checkpoint.
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): Verifique se o jogador tem atualmente um ponto de verificação de corrida visível.
