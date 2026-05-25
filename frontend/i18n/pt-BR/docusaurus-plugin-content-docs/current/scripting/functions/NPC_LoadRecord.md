---
title: NPC_LoadRecord
sidebar_label: NPC_LoadRecord
description: "Carrega um arquivo de gravação NPC para reprodução."
tags: ["npc", "recording", "playback"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Carrega um arquivo de gravação NPC para uso em reprodução.

| Nome | Descrição |
| -------------- | ------------------------------ |
| const filePath | O caminho para o arquivo de gravação |

## Retornos

Retorna o ID da gravação carregada ou `INVALID_RECORD_ID` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcloadrecord ", true, 15))
    {
        new filepath[128];
        new len = strlen(cmdtext);
        if (len <= 15)
            return SendClientMessage(playerid, 0xFF0000FF, "Usage: /npcloadrecord [filepath]");

        strmid(filepath, cmdtext, 15, len);

        new recordid = NPC_LoadRecord(filepath);

        if (recordid == -1)
            SendClientMessage(playerid, 0xFF0000FF, "Failed to load record from: %s", filepath);
        else
            SendClientMessage(playerid, 0x00FF00FF, "Record loaded from %s with ID: %d", filepath, recordid);
        return 1;
    }
    return 0;
}
```

## Notas

- Carregue as gravações antes de usá-las com NPC_StartPlayback

:::warning

Ao contrário de [NPC_StartPlayback](NPC_StartPlayback), `filePath` exige o caminho completo a partir da raiz do servidor e a extensão `.rec`.  
Exemplo: `npcmodes/recordings/myrecording.rec`

:::

## Funções Relacionadas

- [NPC_UnloadRecord](NPC_UnloadRecord): Descarregue uma gravação
- [NPC_UnloadAllRecords](NPC_UnloadAllRecords): Descarregue todas as gravações
- [NPC_StartPlayback](NPC_StartPlayback): Comece a reproduzir a gravação
- [NPC_GetRecordCount](NPC_GetRecordCount): Obtenha contagem de registros carregados

## Callbacks Relacionadas

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): Chamado quando a reprodução começa
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Chamado quando a reprodução termina
