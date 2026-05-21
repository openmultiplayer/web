---
title: IsPlayerRaceCheckpointActive
sidebar_label: IsPlayerRaceCheckpointActive
description: "Verifique se o jogador tem atualmente um ponto de verificação de corrida visível."
tags: ["player", "checkpoint", "racecheckpoint"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifique se o jogador tem atualmente um ponto de verificação de corrida visível.

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador a ser verificado. |

## Valores de retorno

Retorna **false** se não houver nenhum ponto de verificação de corrida mostrado atualmente, caso contrário, retorna **true**

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerRaceCheckpointActive(playerid))
    {
        // Faça alguma coisa
    }
}
```
## Funções Relacionadas

- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Crie um posto de controle de corrida para um jogador.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Verifica se um jogador está em um checkpoint de corrida.
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): Verifique se o jogador tem um checkpoint visível no momento.
