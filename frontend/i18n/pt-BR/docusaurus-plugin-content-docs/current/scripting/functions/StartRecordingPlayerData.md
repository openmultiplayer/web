---
title: StartRecordingPlayerData
sidebar_label: StartRecordingPlayerData
description: "Começa a gravar os movimentos de um jogador em um arquivo, que pode então ser reproduzido por um NPC."
tags: ["player"]
---


## Descrição

Começa a gravar os movimentos de um jogador em um arquivo, que pode então ser reproduzido por um NPC.

| Nome | Descrição |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador a ser gravado.                                                                                                                                                                                               |
| PLAYER_RECORDING_TYPE:recordType | O [tipo](../resources/recordtypes) de gravação.                                                                                                                                                                            |
| const recordFile[] | O nome do arquivo que conterá os dados gravados. Ele será salvo no diretório scriptfiles, com uma extensão .rec adicionada automaticamente, você precisará mover o arquivo para npcmodes/recordings para usar na reprodução. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
if (!strcmp("/recordme", cmdtext))
{
    if (GetPlayerState(playerid) == PLAYER_STATE_ONFOOT)
    {
        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_ONFOOT, "MyFile");
    }
    else if (GetPlayerState(playerid) == PLAYER_STATE_DRIVER)
    {
        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_DRIVER, "MyFile");
    }
    SendClientMessage(playerid, 0xFFFFFFFF, "All your movements are now being recorded!");
    return 1;
}
```
## Funções Relacionadas

- [StopRecordingPlayerData](StopRecordingPlayerData): Interrompe a gravação dos dados do jogador.

## Recursos relacionados

- [Tipos de registro](../resources/recordtypes)
