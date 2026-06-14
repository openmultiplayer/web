---
title: NPC_GetRecordCount
sidebar_label: NPC_GetRecordCount
description: "Obtém o número de arquivos de gravação NPC carregados."
tags: ["npc", "recording", "playback"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o número de arquivos de gravação NPC carregados no servidor.

## Retornos

Retorna o número de arquivos de gravação carregados atualmente.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkrecordcount", true))
    {
        new count = NPC_GetRecordCount();
        SendClientMessage(playerid, 0x00FF00FF, "Total records loaded: %d", count);
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna o número total de gravações válidas na memória
- Somente gravações carregadas com sucesso são contadas
- As gravações persistem até serem explicitamente descarregadas ou reinicialização do servidor

## Funções Relacionadas

- [NPC_LoadRecord](NPC_LoadRecord): Carregar um arquivo de gravação
- [NPC_UnloadRecord](NPC_UnloadRecord): Descarregue uma gravação
- [NPC_IsValidRecord](NPC_IsValidRecord): Verifique se o registro é válido
- [NPC_UnloadAllRecords](NPC_UnloadAllRecords): Descarregue todas as gravações

## Callbacks Relacionadas

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): Chamado quando a reprodução começa
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Chamado quando a reprodução termina
