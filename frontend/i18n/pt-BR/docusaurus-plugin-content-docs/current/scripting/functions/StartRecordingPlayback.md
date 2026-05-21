---
title: StartRecordingPlayback
sidebar_label: StartRecordingPlayback
description: "Isso executará um arquivo .rec que deve ser salvo na pasta npcmodes/recordings. Esses arquivos permitem que o NPC siga determinadas ações. Suas ações podem ser registradas manualmente. Para mais informações, verifique as funções relacionadas."
tags: []
---


:::warning

Esta função está obsoleta. Consulte [NPC_StartPlayback](NPC_StartPlayback).

:::

## Descrição

Isso executará um arquivo .rec que deve ser salvo na pasta npcmodes/recordings. Esses arquivos permitem que o NPC siga determinadas ações. Suas ações podem ser registradas manualmente. Para mais informações, verifique as funções relacionadas.

| Nome | Descrição |
| ------------ | --------------------------------------------------------------- |
| playbacktype | O [tipo](../resources/recordtypes) da gravação a ser carregada. |
| recordname[] | O nome do arquivo a ser carregado, sem a extensão .rec.          |

## Exemplos

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "at400_lv_to_sf_x1");
}
```
## Funções Relacionadas

- [StopRecordingPlayback](StopRecordingPlayback): interrompe a reprodução de um arquivo .rec.
