---
title: NPC_SetSkin
sidebar_label: NPC_SetSkin
description: "Define o modelo de skin de um NPC."
tags: ["npc", "skin", "model"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o modelo de skin de um NPC para alterar sua aparência.

| Nome | Descrição |
| ----- | ------------------------ |
| npcid | O ID do NPC |
| model | O modelo de pele ID para definir |

## Retornos

Retorna `true` se a capa foi definida com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setskin ", true, 9))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new skinid = strval(cmdtext[9]);
        if (skinid < 0 || skinid > 311)
            return SendClientMessage(playerid, 0xFF0000FF, "Skin ID must be between 0 and 311.");

        NPC_SetSkin(npcid, skinid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d skin set to %d", npcid, skinid);

        return 1;
    }
    return 0;
}
```
## Notas

- Pele inválida IDs pode causar falhas visuais

## Funções Relacionadas

- [NPC_GetSkin](NPC_GetSkin): Obtenha a skin atual de NPC
- [NPC_Spawn](NPC_Spawn): Gera NPC com skin padrão
- [NPC_Create](NPC_Create): Criar NPC

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge
