---
title: NPC_UnloadRecord
sidebar_label: NPC_UnloadRecord
description: "Descarrega uma gravação NPC específica da memória."
tags: ["npc", "recording"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Descarrega uma gravação NPC específica da memória para liberar recursos.

| Nome | Descrição |
| -------- | ------------------------------ |
| recordId | O ID do registro a ser descarregado |

## Retornos

Retorna `true` se o registro foi descarregado com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcunloadrecord ", true, 17))
    {
        new recordid = strval(cmdtext[17]);

        new bool:success = NPC_UnloadRecord(recordid);

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "Record %d unloaded successfully", recordid);
        else
            SendClientMessage(playerid, 0xFF0000FF, "Failed to unload record %d", recordid);
        return 1;
    }
    return 0;
}
```
## Notas

- Libera memória usada pela gravação específica
- O registro ID torna-se inválido após o descarregamento
- Qualquer NPCs usando esta gravação interromperá a reprodução
- Use `NPC_UnloadAllRecords` para descarregar todas as gravações de uma vez

## Funções Relacionadas

- [NPC_LoadRecord](NPC_LoadRecord): Carregar um arquivo de gravação
- [NPC_UnloadAllRecords](NPC_UnloadAllRecords): Descarregue todas as gravações
- [NPC_IsValidRecord](NPC_IsValidRecord): Verifique se o registro é válido
- [NPC_GetRecordCount](NPC_GetRecordCount): Obtenha o número de registros carregados

## Callbacks Relacionadas

- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Chamado quando a reprodução termina
