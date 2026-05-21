---
title: StopRecordingPlayerData
sidebar_label: StopRecordingPlayerData
description: "Pára todas as gravações iniciadas com StartRecordingPlayerData para um jogador específico."
tags: ["player"]
---


## Descrição

Pára todas as gravações iniciadas com StartRecordingPlayerData para um jogador específico.

| Nome | Descrição |
| -------- | ---------------------------------------------- |
| playerid | O jogador cujas gravações você deseja interromper. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/stoprecording", cmdtext))
    {
        StopRecordingPlayerData(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "Your recorded file has been saved to the scriptfiles folder!");
        return 1;
    }
}
```
## Funções Relacionadas

- [StartRecordingPlayerData](StartRecordingPlayerData): Inicia a gravação dos dados do jogador.
