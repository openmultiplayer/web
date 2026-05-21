---
title: SetPlayerRaceCheckpoint
sidebar_label: SetPlayerRaceCheckpoint
description: "Cria um ponto de verificação de corrida."
tags: ["player", "checkpoint", "racecheckpoint"]
---


## Descrição

Cria um ponto de verificação de corrida. Quando o jogador entra, o callback OnPlayerEnterRaceCheckpoint é chamado.

| Nome | Descrição |
| ------------- | -------------------------------------------------------------- |
| playerid | O ID do jogador para o qual definir o ponto de verificação |
| CP_TYPE:type | [Tipo de posto de controle de corrida](../resources/race-checkpoint-types) |
| Float:centreX | Coordenada X |
| Float:centreY | Coordenada Y |
| Float:centreZ | Coordenada Z |
| Float:nextX | Coordenada X do próximo ponto, para a direção da seta |
| Float:nextY | Coordenada Y do próximo ponto, para a direção da seta |
| Float:nextZ | Coordenada Z do próximo ponto, para a direção da seta |
| Float:radius | Dimensão (diâmetro) do posto de controlo |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador especificado não existe.

## Exemplos

```c
SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_NORMAL, 644.3091, 1767.0223, 4.9970, 650.6734, 1812.0367, 4.9970, 3.0);
```
Outro exemplo:

```c
//do script de filtro de corrida de Yagu, (c) por Yagu
public SetRaceCheckpoint(playerid, Airrace, target, next)
{
    if (next == -1 && Airrace == 0)
    {
        SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_FINISH, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], 0.0, 0.0, 0.0, CPsize);
    }
    else if (next == -1 && Airrace == 1)
    {
        SetPlayerRaceCheckpoint(playerid, CP_TYPE_AIR_FINISH, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], 0.0, 0.0, 0.0, CPsize);
    }
    else if (Airrace == 1)
    {
        SetPlayerRaceCheckpoint(playerid, CP_TYPE_AIR_NORMAL, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], RaceCheckpoints[next][0], RaceCheckpoints[next][1], RaceCheckpoints[next][2], CPsize);
    }
    else
    {
        SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_NORMAL, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], RaceCheckpoints[next][0], RaceCheckpoints[next][1], RaceCheckpoints[next][2], CPsize);
    }
}
```
## Notas

:::warning

Os checkpoints de corrida são assíncronos, o que significa que apenas um pode ser mostrado por vez. Para 'transmitir' pontos de verificação de corrida (mostrá-los apenas quando os jogadores estiverem próximos o suficiente), use um streamer de ponto de verificação de corrida.

:::

## Funções Relacionadas

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Crie um ponto de verificação para um jogador.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Desativa o checkpoint atual do jogador.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Verifica se um jogador está em um checkpoint.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Desativa o checkpoint de corrida atual do jogador.
- [GetPlayerRaceCheckpoint](GetPlayerRaceCheckpoint): Obtenha a localização do ponto de verificação da corrida atual.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Verifica se um jogador está em um posto de controle de corrida.
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): Verifique se o jogador tem atualmente um ponto de verificação de corrida visível.

## Callbacks Relacionadas

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Chamado quando um jogador entra em um checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Chamado quando um jogador sai de um posto de controle.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Chamado quando um jogador entra em um checkpoint de corrida.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Chamado quando um jogador sai de um posto de controle de corrida.

## Recursos relacionados

- [Tipos de pontos de verificação de corrida](../resources/race-checkpoint-types).
