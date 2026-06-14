---
title: NPC_GetAll
sidebar_label: NPC_GetAll
description: "Obtém todos os NPC IDs e os armazena em uma matriz."
tags: ["npc"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém todos os NPC IDs e os armazena em uma matriz.

| Nome | Descrição |
| ------ | ------------------------------------------------ |
| npcs[] | Array para armazenar o NPC IDs, passado por referência. |
| size | Tamanho da matriz.                               |

## Retornos

Retorna o número de NPCs encontrado.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/countnpcs", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);

        SendClientMessage(playerid, 0x00FF00FF, "There are %d NPCs on the server.", count);

        return 1;
    }
   return 0;
}
```
## Notas

:::warning

- A matriz deve ser grande o suficiente para conter todos os NPC IDs.
- Somente NPCs válidos estão incluídos na matriz.
- A função retorna o número real de NPCs encontrados.
- Use isto para iterar todos os NPCs no servidor.

:::

## Funções Relacionadas

- [NPC_Create](NPC_Create): Crie um novo NPC.
- [NPC_IsValid](NPC_IsValid): Verifique se um NPC ID é válido.
- [NPC_Destroy](NPC_Destroy): Destrua um NPC.

## Callbacks Relacionadas

- [OnNPCCreate](../callbacks/OnNPCCreate): Chamado quando um NPC é criado.
