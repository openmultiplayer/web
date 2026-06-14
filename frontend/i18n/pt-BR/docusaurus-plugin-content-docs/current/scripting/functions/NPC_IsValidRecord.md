---
title: NPC_IsValidRecord
sidebar_label: NPC_IsValidRecord
description: "Verifica se um arquivo de gravação é válido e carregado."
tags: ["npc", "recording", "validation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se uma gravação ID é válida e carregada.

| Nome | Descrição |
| -------- | ----------------------- |
| recordId | O ID da gravação |

## Retornos

Retorna `true` se a gravação for válida e carregada, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvalidrecord ", true, 18))
    {
        new recordid = strval(cmdtext[18]);

        new bool:isValidRecord = NPC_IsValidRecord(recordid);

        SendClientMessage(playerid, 0x00FF00FF, "Record %d is valid: %s", recordid, isValidRecord ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- A gravação deve ser carregada com NPC_LoadRecord antes de se tornar válida
- Gravações inválidas não podem ser usadas para reprodução

## Funções Relacionadas

- [NPC_LoadRecord](NPC_LoadRecord): Carregar um arquivo de gravação
- [NPC_UnloadRecord](NPC_UnloadRecord): Descarregue uma gravação
- [NPC_StartPlayback](NPC_StartPlayback): Comece a reproduzir a gravação
- [NPC_GetRecordCount](NPC_GetRecordCount): Obter contagem de registros carregados

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
