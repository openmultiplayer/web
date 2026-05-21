---
title: StopAudioStreamForPlayer
sidebar_label: StopAudioStreamForPlayer
description: "Interrompe o fluxo de áudio atual de um jogador."
tags: ["player"]
---


## Descrição

Interrompe o fluxo de áudio atual de um jogador.

| Nome | Descrição |
| -------- | ------------------------------------------------- |
| playerid | O jogador cujo fluxo de áudio você deseja interromper. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    // Se o jogador sair de um veículo
    if (oldstate == PLAYER_STATE_DRIVER || oldstate == PLAYER_STATE_PASSENGER)
    {
        StopAudioStreamForPlayer(playerid); // Pare o fluxo de áudio
    }
    return 1;
}
```
## Funções Relacionadas

- [PlayAudioStreamForPlayer](PlayAudioStreamForPlayer): Reproduz um fluxo de áudio para um jogador.
- [PlayerPlaySound](PlayerPlaySound): Reproduz um som para um jogador.
