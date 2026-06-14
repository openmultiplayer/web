---
title: NPC_UnloadAllRecords
sidebar_label: NPC_UnloadAllRecords
description: "Descarrega todos os arquivos de gravação NPC da memória."
tags: ["npc", "recording"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Descarrega todos os arquivos de gravação NPC da memória para liberar recursos.

## Retornos

Retorna `true` se todos os registros foram descarregados com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcunloadallrecords", true))
    {
        new bool:success = NPC_UnloadAllRecords();

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "All records unloaded successfully");
        else
            SendClientMessage(playerid, 0xFF0000FF, "Failed to unload all records");
        return 1;
    }
    return 0;
}
```
## Notas

- Isso libera memória usada pelas gravações carregadas
- Todos os registros IDs tornam-se inválidos após esta função
- Qualquer NPCs usando essas gravações interromperá a reprodução

## Funções Relacionadas

- [NPC_LoadRecord](NPC_LoadRecord): Carregar um arquivo de gravação
- [NPC_UnloadRecord](NPC_UnloadRecord): Descarregue gravação específica
- [NPC_GetRecordCount](NPC_GetRecordCount): Obtenha o número de registros carregados
- [NPC_IsValidRecord](NPC_IsValidRecord): Verifique se o registro é válido

## Callbacks Relacionadas

- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Chamado quando a reprodução termina
