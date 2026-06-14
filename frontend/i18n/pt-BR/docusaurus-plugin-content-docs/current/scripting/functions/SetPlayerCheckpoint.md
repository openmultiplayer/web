---
title: SetPlayerCheckpoint
sidebar_label: SetPlayerCheckpoint
description: "Define um ponto de verificação (cilindro vermelho) para um jogador."
tags: ["player", "checkpoint"]
---


## Descrição

Define um ponto de verificação (cilindro vermelho) para um jogador. Também mostra uma mancha vermelha no radar. Quando os jogadores entram em um checkpoint, OnPlayerEnterCheckpoint é chamado e ações podem ser executadas.

| Nome | Descrição |
| ------------- | -------------------------------------------------- |
| playerid | O ID do jogador para quem definir um ponto de verificação. |
| Float:centreX | A coordenada X para definir o ponto de verificação.         |
| Float:centreY | A coordenada Y para definir o ponto de verificação.         |
| Float:centreZ | A coordenada Z para definir o ponto de verificação.         |
| Float:radius | O tamanho do ponto de verificação.                        |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador especificado não existe.

## Exemplos

```c
// Neste exemplo, o checkpoint do jogador será definido quando ele aparecer.
// Ao entrar no posto de controle eles receberão $1000 e o posto de controle será desabilitado.

new bool:gOnCheck[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    gOnCheck[playerid] = true;
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    if (gOnCheck[playerid]) // se é verdade
    {
        GivePlayerMoney(playerid, 1000);
        DisablePlayerCheckpoint(playerid);
        gOnCheck[playerid] = false;
    }
    return 1;
}
```
## Notas

:::warning

Os pontos de verificação são assíncronos, o que significa que apenas um pode ser mostrado por vez. Para 'transmitir' checkpoints (mostrá-los apenas quando os jogadores estiverem próximos o suficiente), use um streamer de checkpoint.

:::

## Funções Relacionadas

- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Desativa o checkpoint atual do jogador.
- [GetPlayerCheckpoint](GetPlayerCheckpoint): Obtenha a localização do ponto de verificação atual.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Verifica se um jogador está em um checkpoint.
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): Verifique se o jogador tem um checkpoint visível no momento.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Crie um posto de controle de corrida para um jogador.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Desativa o checkpoint de corrida atual do jogador.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Verifica se um jogador está em um posto de controle de corrida.

## Callbacks Relacionadas

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Chamado quando um jogador entra em um checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Chamado quando um jogador sai de um posto de controle.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Chamado quando um jogador entra em um checkpoint de corrida.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Chamado quando um jogador sai de um posto de controle de corrida.
